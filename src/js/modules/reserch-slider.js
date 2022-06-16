import $ from "jquery";
import slick from "slick-carousel";

export default function () {
    $('.reserch__slider').slick({
        slidesToShow: 2,
        variableWidth: true,
        // centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/icons/arrow-white-left.svg" alt="arrow prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/icons/arrow-white-right.svg" alt="arrow next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.reserch__slider').slick('setPosition');
}