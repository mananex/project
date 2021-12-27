$(document).ready(function(){
    $('.suggestions__slicker').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/suggestions/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/suggestions/next.svg"></button>'
    });
    $('.suggestions__discounts__slicker').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/suggestions/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/suggestions/next.svg"></button>'
    });
    $('.welcome-aside__discounts__slicker').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        variableHeight: true,
        prevArrow: false,
        nextArrow: false
    });
});
