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

    $('.logo__slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed:5000,
        arrows: false,
        swipe: false,
        slidesToShow: 6,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
              }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                }
            }
        ]
    });

});
$('#btn-back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});