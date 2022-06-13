import $ from "jquery";

export default function () {

    // Открытие меню

    const windowWidth = window.innerWidth;
    console.log('windowWidth: ', windowWidth);


    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn').toggleClass('menu__btn--close');
        $('.changing-fill').toggleClass('changing-fill--black');
        $('.menu__btn').toggleClass('menuBtn-border-in-menu');
        $('body').toggleClass('overflow-hidden');
        $('.logo').toggleClass('logo-border-in-menu');
    });

    $('.menu__link, .submenu__link').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn').toggleClass('menu__btn--close');
        $('body').removeClass('overflow-hidden');
        if (windowWidth < 1745) {
            $('.menu__btn').toggleClass('menuBtn-border-in-menu');
            $('.changing-fill').toggleClass('changing-fill--black');
            $('.logo').toggleClass('logo-border-in-menu');
        }
    });



    // Исчезновение header при скролле

    let header = $('.header');

    $(window).scroll(function () {
        let scrolled = $(window).scrollTop();

        if (scrolled > 100) {
            header.removeClass('header--transparent');
            header.addClass('header--solid');
        } else {
            header.removeClass('header--solid');
            header.addClass('header--transparent');
        }
    });


    //Плавный переход по якорям

    $('.menu__item, .menu__link').on('click', function (event) {
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        let id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });


}