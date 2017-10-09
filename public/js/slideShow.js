$( document ).ready(function(n) {
	
	$('.header_img').hide();
	$('#pic1').show();
	//$('.header_img img:gt(0)').hide();


	//$('.header_img'[1]).show();
	
	setInterval(function () {  
		var current = $('.header_img:visible');
		var next = current.next().length ? current.next() : $('.header_img:eq(0)');
		current.show();
		current.fadeOut();
		next.fadeIn();
	},3000);
	
	});
	


