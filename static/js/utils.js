// Some utils reply on jQuery, for best results make sure jQuery is loaded as a depedency before these methods are called

function log(msg) {
	console.log(msg);
}

function logArgs(args) {
	args.forEach(function(ce) {
		log(ce);
	});
}

function removeElement(element) {
	jQuery(element).remove();
}

function clearHtml(element) {
	jQuery(element).empty();
}
