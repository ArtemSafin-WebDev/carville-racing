import { Swiper } from 'swiper';


export default function newsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-news-slider'));

    if (!window.matchMedia("(max-width: 640px)").matches) return;

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            watchOverflow: true
        })
    })
}