import $ from "jquery";
import slick from "slick-carousel";

export default function () {
    $('.exclusivity-slider').slick({
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    variableWidth: true

                    // infinite: true,
                    // dots: true
                }
            }
        ]
    });
    $('.exclusivity-slider').slick('setPosition');
}