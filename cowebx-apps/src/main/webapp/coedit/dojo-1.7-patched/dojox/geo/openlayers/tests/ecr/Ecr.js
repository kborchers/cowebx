/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/html","dojo/_base/array","dojo/_base/lang","dojox/geo/openlayers/widget/Map","dojox/geo/openlayers/GfxLayer","dojo/data/ItemFileReadStore","dojox/geo/openlayers/tests/ecr/PortRenderer","dojox/geo/openlayers/tests/ecr/LegsRenderer"],function(_1,_2){return _1.declare("dojox.geo.openlayers.tests.ecr.Ecr",null,{constructor:function(){var _3=new dojox.geo.openlayers.widget.Map();_1.place(_3.domNode,"map");_3.startup();_3.map.fitTo([-160,70,160,-70]);this._map=_3;layer=new dojox.geo.openlayers.GfxLayer("legs");this._legLayer=layer;_3.map.addLayer(layer);layer=new dojox.geo.openlayers.GfxLayer("ports");this._portLayer=layer;_3.map.addLayer(layer);this.loadData("data/ecr.json");},fitTo:function(_4){this._map.map.fitTo(_4);},clearLayer:function(_5){var fa=_5.getFeatures();_5.removeFeature(fa);},clearEcr:function(_6){var _7=this._portLayer;this.clearLayer(_7);_7=this._legLayer;this.clearLayer(_7);this.fillPortChooser(null);},setDataSet:function(_8){var o=_1.byId(_8);var ds=o.value;var _9=this._portLayer;this.clearLayer(_9);_9=this._legLayer;this.clearLayer(_9);this.loadData(ds);},log:function(o){},loadError:function(){this.log(arguments[0]);},_portStyle:[{type:"circle",depth:"{radius}",radius:function(_a){var _b=_a.store.getValue(this,"offer");var _c=Math.max(1,Math.log(_b));return 3*_c;},stroke:{color:"#4c9a06",width:1}},{type:"circle",depth:"{radius}",radius:function(_d){var _e=_d.store.getValue(this,"demand");return 3*Math.max(1,Math.log(_e));},stroke:{color:"#bb0000",width:1}}],gotPorts:function(_f,_10){this.log("got ports "+_f.length);var _11=_10.store;var ctx={store:_11};var _12=new dojox.geo.openlayers.tests.ecr.PortRenderer(this._portStyle,ctx);var _13=this._portLayer;_1.forEach(_f,function(_14,_15,_16){var f=_12.render(_14);if(f!=null){_13.addFeature(f);}});this.fillPortChooser(_f);_13.redraw();},_legsStyle:{type:"polyline",stroke:{color:[255,165,0]}},gotLegs:function(_17,_18){this.log("got legs "+_17.length);var ctx={store:_18.store};var _19=new dojox.geo.openlayers.tests.ecr.LegsRenderer(this._legsStyle,ctx);_19.setGeodetic(true);var _1a=this._legLayer;_1.forEach(_17,function(_1b,_1c,_1d){var f=_19.render(_1b);if(f!=null){_1a.addFeature(f);}});_1a.redraw();},loadData:function(_1e){this.log("load "+_1e);var _1f=new _1.data.ItemFileReadStore({url:_1e,urlPreventCache:true});_1f.fetch({query:{type:"legs"},onComplete:_1.hitch(this,this.gotLegs),onError:_1.hitch(this,this.loadError),queryOptions:{deep:true}});_1f.fetch({query:{type:"port"},onComplete:_1.hitch(this,this.gotPorts),onError:_1.hitch(this,this.loadError)});},regionChange:function(_20){this.fitTo(_20.currentTarget.value);},portChange:function(_21){var o=_1.byId(_21);this.fitTo(o.value);},fillPortChooser:function(_22){var ps=_1.byId("portChooser");var _23=ps.options;var ws="{\"position\" : [0, 0], \"extent\" : 70}";if(_22==null){_23.length=1;_23[0]=new Option("World",ws);}else{_23.length=_22.length+1;_23[0]=new Option("World",ws);var s="{\"position\" : [%lo, %la], \"extent\" : 0.2}";for(var i=0;i<_22.length;i++){var _24=_22[i];var lon=parseFloat(_24.longitude);var lat=parseFloat(_24.latitude);var os=s.replace("%lo",lon).replace("%la",lat);_23[i+1]=new Option(_24.name,os);}}},toggleLayerVisibility:function(_25){var cb=_1.byId(_25);var a=this._map.map.getLayer("name",_25);_1.forEach(a,function(_26,_27,_28){_26.olLayer.setVisibility(cb.checked);});}});});