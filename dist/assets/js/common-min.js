$(document).ready(function () {
    "use strict";
    if ($('.m-blockfqa').length) {
        $('.m-blockfqa dl').each(function(index){
            $(this).find('dt').click(function(){
                $(this).toggleClass('active');
                $('.m-blockfqa dl dd').eq(index).slideToggle();
            })
        })
      }
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true
      });

      if ($('.m-blockdetail__tab ').length) {

        $(".tab-ttl li").each(function(index){
            $(this).click(function(){
                $(".tab-ttl li").removeClass('active');
                $(this).toggleClass('active');
                $(".tab-cont .tab-frame").removeClass('active');
                $(".tab-cont .tab-frame").eq(index).toggleClass('active');
            })
        })

      }
    
});