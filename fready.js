$.fn.fready = function() {
	var args = Array.prototype.slice.call(arguments);
	var $el = this;
	$.each(args,function(_,func){
		$el.ready(func);
	});
	return this;
}
