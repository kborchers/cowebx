/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dijit/form/_FormWidget","dijit/_Templated"],function(_1,_2,_3){_1.getObject("dojox.form.FileInput",1);_1.experimental("dojox.form.FileInput");_1.declare("dojox.form.FileInput",_2.form._FormWidget,{label:"Browse ...",cancelText:"Cancel",name:"uploadFile",templateString:_1.cache("dojox.form","resources/FileInput.html"),startup:function(){this._listener=this.connect(this.fileInput,"onchange","_matchValue");this._keyListener=this.connect(this.fileInput,"onkeyup","_matchValue");},postCreate:function(){},_matchValue:function(){this.inputNode.value=this.fileInput.value;if(this.inputNode.value){this.cancelNode.style.visibility="visible";_1.fadeIn({node:this.cancelNode,duration:275}).play();}},setLabel:function(_4,_5){this.titleNode.innerHTML=_4;},reset:function(e){this.disconnect(this._listener);this.disconnect(this._keyListener);if(this.fileInput){this.domNode.removeChild(this.fileInput);}_1.fadeOut({node:this.cancelNode,duration:275}).play();this.fileInput=document.createElement("input");this.fileInput.setAttribute("type","file");this.fileInput.setAttribute("id",this.id);this.fileInput.setAttribute("name",this.name);_1.addClass(this.fileInput,"dijitFileInputReal");this.domNode.appendChild(this.fileInput);this._keyListener=this.connect(this.fileInput,"onkeyup","_matchValue");this._listener=this.connect(this.fileInput,"onchange","_matchValue");this.inputNode.value="";}});});require(["dojox/form/FileInput"]);