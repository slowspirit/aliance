import $ from "jquery";

export default function () {
    $('.accordion__item').on('click', function () {
        $(this).children('.accordion__item-text').slideToggle();
        $(this).children('.accordion__item-title').toggleClass('accordion__item-title--active');
    });
}