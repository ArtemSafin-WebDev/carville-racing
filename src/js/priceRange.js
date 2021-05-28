import noUiSlider from 'nouislider';

export default function priceRange() {
    const elements = Array.from(document.querySelectorAll('.js-price-range'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="hidden"]');
        const priceRangeElement = element.querySelector('.catalog-products__filters-price-range-element');
        const min = parseFloat(priceRangeElement.dataset.min);
        const max = parseFloat(priceRangeElement.dataset.max);
        const step = parseFloat(priceRangeElement.dataset.step);
        const current = element.querySelector('.catalog-products__filters-price-range-current');
        const start = parseFloat(priceRangeElement.dataset.start);

        console.log({
            max, min
        })

        console.log('Price range element', priceRangeElement)

        noUiSlider.create(priceRangeElement, {
            start: [start || 0],
            connect: 'lower',
            orientation: 'horizontal',
            step: step || 300,
            range: {
                'min': [min || 0],
                'max': [max || 10000]
            }
        });

        priceRangeElement.noUiSlider.on('update', () => {
            const value = priceRangeElement.noUiSlider.get();
            input.value = value;
            current.textContent = `до ${parseFloat(value, 10)} руб.`
        });

    })
}