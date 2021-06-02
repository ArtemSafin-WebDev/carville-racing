export default function tabs() {
    const elements = Array.from(document.querySelectorAll('.js-tabs'));

    elements.forEach(element => {
        const links = Array.from(element.querySelectorAll('.js-tabs-link'));
        const items = Array.from(element.querySelectorAll('.js-tabs-item'));
        const select = element.querySelector('.js-tabs-select');

        const setActiveTab = index => {
            links.forEach(link => link.classList.remove('active'));
            items.forEach(link => link.classList.remove('active'));

            links[index].classList.add('active');
            items[index].classList.add('active');
        };

        setActiveTab(0);

        links.forEach((link, linkIndex) => {
            link.addEventListener('click', event => {
                event.preventDefault();
                setActiveTab(linkIndex);
            });
        });

        if (window.matchMedia('(max-width: 640px)').matches) {
            select.addEventListener('change', event => {
                console.log('Selected tab', event.target.value);

                setActiveTab(event.target.value)
            })
        }
    });
}
