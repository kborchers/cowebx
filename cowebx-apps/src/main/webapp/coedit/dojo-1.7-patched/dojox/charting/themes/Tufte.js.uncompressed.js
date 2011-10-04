/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["../Theme", "dojo/_base/Color", "./common"], function(Theme){

/*
	A charting theme based on the principles championed by
	Edward Tufte.  By Alex Russell, Dojo Project Lead.
*/
dojox.charting.themes.Tufte = new dojox.charting.Theme({
	chart: {
		stroke: null,
		fill: "inherit"
	},
	plotarea: {
		// stroke: { width: 0.2, color: "#666666" },
		stroke: null,
		fill: "transparent"
	},
	axis: {
		stroke: {width: 1, color: "#ccc"},
		majorTick:{
			color:	"black",
			width:	1,
			length: 5
		},
		minorTick: {
			color:	"#666",
			width:	1,
			length:	2
		},
		font: "normal normal normal 8pt Tahoma",
		fontColor: "#999"
	},
	series: {
		outline:   null,
		stroke:	   {width: 1, color: "black"},
		// fill:   "#3b444b",
		fill:      new dojo.Color([0x3b, 0x44, 0x4b, 0.85]),
		font: "normal normal normal 7pt Tahoma",
		fontColor: "#717171"
	},
	marker: {
		stroke:    {width: 1, color: "black"},
		fill:      "#333",
		font: "normal normal normal 7pt Tahoma",
		fontColor: "black"
	},
	colors:[
		dojo.colorFromHex("#8a8c8f"),
		dojo.colorFromHex("#4b4b4b"),
		dojo.colorFromHex("#3b444b"),
		dojo.colorFromHex("#2e2d30"),
		dojo.colorFromHex("#000000")
	]	
});
return dojox.charting.themes.Tufte;
});
