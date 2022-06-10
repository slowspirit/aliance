import $ from "jquery";
import slick from "slick-carousel";

export default function () {
    $('.exclusivity-slider').slick({
        slidesToShow: 5,
        arrows: false
        // slidesToScroll: 3
    });
}