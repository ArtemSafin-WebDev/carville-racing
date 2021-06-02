import { Swiper, Thumbs, Navigation } from 'swiper';

Swiper.use([Thumbs, Navigation]);

export default function productGallery() {
    if (window.matchMedia('(max-width: 640px)').matches) {
        const elements = Array.from(document.querySelectorAll('.js-product-gallery'));
        const links = Array.from(document.querySelectorAll('.product__gallery-image-link'));

        document.addEventListener('click', event => {
            if (event.target.matches('.product__gallery-image-link') || event.target.closest('.product__gallery-image-link')) {
                event.preventDefault();
            }
        })

        links.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
            })
        })

        console.log('Product gallery', elements);
        elements.forEach(element => {
            const mainContainer = element.querySelector('.product__gallery-main-slider .swiper-container');
            const thumbsContainer = element.querySelector('.product__gallery-thumbs-slider .swiper-container');
            const mainSliderOptions = {
                watchOverflow: true,
                spaceBetween: 8,
                thumbs: {},
                speed: 700,
               
            };

            mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
                watchOverflow: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                threshold: 10,
                speed: 700,
                // loop: true,
                loopedSlides: 5,
                slideToClickedSlide: true,
                spaceBetween: 5,
                centerInsufficientSlides: true,
                navigation: {
                    nextEl: element.querySelector('.product__gallery-thumbs-slider-arrow--next'),
                    prevEl: element.querySelector('.product__gallery-thumbs-slider-arrow--prev')
                }
            });

            new Swiper(mainContainer, mainSliderOptions);
        });
    } else {
        $('.product__gallery-main-slider .product__gallery-image-link').fancybox({
           
        });
        $('.product__gallery-thumbs-slider .product__gallery-image-link').fancybox({
           
        });
    }
}
