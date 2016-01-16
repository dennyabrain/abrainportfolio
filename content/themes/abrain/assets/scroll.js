$(document).ready(function(){
	$(window).on('mousewheel',function(event){
		console.log(event.deltaX, event.deltaFactor*event.deltaX);
	});
});