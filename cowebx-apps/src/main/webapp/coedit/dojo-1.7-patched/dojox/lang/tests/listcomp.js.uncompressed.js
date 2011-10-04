/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dojox/lang/functional/listcomp","dojox/lang/functional/sequence"], function(dojo, dijit, dojox){
dojo.getObject("dojox.lang.tests.listcomp", 1);
?/* builder delete begin
dojo.provide("dojox.lang.tests.listcomp");


 builder delete end */
/* builder delete begin
dojo.require("dojox.lang.functional.listcomp");

 builder delete end */
/* builder delete begin
dojo.require("dojox.lang.functional.sequence");


 builder delete end */
(function(){
	var df = dojox.lang.functional;
	tests.register("dojox.lang.tests.listcomp", [
		function testIterator1(t){ t.assertEqual(df.repeat(3, function(n){ return n + 1; }, 0), [0, 1, 2]); },
		function testIterator2(t){ t.assertEqual(df.repeat(3, function(n){ return n * 3; }, 1), [1, 3, 9]); },
		function testIterator3(t){ t.assertEqual(df.until(function(n){ return n > 10; }, function(n){ return n * 3; }, 1), [1, 3, 9]); },
		
		function testListcomp1(t){ t.assertEqual(df.listcomp("i for(var i=0; i<3; ++i)"), [0, 1, 2]); },
		function testListcomp2(t){ t.assertEqual(df.listcomp("i*j for(var i=0; i<3; ++i) for(var j=0; j<3; ++j)"), [0, 0, 0, 0, 1, 2, 0, 2, 4]); },
		function testListcomp3(t){ t.assertEqual(df.listcomp("i*j for(var i=0; i<3; ++i) if(i%2==1) for(var j=0; j<3; ++j)"), [0, 1, 2]); },
		function testListcomp4(t){ t.assertEqual(df.listcomp("i+j for(var i=0; i<3; ++i) for(var j=0; j<3; ++j)"), [0, 1, 2, 1, 2, 3, 2, 3, 4]); },
		function testListcomp5(t){ t.assertEqual(df.listcomp("i+j for(var i=0; i<3; ++i) if(i%2==1) for(var j=0; j<3; ++j)"), [1, 2, 3]); },
		function testListcomp6(t){ t.assertEqual(df.listcomp("i for(i=0; i<3; ++i)"), [0, 1, 2]); },
		function testListcomp7(t){ t.assertEqual(df.listcomp("i*j for(i=0; i<3; ++i) for(j=0; j<3; ++j)"), [0, 0, 0, 0, 1, 2, 0, 2, 4]); },
		function testListcomp8(t){ t.assertEqual(df.listcomp("i*j for(i=0; i<3; ++i) if(i%2==1) for(j=0; j<3; ++j)"), [0, 1, 2]); },
		function testListcomp9(t){ t.assertEqual(df.listcomp("i+j for(i=0; i<3; ++i) for(j=0; j<3; ++j)"), [0, 1, 2, 1, 2, 3, 2, 3, 4]); },
		function testListcomp10(t){ t.assertEqual(df.listcomp("i+j for(i=0; i<3; ++i) if(i%2==1) for(j=0; j<3; ++j)"), [1, 2, 3]); }
	]);
})();

});
require(["dojox/lang/tests/listcomp"]);
