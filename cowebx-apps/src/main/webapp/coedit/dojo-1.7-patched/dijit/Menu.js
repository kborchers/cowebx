/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/kernel",".","./popup","dojo/window","./DropDownMenu","dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/_base/html","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window"],function(_1,_2,pm){_1.declare("dijit.Menu",_2.DropDownMenu,{constructor:function(){this._bindings=[];},targetNodeIds:[],contextMenuForWindow:false,leftClickToOpen:false,refocus:true,postCreate:function(){if(this.contextMenuForWindow){this.bindDomNode(_1.body());}else{_1.forEach(this.targetNodeIds,this.bindDomNode,this);}this.inherited(arguments);},_iframeContentWindow:function(_3){return _1.window.get(this._iframeContentDocument(_3))||this._iframeContentDocument(_3)["__parent__"]||(_3.name&&_1.doc.frames[_3.name])||null;},_iframeContentDocument:function(_4){return _4.contentDocument||(_4.contentWindow&&_4.contentWindow.document)||(_4.name&&_1.doc.frames[_4.name]&&_1.doc.frames[_4.name].document)||null;},bindDomNode:function(_5){_5=_1.byId(_5);var cn;if(_5.tagName.toLowerCase()=="iframe"){var _6=_5,_7=this._iframeContentWindow(_6);cn=_1.withGlobal(_7,_1.body);}else{cn=(_5==_1.body()?_1.doc.documentElement:_5);}var _8={node:_5,iframe:_6};_1.attr(_5,"_dijitMenu"+this.id,this._bindings.push(_8));var _9=_1.hitch(this,function(cn){return [_1.connect(cn,this.leftClickToOpen?"onclick":"oncontextmenu",this,function(_a){_1.stopEvent(_a);this._scheduleOpen(_a.target,_6,{x:_a.pageX,y:_a.pageY});}),_1.connect(cn,"onkeydown",this,function(_b){if(_b.shiftKey&&_b.keyCode==_1.keys.F10){_1.stopEvent(_b);this._scheduleOpen(_b.target,_6);}})];});_8.connects=cn?_9(cn):[];if(_6){_8.onloadHandler=_1.hitch(this,function(){var _c=this._iframeContentWindow(_6);cn=_1.withGlobal(_c,_1.body);_8.connects=_9(cn);});if(_6.addEventListener){_6.addEventListener("load",_8.onloadHandler,false);}else{_6.attachEvent("onload",_8.onloadHandler);}}},unBindDomNode:function(_d){var _e;try{_e=_1.byId(_d);}catch(e){return;}var _f="_dijitMenu"+this.id;if(_e&&_1.hasAttr(_e,_f)){var bid=_1.attr(_e,_f)-1,b=this._bindings[bid];_1.forEach(b.connects,_1.disconnect);var _10=b.iframe;if(_10){if(_10.removeEventListener){_10.removeEventListener("load",b.onloadHandler,false);}else{_10.detachEvent("onload",b.onloadHandler);}}_1.removeAttr(_e,_f);delete this._bindings[bid];}},_scheduleOpen:function(_11,_12,_13){if(!this._openTimer){this._openTimer=setTimeout(_1.hitch(this,function(){delete this._openTimer;this._openMyself({target:_11,iframe:_12,coords:_13});}),1);}},_openMyself:function(_14){var _15=_14.target,_16=_14.iframe,_17=_14.coords;if(_17){if(_16){var od=_15.ownerDocument,ifc=_1.position(_16,true),win=this._iframeContentWindow(_16),_18=_1.withGlobal(win,"_docScroll",_1);var cs=_1.getComputedStyle(_16),tp=_1._toPixelValue,_19=(_1.isIE&&_1.isQuirks?0:tp(_16,cs.paddingLeft))+(_1.isIE&&_1.isQuirks?tp(_16,cs.borderLeftWidth):0),top=(_1.isIE&&_1.isQuirks?0:tp(_16,cs.paddingTop))+(_1.isIE&&_1.isQuirks?tp(_16,cs.borderTopWidth):0);_17.x+=ifc.x+_19-_18.x;_17.y+=ifc.y+top-_18.y;}}else{_17=_1.position(_15,true);_17.x+=10;_17.y+=10;}var _1a=this;var _1b=this._focusManager.get("prevNode");var _1c=this._focusManager.get("curNode");var _1d=!_1c||(_1.isDescendant(_1c,this.domNode))?_1b:_1c;function _1e(){if(_1a.refocus&&_1d){_1d.focus();}pm.close(_1a);};pm.open({popup:this,x:_17.x,y:_17.y,onExecute:_1e,onCancel:_1e,orient:this.isLeftToRight()?"L":"R"});this.focus();this._onBlur=function(){this.inherited("_onBlur",arguments);pm.close(this);};},uninitialize:function(){_1.forEach(this._bindings,function(b){if(b){this.unBindDomNode(b.node);}},this);this.inherited(arguments);}});return _2.Menu;});