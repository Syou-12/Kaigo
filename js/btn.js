$(function () {
    $('.bg-btn').on('click',function(){
        $('.bg-btn').toggleClass('close');
        $('.btn').toggleClass('slide-in');
        $('body').toggleClass('noscroll');
    });

$('.nav-list a').on('click',function() {
    $('.btn').toggleClass('slide-in');
    $('.bg-btn').toggleClass('close');
    if($('.bg-btn').hasClass('active')) {
        $('.nav-list a').addClass('active');
    } else {
        $('.nav-list a').removeClass('active');
    }
})

});