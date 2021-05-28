import { Swiper } from 'swiper';

export default function promoSlider() {
    const elements = Array.from(document.querySelectorAll('.js-promo-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        const bullets = Array.from(element.querySelectorAll('.promo-slider__pagination-bullet'));
        const setActiveBullet = index => {
            bullets.forEach(bullet => bullet.classList.remove('active'));
            bullets[index].classList.add('active');
        };
        const instance = new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            loop: true,
            on: {
                init: swiper => {
                    setActiveBullet(swiper.realIndex);
                },
                slideChange: swiper => {
                    setActiveBullet(swiper.realIndex);
                }
            }
        });

        instance.init();

        bullets.forEach((bullet, bulletIndex) => {
            bullet.addEventListener('click', event => {
                event.preventDefault();
                instance.slideToLoop(bulletIndex);
            });
        });
    });
}
