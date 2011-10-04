/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["../Theme", "./common"], function(Theme){
	
	//	notes: colors generated by moving in 30 degree increments around the hue circle,
	//		at 90% saturation, using a B value of 75 (HSB model).
	dojox.charting.themes.IndigoNation=new Theme({
		colors: [
			"#93a4d0",
			"#3b4152",
			"#687291",
			"#9faed9",
			"#8290b8"
		]
	});
	
	return dojox.charting.themes.IndigoNation;
});
