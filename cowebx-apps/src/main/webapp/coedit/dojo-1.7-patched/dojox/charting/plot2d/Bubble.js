/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/lang","dojo/_base/declare","./Base","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(_1,_2,_3,dc,df,_4,du,fx){var _5=df.lambda("item.purgeGroup()");return _1.declare("dojox.charting.plot2d.Bubble",dojox.charting.plot2d.Base,{defaultParams:{hAxis:"x",vAxis:"y",animate:null},optionalParams:{stroke:{},outline:{},shadow:{},fill:{},font:"",fontColor:""},constructor:function(_6,_7){this.opt=_1.clone(this.defaultParams);du.updateWithObject(this.opt,_7);du.updateWithPattern(this.opt,_7,this.optionalParams);this.series=[];this.hAxis=this.opt.hAxis;this.vAxis=this.opt.vAxis;this.animate=this.opt.animate;},render:function(_8,_9){if(this.zoom&&!this.isDataDirty()){return this.performZoom(_8,_9);}this.resetEvents();this.dirty=this.isDirty();if(this.dirty){_1.forEach(this.series,_5);this._eventSeries={};this.cleanGroup();var s=this.group;df.forEachRev(this.series,function(_a){_a.cleanGroup(s);});}var t=this.chart.theme,ht=this._hScaler.scaler.getTransformerFromModel(this._hScaler),vt=this._vScaler.scaler.getTransformerFromModel(this._vScaler),_b=this.events();for(var i=this.series.length-1;i>=0;--i){var _c=this.series[i];if(!this.dirty&&!_c.dirty){t.skip();this._reconnectEvents(_c.name);continue;}_c.cleanGroup();if(!_c.data.length){_c.dirty=false;t.skip();continue;}if(typeof _c.data[0]=="number"){console.warn("dojox.charting.plot2d.Bubble: the data in the following series cannot be rendered as a bubble chart; ",_c);continue;}var _d=t.next("circle",[this.opt,_c]),s=_c.group,_e=_1.map(_c.data,function(v,i){return v?{x:ht(v.x)+_9.l,y:_8.height-_9.b-vt(v.y),radius:this._vScaler.bounds.scale*(v.size/2)}:null;},this);var _f=null,_10=null,_11=null;if(_d.series.shadow){_11=_1.map(_e,function(_12){if(_12!==null){var _13=t.addMixin(_d,"circle",_12,true),_14=_13.series.shadow;var _15=s.createCircle({cx:_12.x+_14.dx,cy:_12.y+_14.dy,r:_12.radius}).setStroke(_14).setFill(_14.color);if(this.animate){this._animateBubble(_15,_8.height-_9.b,_12.radius);}return _15;}return null;},this);if(_11.length){_c.dyn.shadow=_11[_11.length-1].getStroke();}}if(_d.series.outline){_10=_1.map(_e,function(_16){if(_16!==null){var _17=t.addMixin(_d,"circle",_16,true),_18=dc.makeStroke(_17.series.outline);_18.width=2*_18.width+_d.series.stroke.width;var _19=s.createCircle({cx:_16.x,cy:_16.y,r:_16.radius}).setStroke(_18);if(this.animate){this._animateBubble(_19,_8.height-_9.b,_16.radius);}return _19;}return null;},this);if(_10.length){_c.dyn.outline=_10[_10.length-1].getStroke();}}_f=_1.map(_e,function(_1a){if(_1a!==null){var _1b=t.addMixin(_d,"circle",_1a,true),_1c={x:_1a.x-_1a.radius,y:_1a.y-_1a.radius,width:2*_1a.radius,height:2*_1a.radius};var _1d=this._plotFill(_1b.series.fill,_8,_9);_1d=this._shapeFill(_1d,_1c);var _1e=s.createCircle({cx:_1a.x,cy:_1a.y,r:_1a.radius}).setFill(_1d).setStroke(_1b.series.stroke);if(this.animate){this._animateBubble(_1e,_8.height-_9.b,_1a.radius);}return _1e;}return null;},this);if(_f.length){_c.dyn.fill=_f[_f.length-1].getFill();_c.dyn.stroke=_f[_f.length-1].getStroke();}if(_b){var _1f=new Array(_f.length);_1.forEach(_f,function(s,i){if(s!==null){var o={element:"circle",index:i,run:_c,shape:s,outline:_10&&_10[i]||null,shadow:_11&&_11[i]||null,x:_c.data[i].x,y:_c.data[i].y,r:_c.data[i].size/2,cx:_e[i].x,cy:_e[i].y,cr:_e[i].radius};this._connectEvents(o);_1f[i]=o;}},this);this._eventSeries[_c.name]=_1f;}else{delete this._eventSeries[_c.name];}_c.dirty=false;}this.dirty=false;return this;},_animateBubble:function(_20,_21,_22){fx.animateTransform(_1.delegate({shape:_20,duration:1200,transform:[{name:"translate",start:[0,_21],end:[0,0]},{name:"scale",start:[0,1/_22],end:[1,1]},{name:"original"}]},this.animate)).play();}});});