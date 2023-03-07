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
    
});