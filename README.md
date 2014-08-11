fready
======

Pass an array of functions to `$(document).ready()`

###Sample Usage: 

var arr = [];
function dude (argument) {
	console.log("foofl");
}
function dude1 (argument) {
	console.log("foofll");
}
function dude2 (argument) {
	console.log("foolllf");
}
arr.push(dude);
arr.push(dude1);
arr.push(dude2);
$(document).fready(arr)
