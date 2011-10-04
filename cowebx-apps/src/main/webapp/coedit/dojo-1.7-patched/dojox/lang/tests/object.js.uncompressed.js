/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dojox/lang/functional/object"], function(dojo, dijit, dojox){
dojo.getObject("dojox.lang.tests.object", 1);
/* builder delete begin
dojo.provide("dojox.lang.tests.object");


 builder delete end */
/* builder delete begin
dojo.require("dojox.lang.functional.object");


 builder delete end */
(function(){
	var df = dojox.lang.functional, x = {a: 1, b: 2, c: 3},
		print = function(v, i){ this.push("[" + i + "] = " + v); },
		show = function(o){ return df.forIn(o, print, []).sort().join(", "); };
	
	tests.register("dojox.lang.tests.object", [
		function testKeys(t){ t.assertEqual(df.keys(x).sort(), ["a", "b", "c"]); },
		function testValues(t){ t.assertEqual(df.values(x).sort(), [1, 2, 3]); },
		
		function testForIn(t){ t.assertEqual(show(x), "[a] = 1, [b] = 2, [c] = 3"); },
		function testFilterIn(t){ t.assertEqual(show(df.filterIn(x, "%2")), "[a] = 1, [c] = 3"); },
		function testMapIn(t){ t.assertEqual(show(df.mapIn(x, "+3")), "[a] = 4, [b] = 5, [c] = 6"); }
	]);
})();

});
require(["dojox/lang/tests/object"]);
