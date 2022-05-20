$(document).ready(function () {
    $(".mobile-menu").click(function () {
        $(".mobile-menu").toggleClass("active"); /* toggleClass > bool */
        $(".nav__menu").toggleClass("active");
        $("body").toggleClass("overlay");

    })
    $(".carusel-slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 981,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, 

        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },

        {
            breakpoint: 451,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },

    ]
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

//SCRIPT Высота headerTop 52 - делаем скрол для хеда - header бегает проскролкой страницы
const headerTop = document.querySelector(".header__top");
window.addEventListener("scroll", function () {
    window.scrollY > 52 ?
        headerTop.classList.add("top-fixed") :
        headerTop.classList.remove("top-fixed");
})