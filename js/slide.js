$(function(){
	function sliderSetting(){
	    var width = $(window).width();
	    if(width <= 800){
	        $('.intro').not('.slick-initialized').slick({
	            autoplay: true,
	            centerMode: false,
	            arrows:true,
	            infinite: true,
	            dots:true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            centerPadding: '0px',
	        });
	    } else {
	        $('.intro.slick-initialized').slick('unslick');
	    }
	}
	sliderSetting();
	$(window).resize(function(){
	    sliderSetting();
	});
});
  