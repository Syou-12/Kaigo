$(function () {
    $('.bg-btn').on('click',function(){
        $('.bg-btn').toggleClass('close');
        $('.btn').toggleClass('slide-in');
        $('body').toggleClass('noscroll');
    });
});