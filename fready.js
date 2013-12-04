$.fn.fready = function() {
	var args = Array.prototype.slice.call(arguments);
	var $el = this;
	$.each(args,function(_,func){
		$el.ready(func);
	});
	return this;
}
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