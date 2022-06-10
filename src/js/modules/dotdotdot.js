import Dotdotdot from 'dotdotdot-js';

export default function () {

    const dot = document.querySelectorAll(".blog-mini-slider__slide-text");
    for (let i = 0; i < dot.length; i++) {
        document.addEventListener("DOMContentLoaded", () => {
            let wrapper = dot[i];
            let options = {
                height: 52
            };
            new Dotdotdot(wrapper, options);
        });
    }

}