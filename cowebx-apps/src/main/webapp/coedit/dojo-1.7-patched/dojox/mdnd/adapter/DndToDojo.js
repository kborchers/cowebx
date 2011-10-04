/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dojox/mdnd/PureSource","dojox/mdnd/LazyManager"],function(_1,_2,_3){_1.getObject("dojox.mdnd.adapter.DndToDojo",1);_1.declare("dojox.mdnd.adapter.DndToDojo",null,{_dojoList:null,_currentDojoArea:null,_dojoxManager:null,_dragStartHandler:null,_dropHandler:null,_moveHandler:null,_moveUpHandler:null,_draggedNode:null,constructor:function(){this._dojoList=[];this._currentDojoArea=null;this._dojoxManager=_3.mdnd.areaManager();this._dragStartHandler=_1.subscribe("/dojox/mdnd/drag/start",this,function(_4,_5,_6){this._draggedNode=_4;this._moveHandler=_1.connect(_1.doc,"onmousemove",this,"onMouseMove");});this._dropHandler=_1.subscribe("/dojox/mdnd/drop",this,function(_7,_8,_9){if(this._currentDojoArea){_1.publish("/dojox/mdnd/adapter/dndToDojo/cancel",[this._currentDojoArea.node,this._currentDojoArea.type,this._draggedNode,this.accept]);}this._draggedNode=null;this._currentDojoArea=null;_1.disconnect(this._moveHandler);});},_getIndexDojoArea:function(_a){if(_a){for(var i=0,l=this._dojoList.length;i<l;i++){if(this._dojoList[i].node===_a){return i;}}}return -1;},_initCoordinates:function(_b){if(_b){var _c=_1.position(_b,true),_d={};_d.x=_c.x;_d.y=_c.y;_d.x1=_c.x+_c.w;_d.y1=_c.y+_c.h;return _d;}return null;},register:function(_e,_f,_10){if(this._getIndexDojoArea(_e)==-1){var _11=this._initCoordinates(_e),_12={"node":_e,"type":_f,"dojo":(_10)?_10:false,"coords":_11};this._dojoList.push(_12);if(_10&&!this._lazyManager){this._lazyManager=new _3.mdnd.LazyManager();}}},unregisterByNode:function(_13){var _14=this._getIndexDojoArea(_13);if(_14!=-1){this._dojoList.splice(_14,1);}},unregisterByType:function(_15){if(_15){var _16=[];_1.forEach(this._dojoList,function(_17,i){if(_17.type!=_15){_16.push(_17);}});this._dojoList=_16;}},unregister:function(){this._dojoList=[];},refresh:function(){var _18=this._dojoList;this.unregister();_1.forEach(_18,function(_19){_19.coords=this._initCoordinates(_19.node);},this);this._dojoList=_18;},refreshByType:function(_1a){var _1b=this._dojoList;this.unregister();_1.forEach(_1b,function(_1c){if(_1c.type==_1a){_1c.coords=this._initCoordinates(_1c.node);}},this);this._dojoList=_1b;},_getHoverDojoArea:function(_1d){this._oldDojoArea=this._currentDojoArea;this._currentDojoArea=null;var x=_1d.x;var y=_1d.y;var _1e=this._dojoList.length;for(var i=0;i<_1e;i++){var _1f=this._dojoList[i];var _20=_1f.coords;if(_20.x<=x&&x<=_20.x1&&_20.y<=y&&y<=_20.y1){this._currentDojoArea=_1f;break;}}},onMouseMove:function(e){var _21={"x":e.pageX,"y":e.pageY};this._getHoverDojoArea(_21);if(this._currentDojoArea!=this._oldDojoArea){if(this._currentDojoArea==null){this.onDragExit(e);}else{if(this._oldDojoArea==null){this.onDragEnter(e);}else{this.onDragExit(e);this.onDragEnter(e);}}}},isAccepted:function(_22,_23){return true;},onDragEnter:function(e){if(this._currentDojoArea.dojo){_1.disconnect(this._dojoxManager._dragItem.handlers.pop());_1.disconnect(this._dojoxManager._dragItem.handlers.pop());_1.disconnect(this._dojoxManager._dragItem.item.events.pop());_1.body().removeChild(this._dojoxManager._cover);_1.body().removeChild(this._dojoxManager._cover2);var _24=this._dojoxManager._dragItem.item.node;if(_3.mdnd.adapter._dndFromDojo){_3.mdnd.adapter._dndFromDojo.unsubscribeDnd();}_1.style(_24,{"position":"relative","top":"0","left":"0"});this._lazyManager.startDrag(e,_24);var _25=_1.connect(this._lazyManager.manager,"overSource",this,function(){_1.disconnect(_25);if(this._lazyManager.manager.canDropFlag){this._dojoxManager._dropIndicator.node.style.display="none";}});this.cancelHandler=_1.subscribe("/dnd/cancel",this,function(){var _26=this._dojoxManager._dragItem.item;_26.events=[_1.connect(_26.handle,"onmousedown",_26,"onMouseDown")];_1.body().appendChild(this._dojoxManager._cover);_1.body().appendChild(this._dojoxManager._cover2);this._dojoxManager._cover.appendChild(_26.node);var _27=this._dojoxManager._areaList[this._dojoxManager._sourceIndexArea];var _28=this._dojoxManager._sourceDropIndex;var _29=null;if(_28!=_27.items.length&&_28!=-1){_29=_27.items[this._dojoxManager._sourceDropIndex].item.node;}if(this._dojoxManager._dropIndicator.node.style.display=="none"){this._dojoxManager._dropIndicator.node.style.display=="";}this._dojoxManager._dragItem.handlers.push(_1.connect(this._dojoxManager._dragItem.item,"onDrag",this._dojoxManager,"onDrag"));this._dojoxManager._dragItem.handlers.push(_1.connect(this._dojoxManager._dragItem.item,"onDragEnd",this._dojoxManager,"onDrop"));this._draggedNode.style.display="";this._dojoxManager.onDrop(this._draggedNode);_1.unsubscribe(this.cancelHandler);_1.unsubscribe(this.dropHandler);if(_3.mdnd.adapter._dndFromDojo){_3.mdnd.adapter._dndFromDojo.subscribeDnd();}});this.dropHandler=_1.subscribe("/dnd/drop/before",this,function(_2a){_1.unsubscribe(this.cancelHandler);_1.unsubscribe(this.dropHandler);this.onDrop();});}else{this.accept=this.isAccepted(this._dojoxManager._dragItem.item.node,this._currentDojoArea);if(this.accept){_1.disconnect(this._dojoxManager._dragItem.handlers.pop());_1.disconnect(this._dojoxManager._dragItem.handlers.pop());this._dojoxManager._dropIndicator.node.style.display="none";if(!this._moveUpHandler){this._moveUpHandler=_1.connect(_1.doc,"onmouseup",this,"onDrop");}}}_1.publish("/dojox/mdnd/adapter/dndToDojo/over",[this._currentDojoArea.node,this._currentDojoArea.type,this._draggedNode,this.accept]);},onDragExit:function(e){if(this._oldDojoArea.dojo){_1.unsubscribe(this.cancelHandler);_1.unsubscribe(this.dropHandler);var _2b=this._dojoxManager._dragItem.item;this._dojoxManager._dragItem.item.events.push(_1.connect(_2b.node.ownerDocument,"onmousemove",_2b,"onMove"));_1.body().appendChild(this._dojoxManager._cover);_1.body().appendChild(this._dojoxManager._cover2);this._dojoxManager._cover.appendChild(_2b.node);var _2c=_2b.node.style;_2c.position="absolute";_2c.left=(_2b.offsetDrag.l+e.pageX)+"px";_2c.top=(_2b.offsetDrag.t+e.pageX)+"px";_2c.display="";this._lazyManager.cancelDrag();if(_3.mdnd.adapter._dndFromDojo){_3.mdnd.adapter._dndFromDojo.subscribeDnd();}if(this._dojoxManager._dropIndicator.node.style.display=="none"){this._dojoxManager._dropIndicator.node.style.display="";}this._dojoxManager._dragItem.handlers.push(_1.connect(this._dojoxManager._dragItem.item,"onDrag",this._dojoxManager,"onDrag"));this._dojoxManager._dragItem.handlers.push(_1.connect(this._dojoxManager._dragItem.item,"onDragEnd",this._dojoxManager,"onDrop"));this._dojoxManager._dragItem.item.onMove(e);}else{if(this.accept){if(this._moveUpHandler){_1.disconnect(this._moveUpHandler);this._moveUpHandler=null;}if(this._dojoxManager._dropIndicator.node.style.display=="none"){this._dojoxManager._dropIndicator.node.style.display="";}this._dojoxManager._dragItem.handlers.push(_1.connect(this._dojoxManager._dragItem.item,"onDrag",this._dojoxManager,"onDrag"));this._dojoxManager._dragItem.handlers.push(_1.connect(this._dojoxManager._dragItem.item,"onDragEnd",this._dojoxManager,"onDrop"));this._dojoxManager._dragItem.item.onMove(e);}}_1.publish("/dojox/mdnd/adapter/dndToDojo/out",[this._oldDojoArea.node,this._oldDojoArea.type,this._draggedNode,this.accept]);},onDrop:function(e){if(this._currentDojoArea.dojo){if(_3.mdnd.adapter._dndFromDojo){_3.mdnd.adapter._dndFromDojo.subscribeDnd();}}if(this._dojoxManager._dropIndicator.node.style.display=="none"){this._dojoxManager._dropIndicator.node.style.display="";}if(this._dojoxManager._cover.parentNode&&this._dojoxManager._cover.parentNode.nodeType==1){_1.body().removeChild(this._dojoxManager._cover);_1.body().removeChild(this._dojoxManager._cover2);}if(this._draggedNode.parentNode==this._dojoxManager._cover){this._dojoxManager._cover.removeChild(this._draggedNode);}_1.disconnect(this._moveHandler);_1.disconnect(this._moveUpHandler);this._moveHandler=this._moveUpHandler=null;_1.publish("/dojox/mdnd/adapter/dndToDojo/drop",[this._draggedNode,this._currentDojoArea.node,this._currentDojoArea.type]);_1.removeClass(this._draggedNode,"dragNode");var _2d=this._draggedNode.style;_2d.position="relative";_2d.left="0";_2d.top="0";_2d.width="auto";_1.forEach(this._dojoxManager._dragItem.handlers,_1.disconnect);this._dojoxManager._deleteMoveableItem(this._dojoxManager._dragItem);this._draggedNode=null;this._currentDojoArea=null;this._dojoxManager._resetAfterDrop();}});_3.mdnd.adapter._dndToDojo=null;_3.mdnd.adapter.dndToDojo=function(){if(!_3.mdnd.adapter._dndToDojo){_3.mdnd.adapter._dndToDojo=new _3.mdnd.adapter.DndToDojo();}return _3.mdnd.adapter._dndToDojo;};});require(["dojox/mdnd/adapter/DndToDojo"]);