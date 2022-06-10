import $ from 'jquery';
import slick from 'slick-carousel';

export default function () {
    $('.blog-mini-slider').slick({
        slidesToShow: 2,
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/icons/arrow-white-left.svg" alt="arrow prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/icons/arrow-white-right.svg" alt="arrow next"></button>',
    });
    $('.blog-mini-slider').slick('setPosition');
}