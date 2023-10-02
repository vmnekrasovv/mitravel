(function($){
	$(document).ready(function(){ 

	/*	$('.scroll-down').on('click', function(){
			$('html, body').animate({
				scrollTop: $('.navbar').offset().top
			}, 500, function(){ 
				//console.log('callback function'); 
			});
		});*/

		$(window).on('scroll load', function(e){
			if(pageYOffset > $('.header').outerHeight(true)){
				$('.top-line').addClass('fixed');
				$('body').addClass('top-line-fixed');
			} else {
				$('.top-line').removeClass('fixed');
				$('body').removeClass('top-line-fixed');
			}
		});


		$('.header').parallax({
			imageSrc: 'images/dest/header_bg.jpg',
			speed: .7,
		});
		
	});
})(jQuery);