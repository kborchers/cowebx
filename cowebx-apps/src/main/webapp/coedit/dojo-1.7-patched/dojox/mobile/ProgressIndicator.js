/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/html"],function(_1){dojo.declare("dojox.mobile.ProgressIndicator",null,{interval:100,colors:["#C0C0C0","#C0C0C0","#C0C0C0","#C0C0C0","#C0C0C0","#C0C0C0","#B8B9B8","#AEAFAE","#A4A5A4","#9A9A9A","#8E8E8E","#838383"],_bars:[],constructor:function(){this.domNode=dojo.create("DIV");this.domNode.className="mblProgContainer";this.spinnerNode=dojo.create("DIV",null,this.domNode);for(var i=0;i<this.colors.length;i++){var _2=dojo.create("DIV",{className:"mblProg mblProg"+i},this.spinnerNode);this._bars.push(_2);}},start:function(){if(this.imageNode){var _3=this.imageNode;var l=Math.round((this.domNode.offsetWidth-_3.offsetWidth)/2);var t=Math.round((this.domNode.offsetHeight-_3.offsetHeight)/2);_3.style.margin=t+"px "+l+"px";return;}var _4=0;var _5=this;var n=this.colors.length;this.timer=setInterval(function(){_4--;_4=_4<0?n-1:_4;var c=_5.colors;for(var i=0;i<n;i++){var _6=(_4+i)%n;_5._bars[i].style.backgroundColor=c[_6];}},this.interval);},stop:function(){if(this.timer){clearInterval(this.timer);}this.timer=null;if(this.domNode.parentNode){this.domNode.parentNode.removeChild(this.domNode);}},setImage:function(_7){if(_7){this.imageNode=dojo.create("IMG",{src:_7},this.domNode);this.spinnerNode.style.display="none";}else{if(this.imageNode){this.domNode.removeChild(this.imageNode);this.imageNode=null;}this.spinnerNode.style.display="";}}});dojox.mobile.ProgressIndicator._instance=null;dojox.mobile.ProgressIndicator.getInstance=function(){if(!dojox.mobile.ProgressIndicator._instance){dojox.mobile.ProgressIndicator._instance=new dojox.mobile.ProgressIndicator();}return dojox.mobile.ProgressIndicator._instance;};return dojox.mobile.ProgressIndicator;});