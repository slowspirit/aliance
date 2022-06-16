import $ from "jquery";
import slick from "slick-carousel";

export default function () {
    $('.scheme-slider').slick({
        slidesToShow: 4,
        // arrows: false,
        responsive: [
            {
                breakpoint: 1439,
                settings: {
                    variableWidth: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev"><img src="./images/icons/arrow-white-left.svg" alt="arrow prev"></button>',
                    nextArrow: '<button type="button" class="slick-next"><img src="./images/icons/arrow-white-right.svg" alt="arrow next"></button>',
                }
            },
        ]
    });
}