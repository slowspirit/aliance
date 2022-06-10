import $ from "jquery";
import slick from "slick-carousel";

export default function () {
    $('.scheme-slider').slick({
        slidesToShow: 4,
        arrows: false,
        variableWidth: true
        // slidesToScroll: 3
    });
}