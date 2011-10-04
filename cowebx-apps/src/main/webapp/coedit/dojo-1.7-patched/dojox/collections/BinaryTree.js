/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/array","./_base"],function(_1,_2){_2.BinaryTree=function(_3){function _4(_5,_6,_7){this.value=_5||null;this.right=_6||null;this.left=_7||null;this.clone=function(){var c=new _4();if(this.value.value){c.value=this.value.clone();}else{c.value=this.value;}if(this.left!=null){c.left=this.left.clone();}if(this.right!=null){c.right=this.right.clone();}return c;};this.compare=function(n){if(this.value>n.value){return 1;}if(this.value<n.value){return -1;}return 0;};this.compareData=function(d){if(this.value>d){return 1;}if(this.value<d){return -1;}return 0;};};function _8(_9,a){if(_9){_8(_9.left,a);a.push(_9.value);_8(_9.right,a);}};function _a(_b,_c){var s="";if(_b){s=_b.value.toString()+_c;s+=_a(_b.left,_c);s+=_a(_b.right,_c);}return s;};function _d(_e,_f){var s="";if(_e){s=_d(_e.left,_f);s+=_e.value.toString()+_f;s+=_d(_e.right,_f);}return s;};function _10(_11,sep){var s="";if(_11){s=_10(_11.left,sep);s+=_10(_11.right,sep);s+=_11.value.toString()+sep;}return s;};function _12(_13,_14){if(!_13){return null;}var i=_13.compareData(_14);if(i==0){return _13;}if(i>0){return _12(_13.left,_14);}else{return _12(_13.right,_14);}};this.add=function(_15){var n=new _4(_15);var i;var _16=_17;var _18=null;while(_16){i=_16.compare(n);if(i==0){return;}_18=_16;if(i>0){_16=_16.left;}else{_16=_16.right;}}this.count++;if(!_18){_17=n;}else{i=_18.compare(n);if(i>0){_18.left=n;}else{_18.right=n;}}};this.clear=function(){_17=null;this.count=0;};this.clone=function(){var c=new _2.BinaryTree();var itr=this.getIterator();while(!itr.atEnd()){c.add(itr.get());}return c;};this.contains=function(_19){return this.search(_19)!=null;};this.deleteData=function(_1a){var _1b=_17;var _1c=null;var i=_1b.compareData(_1a);while(i!=0&&_1b!=null){if(i>0){_1c=_1b;_1b=_1b.left;}else{if(i<0){_1c=_1b;_1b=_1b.right;}}i=_1b.compareData(_1a);}if(!_1b){return;}this.count--;if(!_1b.right){if(!_1c){_17=_1b.left;}else{i=_1c.compare(_1b);if(i>0){_1c.left=_1b.left;}else{if(i<0){_1c.right=_1b.left;}}}}else{if(!_1b.right.left){if(!_1c){_17=_1b.right;}else{i=_1c.compare(_1b);if(i>0){_1c.left=_1b.right;}else{if(i<0){_1c.right=_1b.right;}}}}else{var _1d=_1b.right.left;var _1e=_1b.right;while(_1d.left!=null){_1e=_1d;_1d=_1d.left;}_1e.left=_1d.right;_1d.left=_1b.left;_1d.right=_1b.right;if(!_1c){_17=_1d;}else{i=_1c.compare(_1b);if(i>0){_1c.left=_1d;}else{if(i<0){_1c.right=_1d;}}}}}};this.getIterator=function(){var a=[];_8(_17,a);return new _2.Iterator(a);};this.search=function(_1f){return _12(_17,_1f);};this.toString=function(_20,sep){if(!_20){_20=_2.BinaryTree.TraversalMethods.Inorder;}if(!sep){sep=",";}var s="";switch(_20){case _2.BinaryTree.TraversalMethods.Preorder:s=_a(_17,sep);break;case _2.BinaryTree.TraversalMethods.Inorder:s=_d(_17,sep);break;case _2.BinaryTree.TraversalMethods.Postorder:s=_10(_17,sep);break;}if(s.length==0){return "";}else{return s.substring(0,s.length-sep.length);}};this.count=0;var _17=this.root=null;if(_3){this.add(_3);}};_2.BinaryTree.TraversalMethods={Preorder:1,Inorder:2,Postorder:3};return _2.BinaryTree;});