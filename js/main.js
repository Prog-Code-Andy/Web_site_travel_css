$(document).ready(function(){
    $(".mobile-menu").click(function(){
        $(".mobile-menu").toggleClass("active"); /* toggleClass > bool */
    })
    $(".carusel-slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false, 
        autoplay: true,
        autoplaySpeed: 2000
    });

    $(".testimonial__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 
        autoplay: true,
        autoplaySpeed: 2000
    });
});
