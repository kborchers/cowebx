/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/kernel","..","./_dndSelector","dojo/dnd/Manager","dojo/_base/array","dojo/_base/connect","dojo/_base/html"],function(_1,_2){_1.declare("dijit.tree.dndSource",_2.tree._dndSelector,{isSource:true,accept:["text","treeNode"],copyOnly:false,dragThreshold:5,betweenThreshold:0,constructor:function(_3,_4){if(!_4){_4={};}_1.mixin(this,_4);this.isSource=typeof _4.isSource=="undefined"?true:_4.isSource;var _5=_4.accept instanceof Array?_4.accept:["text","treeNode"];this.accept=null;if(_5.length){this.accept={};for(var i=0;i<_5.length;++i){this.accept[_5[i]]=1;}}this.isDragging=false;this.mouseDown=false;this.targetAnchor=null;this.targetBox=null;this.dropPosition="";this._lastX=0;this._lastY=0;this.sourceState="";if(this.isSource){_1.addClass(this.node,"dojoDndSource");}this.targetState="";if(this.accept){_1.addClass(this.node,"dojoDndTarget");}this.topics=[_1.subscribe("/dnd/source/over",this,"onDndSourceOver"),_1.subscribe("/dnd/start",this,"onDndStart"),_1.subscribe("/dnd/drop",this,"onDndDrop"),_1.subscribe("/dnd/cancel",this,"onDndCancel")];},checkAcceptance:function(_6,_7){return true;},copyState:function(_8){return this.copyOnly||_8;},destroy:function(){this.inherited("destroy",arguments);_1.forEach(this.topics,_1.unsubscribe);this.targetAnchor=null;},_onDragMouse:function(e){var m=_1.dnd.manager(),_9=this.targetAnchor,_a=this.current,_b=this.dropPosition;var _c="Over";if(_a&&this.betweenThreshold>0){if(!this.targetBox||_9!=_a){this.targetBox=_1.position(_a.rowNode,true);}if((e.pageY-this.targetBox.y)<=this.betweenThreshold){_c="Before";}else{if((e.pageY-this.targetBox.y)>=(this.targetBox.h-this.betweenThreshold)){_c="After";}}}if(_a!=_9||_c!=_b){if(_9){this._removeItemClass(_9.rowNode,_b);}if(_a){this._addItemClass(_a.rowNode,_c);}if(!_a){m.canDrop(false);}else{if(_a==this.tree.rootNode&&_c!="Over"){m.canDrop(false);}else{if(m.source==this&&(_a.id in this.selection)){m.canDrop(false);}else{if(this.checkItemAcceptance(_a.rowNode,m.source,_c.toLowerCase())&&!this._isParentChildDrop(m.source,_a.rowNode)){m.canDrop(true);}else{m.canDrop(false);}}}}this.targetAnchor=_a;this.dropPosition=_c;}},onMouseMove:function(e){if(this.isDragging&&this.targetState=="Disabled"){return;}this.inherited(arguments);var m=_1.dnd.manager();if(this.isDragging){this._onDragMouse(e);}else{if(this.mouseDown&&this.isSource&&(Math.abs(e.pageX-this._lastX)>=this.dragThreshold||Math.abs(e.pageY-this._lastY)>=this.dragThreshold)){var _d=this.getSelectedTreeNodes();if(_d.length){if(_d.length>1){var _e=this.selection,i=0,r=[],n,p;nextitem:while((n=_d[i++])){for(p=n.getParent();p&&p!==this.tree;p=p.getParent()){if(_e[p.id]){continue nextitem;}}r.push(n);}_d=r;}_d=_1.map(_d,function(n){return n.domNode;});m.startDrag(this,_d,this.copyState(_1.isCopyKey(e)));}}}},onMouseDown:function(e){this.mouseDown=true;this.mouseButton=e.button;this._lastX=e.pageX;this._lastY=e.pageY;this.inherited(arguments);},onMouseUp:function(e){if(this.mouseDown){this.mouseDown=false;this.inherited(arguments);}},onMouseOut:function(){this.inherited(arguments);this._unmarkTargetAnchor();},checkItemAcceptance:function(_f,_10,_11){return true;},onDndSourceOver:function(_12){if(this!=_12){this.mouseDown=false;this._unmarkTargetAnchor();}else{if(this.isDragging){var m=_1.dnd.manager();m.canDrop(false);}}},onDndStart:function(_13,_14,_15){if(this.isSource){this._changeState("Source",this==_13?(_15?"Copied":"Moved"):"");}var _16=this.checkAcceptance(_13,_14);this._changeState("Target",_16?"":"Disabled");if(this==_13){_1.dnd.manager().overSource(this);}this.isDragging=true;},itemCreator:function(_17,_18,_19){return _1.map(_17,function(_1a){return {"id":_1a.id,"name":_1a.textContent||_1a.innerText||""};});},onDndDrop:function(_1b,_1c,_1d){if(this.containerState=="Over"){var _1e=this.tree,_1f=_1e.model,_20=this.targetAnchor,_21=false;this.isDragging=false;var _22;var _23;_22=(_20&&_20.item)||_1e.item;if(this.dropPosition=="Before"||this.dropPosition=="After"){_22=(_20.getParent()&&_20.getParent().item)||_1e.item;_23=_20.getIndexInParent();if(this.dropPosition=="After"){_23=_20.getIndexInParent()+1;}}else{_22=(_20&&_20.item)||_1e.item;}var _24;_1.forEach(_1c,function(_25,idx){var _26=_1b.getItem(_25.id);if(_1.indexOf(_26.type,"treeNode")!=-1){var _27=_26.data,_28=_27.item,_29=_27.getParent().item;}if(_1b==this){if(typeof _23=="number"){if(_22==_29&&_27.getIndexInParent()<_23){_23-=1;}}_1f.pasteItem(_28,_29,_22,_1d,_23);}else{if(_1f.isItem(_28)){_1f.pasteItem(_28,_29,_22,_1d,_23);}else{if(!_24){_24=this.itemCreator(_1c,_20.rowNode,_1b);}_1f.newItem(_24[idx],_22,_23);}}},this);this.tree._expandNode(_20);}this.onDndCancel();},onDndCancel:function(){this._unmarkTargetAnchor();this.isDragging=false;this.mouseDown=false;delete this.mouseButton;this._changeState("Source","");this._changeState("Target","");},onOverEvent:function(){this.inherited(arguments);_1.dnd.manager().overSource(this);},onOutEvent:function(){this._unmarkTargetAnchor();var m=_1.dnd.manager();if(this.isDragging){m.canDrop(false);}m.outSource(this);this.inherited(arguments);},_isParentChildDrop:function(_2a,_2b){if(!_2a.tree||_2a.tree!=this.tree){return false;}var _2c=_2a.tree.domNode;var ids=_2a.selection;var _2d=_2b.parentNode;while(_2d!=_2c&&!ids[_2d.id]){_2d=_2d.parentNode;}return _2d.id&&ids[_2d.id];},_unmarkTargetAnchor:function(){if(!this.targetAnchor){return;}this._removeItemClass(this.targetAnchor.rowNode,this.dropPosition);this.targetAnchor=null;this.targetBox=null;this.dropPosition=null;},_markDndStatus:function(_2e){this._changeState("Source",_2e?"Copied":"Moved");}});return _2.tree.dndSource;});