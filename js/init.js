(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax("50%", 0.1);
  }); // end of document ready
  function menuToggle()
	{
		var windowWidth = $(window).width();
		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>250 ){
					$('.main-nav').addClass('navbar-fixed animated slideInDown');
				} else {
					$('.main-nav').removeClass('navbar-fixed animated slideInDown');
				}
			});
		}else{
			$('.main-nav').addClass('navbar-fixed animated slideInDown');	
		}
	}
  // Add smooth scroll to oneage,
$(document).ready(function() {
	menuToggle();
	$('.scroll').click( function() { 
		var t = $(this).attr('href'); 
		$('html, body').animate({ 
			scrollTop: $(t).offset().top }, 2000); 
		return false;
		});
	})
})(jQuery); 