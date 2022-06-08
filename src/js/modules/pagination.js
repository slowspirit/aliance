import $ from "jquery";

export default function () {
    $('.pagination__link--number').on('click', function () {
        $('.pagination__link--number').removeClass('pagination__link--active');
        $($(this)).addClass('pagination__link--active');
    });

    $('.pagination__next').on('click', function () {
        let linkNumber = $('.pagination__link--number.pagination__link--active');
        let parentItem = linkNumber.parent();
        let nextItem = parentItem.next();
        let nextItemChild = nextItem.children('.pagination__link--number');

        if (nextItem.hasClass('pagination__item')) {
            linkNumber.removeClass('pagination__link--active');
            nextItemChild.addClass('pagination__link--active');
        }
        // else {
        //     console.log('there is no more any next items in list');
        // }

    });

    $('.pagination__prev').on('click', function () {
        let linkNumber = $('.pagination__link--number.pagination__link--active');
        let parentItem = linkNumber.parent();
        let prevItem = parentItem.prev();
        let prevItemChild = prevItem.children('.pagination__link--number');

        if (prevItem.hasClass('pagination__item')) {
            linkNumber.removeClass('pagination__link--active');
            prevItemChild.addClass('pagination__link--active');
        }
        // else {
        //     console.log('there is no more any previous items in list');
        // }

    });
}