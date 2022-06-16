import $ from "jquery";

export default function () {

    // Открытие меню

    let clientWindowWidth = window.innerWidth;

    if (clientWindowWidth < 1440) {
        console.log('clientWindowWidth: ', clientWindowWidth);
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
            $('.menu__btn').toggleClass('menuBtn-border-in-menu');
            $('.changing-fill').toggleClass('changing-fill--black');
            $('.logo').toggleClass('logo-border-in-menu');
        });
    }

    window.addEventListener('resize', () => {

        console.log(window.innerWidth);

    });

    // if (clientWindowWidth < 1440 || newClientWindowWidth < 1440) {
    //     console.log('sdjrdecfghjiuhyg');
    //     $('.menu__btn').on('click', function () {
    //         $('.menu__list').toggleClass('menu__list--active');
    //         $('.menu__btn').toggleClass('menu__btn--close');
    //         $('.changing-fill').toggleClass('changing-fill--black');
    //         $('.menu__btn').toggleClass('menuBtn-border-in-menu');
    //         $('body').toggleClass('overflow-hidden');
    //         $('.logo').toggleClass('logo-border-in-menu');
    //     });

    //     $('.menu__link, .submenu__link').on('click', function () {
    //         $('.menu__list').toggleClass('menu__list--active');
    //         $('.menu__btn').toggleClass('menu__btn--close');
    //         $('body').removeClass('overflow-hidden');
    //         $('.menu__btn').toggleClass('menuBtn-border-in-menu');
    //         $('.changing-fill').toggleClass('changing-fill--black');
    //         $('.logo').toggleClass('logo-border-in-menu');
    //     });
    // }

    // window.addEventListener('resize', () => {
    //     console.log(window.innerWidth);


    // });

    const windowWidth = window.innerWidth;


    const bodyElement = document.querySelector('body');
    if (bodyElement.id === 'index') {
        let header = $('.header');

        $(window).scroll(function () {
            let scrolled = $(window).scrollTop();

            if (scrolled > 100) {
                header.removeClass('header--transparent');
                header.addClass('header--solid');
                header.addClass('header--height-74');
            } else {
                header.removeClass('header--solid');
                header.removeClass('header--height-74');
                header.addClass('header--transparent');
            }
        });

    } else {
        document.querySelector('header').classList.add('header--solid');
        let header = $('.header');

        $(window).scroll(function () {
            let scrolled = $(window).scrollTop();

            if (scrolled > 100) {
                header.addClass('header--height-74');
            } else {
                header.removeClass('header--height-74');
            }
        });
    }

    // Исчезновение header при скролле



    // //Плавный переход по якорям

    // $('.menu__item, .menu__link').on('click', function (event) {
    //     event.preventDefault();

    //     //забираем идентификатор бока с атрибута href
    //     let id = $(this).attr('href'),

    //         //узнаем высоту от начала страницы до блока на который ссылается якорь
    //         top = $(id).offset().top;

    //     //анимируем переход на расстояние - top за 1500 мс
    //     $('body,html').animate({ scrollTop: top }, 1500);
    // });


}