/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dojox/math/BigInteger"], function(dojo, dijit, dojox){
dojo.getObject("dojox.math.tests.BigInteger", 1);
/* builder delete begin
dojo.provide("dojox.math.tests.BigInteger");


 builder delete end */
/* builder delete begin
dojo.require("dojox.math.BigInteger");


 builder delete end */
tests.register("dojox.math.tests.BigInteger",
	[
		function sanity_check(t){
			var x = new dojox.math.BigInteger("abcd1234", 16),
				y = new dojox.math.BigInteger("beef", 16),
				z = x.mod(y);
			t.is("b60c", z.toString(16));
		}
	]
);
});
require(["dojox/math/tests/BigInteger"]);
