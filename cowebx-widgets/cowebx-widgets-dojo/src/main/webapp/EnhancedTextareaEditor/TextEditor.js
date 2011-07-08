define([
    'coweb/main',
    './ld',
    'dijit/ColorPalette',
    'dijit/Toolbar',
    'dijit/form/Button',
    'dijit/ToolbarSeparator'
    ], function(coweb,ld,ColorPalette,Toolbar,Button,Separator) {
    var TextEditor = function(args){
        this.load_template('../lib/cowebx/dojo/EnhancedTextareaEditor/textarea.css');
        this.id = args.id;
        this.listen = args.listen;
        if(!this.go)
            this.go = true;
        if(!this.id)
            throw new Error('missing id argument');
    
        this._por = {start : 0, end: 0};
        this._toolbar = null;
        this._palette = null;
        this._bgPalette = null;
        this._textarea = dojo.create('textarea', {'class':'textarea',id:'area'}, args.domNode);
        this.oldSnapshot = this.snapshot();
        this.newSnapshot = null;
        this.t = null;
        this.q = [];
        this.min = 0; 
        this.max = 0;
        this.value = '';
        this.shareShowing = false;
        this._buildShareButton();
        
        this.bold = false;
        this.italic = false;
        this.underline = false;
        this.forecolor = false;
        this.currColor = null;
        this.forecolor = false;
        this.hilitecolor = false;
        this.currBGColor = null;
    
        this.collab = coweb.initCollab({id : this.id});  
        this.collab.subscribeReady(this,'onCollabReady');
        this.collab.subscribeSync('editorUpdate', this, 'onRemoteChange');
        this.collab.subscribeSync('styleUpdate', this, 'onRemoteStyleChange');
        this.collab.subscribeStateRequest(this, 'onStateRequest');
    	this.collab.subscribeStateResponse(this, 'onStateResponse');
    
        dojo.connect(this._textarea, 'onmousedown', this, '_updatePOR');
        dojo.connect(this._textarea, 'onmouseup', this, '_updatePOR');
        dojo.connect(this._textarea, 'onclick', this, 'hidePalette');
        dojo.connect(this._textarea, 'onmousemove', this, '_updatePOR');
        dojo.connect(this._textarea, 'onkeydown', this, '_updatePOR');
        dojo.connect(this._textarea, 'onkeyup', this, '_updatePOR');
        dojo.connect(this._textarea, 'onfocus', this, '_onFocus');
        dojo.connect(this._textarea, 'onblur', this, '_onBlur');
    
        this.util = new ld({});
        
        this.buildToolbar();

        if(this.go == true)
            this.listenInit();
    };
    var proto = TextEditor.prototype;
    
    proto.onCollabReady = function(){
        this.collab.pauseSync();
    };

    proto.listenInit = function(){
        this.collab.pauseSync();
        this.t = setTimeout(dojo.hitch(this, 'iterate'), 100);
    };
    
    proto.iterate = function() { 
        this.iterateSend();
        this.iterateRecv();
    };
    
    proto.iterateSend = function() {
        this.newSnapshot = this.snapshot();
        var oldLength = this.oldSnapshot.length;
        var newLength = this.newSnapshot.length;
        
        if(oldLength < newLength){
            var mx = this.max+(newLength - oldLength);
            if(this.oldSnapshot != this.newSnapshot)
                var syncs = this.util.ld(this.oldSnapshot.substring(this.min, this.max), this.newSnapshot.substring(this.min, mx));
            //console.log('old = '+this.oldSnapshot.substring(this.min, this.max));
            //console.log('new = '+this.newSnapshot.substring(this.min, mx));
            
            if(syncs){
                //console.log(syncs);
                for(var i=0; i<syncs.length; i++){
                    this.collab.sendSync('editorUpdate', syncs[i].ch, syncs[i].ty, syncs[i].pos+this.min);
                }
            }
            
        }else if(newLength < oldLength){
            var mx = this.max+(oldLength-newLength);
            var mn = (this.min-1 > -1) ? this.min-1 : 0;
            if(this.oldSnapshot != this.newSnapshot)
                var syncs = this.util.ld(this.oldSnapshot.substring(mn, mx), this.newSnapshot.substring(mn, this.max));
            //console.log('old = '+this.oldSnapshot.substring(mn, mx));
            //console.log('new = '+this.newSnapshot.substring(mn, this.max));
            
            if(syncs){
                //console.log(syncs);
                for(var i=0; i<syncs.length; i++){
                    this.collab.sendSync('editorUpdate', syncs[i].ch, syncs[i].ty, syncs[i].pos+mn);
                }
            }
        }
    };
    
    proto.iterateRecv = function() {
        this.collab.resumeSync();
        this.collab.pauseSync();
        if(this.q.length != 0)
            this.runOps();
        this.q = [];
        this.oldSnapshot = this.snapshot();
        this.t = setTimeout(dojo.hitch(this, 'iterate'), 100);
        this.min = this._por.start;
        this.max = this._por.end;
    };
    
    proto._updatePOR = function(e) {
        if(this._focused) {
            var t = e ? e.target : this._textarea;
            this._por.start = t.selectionStart;
            this._por.end = t.selectionEnd;
        }
        
        if(this._por.start < this.min)
            this.min = this._por.start;
        if(this._por.end > this.max)
            this.max = this._por.end;
    };
    
    proto.onRemoteChange = function(obj){
        this.q.push(obj);
    };
    
    proto.onRemoteStyleChange = function(obj){
        if(obj.value.style == 'bold')
            this.onBoldClick();
        if(obj.value.style == 'italic')
            this.onItalicClick();
        if(obj.value.style == 'underline')
            this.onUnderlineClick();
        if(obj.value.style == 'forecolor')
            this.changeColor(obj.value.value);
        if(obj.value.style == 'bgcolor')
            this.changeBGColor(obj.value.value);
    };
    
    proto.runOps = function(){
        this.value = this._textarea.value;
        this._updatePOR();
        for(var i=0; i<this.q.length; i++){
            if(this.q[i].type == 'insert')
                this.insertChar(this.q[i].value, this.q[i].position);
            if(this.q[i].type == 'delete')
                this.deleteChar(this.q[i].position);
            if(this.q[i].type == 'update')
                this.updateChar(this.q[i].value, this.q[i].position);
        }
        this._textarea.value = this.value;
        this._moveCaretToPOR();
    };
        
    proto.insertChar = function(c, pos) {
        //this._updatePOR();
        var t = this._textarea,
        por = this._por,
        start = por.start,
        end = por.end;
        //t.value = t.value.substr(0, pos) + c + t.value.substr(pos);
        this.value = this.value.substr(0, pos) + c + this.value.substr(pos);
        if(pos < por.end) {
            if(pos >= por.start && por.end != por.start) {
                ++start;
            }
            ++end;
        }
        if(pos < por.start) {
            ++start;
        }
        por.start = start;
        por.end = end;
        //this._moveCaretToPOR();
    };
    
    proto.insertString = function(string, pos) {
        var x = pos;
        for(var i=0; i<string.length; i++){
            this.insertChar(string[i], x);
            x++;
        }
    };
    
    proto.deleteString = function(start, end) {
        for(var i=start; i<end; i++){
            this.deleteChar(i);
        }
    };
        
    proto.deleteChar = function(pos) {
        //this._updatePOR();
        var t = this._textarea;
        //t.value = t.value.substr(0, pos) + t.value.substr(pos+1);
        this.value = this.value.substr(0, pos) + this.value.substr(pos+1);
        if(pos < this._por.start) {
            --this._por.start;
        }
        if(pos < this._por.end) {
            --this._por.end;
        }
        //this._moveCaretToPOR();
    };
        
    proto.updateChar = function(c, pos) {
        //this._updatePOR();
        var t = this._textarea;
        //t.value = t.value.substr(0, pos) + c + t.value.substr(pos+1);
        this.value = this.value.substr(0, pos) + c + this.value.substr(pos+1);
    };

    proto.snapshot = function(){
        return this._getValueAttr();
    };

    proto._getValueAttr = function() {
        return this._textarea.value;
    };

    proto._moveCaretToPOR = function() {
        if(this._focused) {
            this._textarea.setSelectionRange(this._por.start, this._por.end);
        }
    };
    
    proto.setPOR = function(pos){
        this._por.start = pos;
        this._por.end = pos;
    };
        
    proto._onFocus = function(event) {
        this._focused = true;
        var self = this;
        setTimeout(function() {
            self._moveCaretToPOR();
        },0);
    };
        
    proto._onBlur = function(event) {
        this._focused = false;
    };
    
    proto.cleanup = function() {
        if(this.t != null){
            clearTimeout(this.t);
            this. t = null;
        }
    };
    
    proto.onStateRequest = function(token){
        var state = {
            snapshot: this.newSnapshot,
            bold: this.bold,
            italic: this.italic,
            underline: this.underline,
            currColor: this.currColor,
            currBGColor: this.currBGColor
        };
        this.collab.sendStateResponse(state,token);
    };
    
    proto.onStateResponse = function(obj){
        this._textarea.value = obj.snapshot;
        this.newSnapshot = obj.snapshot;
        this.oldSnapshot = obj.snapshot;
        if(obj.bold == true)
            this.onBoldClick();
        if(obj.italic == true)
            this.onItalicClick();
        if(obj.underline == true)
            this.onUnderlineClick();
        if(obj.currColor != null)
            this.changeColor(obj.currColor);
        if(obj.currBGColor != null)
            this.changeBGColor(obj.currBGColor);
    };
    
    proto.buildToolbar = function(){
        var toolbarNode = dojo.create('div',{style:'width:100%;height:50px'},this._textarea,'before');
        this._toolbar = new Toolbar({},toolbarNode);
        dojo.forEach(["Bold", "Italic", "Underline"], dojo.hitch(this, function(label) {
            var button = new Button({
                label: label,
                showLabel: false,
                iconClass: "dijitEditorIcon dijitEditorIcon" + label
            });
            this._toolbar.addChild(button);
            dojo.connect(button, 'onclick', this, 'on'+label+'Click');
        }));
        var sep = new Separator({});
        this._toolbar.addChild(sep);
        dojo.forEach(["ForeColor","HiliteColor"], dojo.hitch(this, function(label) {
            var button = new Button({
                label: label,
                showLabel: false,
                iconClass: "dijitEditorIcon dijitEditorIcon" + label
            });
            this._toolbar.addChild(button);
            dojo.connect(button, 'onclick', this, 'on'+label+'Click');
        }));
        var paletteNode = dojo.create('div',{style:'width:100%;'},this._toolbar.domNode,'after');
        this._palette = new ColorPalette({'class':'palette'},paletteNode);
        dojo.connect(this._palette, 'onChange', this, 'changeColor');
        var bgPaletteNode = dojo.create('div',{style:'width:100%;'},this._toolbar.domNode,'after');
        this._bgPalette = new ColorPalette({'class':'palette'},bgPaletteNode);
        dojo.connect(this._bgPalette, 'onChange', this, 'changeBGColor');
    };
    
    proto.onBoldClick = function(){
        if(this.bold == false){
            var curr = dojo.attr(this._textarea,'style');
            if(curr != null){
                dojo.attr(this._textarea,'style',curr+'font-weight: bold;');
            }else{
                dojo.attr(this._textarea,'style','font-weight: bold;');
            }
            this.bold = true;
            console.log('bold');
        }else if(this.bold){
            var curr = dojo.attr(this._textarea,'style');
            var newCurr = curr.replace('font-weight: bold;',' ');
            dojo.attr(this._textarea,'style',newCurr);
            this.bold = false;
        }
        this.collab.sendSync('styleUpdate', { style: 'bold' }, null);
    };
    
    proto.onItalicClick = function(){
        if(this.italic == false){
            var curr = dojo.attr(this._textarea,'style');
            dojo.attr(this._textarea,'style',curr+'font-style: italic;');
            this.italic = true;
        }else if(this.italic){
            var curr = dojo.attr(this._textarea,'style');
            var newCurr = curr.replace('font-style: italic;',' ');
            dojo.attr(this._textarea,'style',newCurr);
            this.italic = false;
        }
        this.collab.sendSync('styleUpdate', { style: 'italic' }, null);
    };
    
    proto.onUnderlineClick = function(){
        if(this.underline == false){
            var curr = dojo.attr(this._textarea,'style');
            dojo.attr(this._textarea,'style',curr+'text-decoration: underline;');
            this.underline = true;
        }else if(this.underline){
            var curr = dojo.attr(this._textarea,'style');
            var newCurr = curr.replace('text-decoration: underline;',' ');
            dojo.attr(this._textarea,'style',newCurr);
            this.underline = false;
        }
        this.collab.sendSync('styleUpdate', { style: 'underline' }, null);
    };
    
    proto.onForeColorClick = function() {
        if(this.forecolor == false){
            dojo.style(this._bgPalette.domNode, 'display', 'none');
            dojo.style(this._palette.domNode, 'display', 'block');
            this.forecolor = true;
        }else if(this.forecolor){
            dojo.style(this._palette.domNode, 'display', 'none');
            this.forecolor = false;
        }
    };
    
    proto.onHiliteColorClick = function() {
        if(this.hilitecolor == false){
            dojo.style(this._palette.domNode, 'display', 'none');
            dojo.style(this._bgPalette.domNode, 'display', 'block');
            this.hilitecolor = true;
        }else if(this.hilitecolor){
            dojo.style(this._bgPalette.domNode, 'display', 'none');
            this.hilitecolor = false;
        }
    };
    
    proto.changeColor = function(color){
        dojo.style(this._textarea, 'color', color);
        this.currColor = color;
        this.collab.sendSync('styleUpdate', { style: 'forecolor',value:color }, null);
		this.hidePalette();
    };
    
    proto.changeBGColor = function(color){
        dojo.style(this._textarea, 'background', color);
        this.currBGColor = color;
        this.collab.sendSync('styleUpdate', { style: 'bgcolor',value:color }, null);
		this.hidePalette();
    };

	proto.hidePalette = function(){
		dojo.style(this._palette.domNode, 'display', 'none');
		dojo.style(this._bgPalette.domNode, 'display', 'none');
		this.hilitecolor = false;
		this.forecolor = false;
	};
    
    proto._buildShareButton = function() {
        var a = dojo.create('a',{innerHTML:'share', 'class':'share', id:'shareButton'}, this._textarea, 'before');
        dojo.connect(a, 'onclick', this, 'onShareClick');
        var b = dojo.create('div',{innerHTML:'email to send to:<br>','class':'emailBox',id:'sendBox'},this._textarea,'before');
        var c = dojo.create('input',{type:'text',id:'sendInput'},b,'last');
        var d = dojo.create('a',{innerHTML:'send', 'class':'send'}, c, 'after');
        dojo.connect(d, 'onclick', this, 'onSendClick');
    };
    
    proto.onShareClick = function(e) {
        if(this.shareShowing == false){
            this.shareShowing = true;
            dojo.fadeIn({node:'sendBox'}).play();
        }else{
            dojo.fadeOut({node:'sendBox'}).play();
        }
    };
    
    proto.onSendClick = function(e) {
        var email = dojo.byId('sendInput').value;
        if(email != ''){
            var username = 'Username=opencoweb';
            var password = '&Password=777132XK';
            var fromName = '&FromName=OpenCoweb';
            var fromEmail = '&FromEmail=opencoweb@us.ibm.com';
            var toEmail = '&ToEmailAddress='+email;
            var subject = '&Subject=OpenCoweb Document';
            var messagePlain = '&MessagePlain=';
            var messageHTML = '&MessageHTML='+this.formatShareMsg();
            var options = '&Options=';
            var base = 'http://api.jangomail.com/api.asmx/SendTransactionalEmail?';
            this.load_script(base+username+password+fromName+fromEmail+toEmail+subject+messagePlain+messageHTML+options);
            dojo.fadeOut({node:'sendBox'}).play();
        }
    };
    
    proto.formatShareMsg = function(){
        var date = new Date();
        
        var title = '<strong><span style="font-size:14px">OpenCoweb Document</span><br><br>';
        var time = 'Shared at:<br></strong>'+date+'<br><br>';
        var doc = '<strong>Document:<br></strong>'+this.snapshot();
        return title+time+doc;
    };
    
    proto.load_template = function(url) {
       var e = document.createElement("link");
       e.href = url;
       e.type = "text/css";
       e.rel = "stylesheet";
       e.media = "screen";
       document.getElementsByTagName("head")[0].appendChild(e);
    };
    
    proto.load_script = function(url) {
        var script_id = null;
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', url);
        script.setAttribute('id', 'script_id');

        script_id = document.getElementById('script_id');
        if(script_id){
            document.getElementsByTagName('head')[0].removeChild(script_id);
        }

        // Insert <script> into DOM
        document.getElementsByTagName('head')[0].appendChild(script);
    };
    
    

    return TextEditor;
});