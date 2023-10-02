(function($){
	$(document).ready(function(){

		$('.burger').append("<span class='burger__element'></span>");

		let btn = $('.burger');

		btn.click(function(){
			btn.toggleClass('active');
			$('.header-menu').toggleClass('active');
			$('body').toggleClass('lock');
		});

	});
})(jQuery);