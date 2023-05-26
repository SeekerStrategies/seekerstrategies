$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var banner = $('.banner').height();
    if (scroll > banner) {
        $("header").addClass("sticky_header");
        $('#btn-back-to-top').fadeIn();
    } else {
        $("header").removeClass("sticky_header");
        $('#btn-back-to-top').fadeOut();
    }
});
jQuery(document).ready(function() {
    $(".navbar-toggler").click(function(){
        $("body").addClass("overflow");
    });
    $(".menu_close, .nav-link").click(function(){
        $("body").removeClass("overflow");
    });
    $(".menu_close, .nav-link").click(function(){
        $("#collapsibleNavbar").removeClass("show");
        $("#collapsibleNavbar").slideUp();
    });
});
$('#btn-back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});