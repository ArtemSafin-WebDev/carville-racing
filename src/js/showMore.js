export default function showMore() {
    const elements = Array.from(document.querySelectorAll('.js-show-more'));

    elements.forEach(element => {
        const btn = element.querySelector('.js-show-more-btn');
        const content = element.querySelector('.js-show-more-content');

        btn.addEventListener('click', event => {
            event.preventDefault();
            element.classList.toggle('active');
        })
    })
}