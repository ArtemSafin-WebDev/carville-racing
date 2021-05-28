import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";

export default function filters() {
    const btn = document.querySelector('.catalog-products__filters-mobile-btn');

    const filters = document.querySelector('.catalog-products__filters');
    const closeFiltersBtn = document.querySelector('.catalog-products__filters-close-btn')

    if (!btn || !filters) return;

    let filtersOpen = false;

    const openFilters = () => {
        if (filtersOpen) return;
        document.body.classList.add('mobile-filters-open');
        disableBodyScroll(filters);
        filtersOpen = true;
    }
    const closeFilters = () => {
        if (!filtersOpen) return;
        document.body.classList.remove('mobile-filters-open');
        clearAllBodyScrollLocks();
        filtersOpen = false;
    }

    window.openFilters = openFilters;
    window.closeFilters = closeFilters;

    btn.addEventListener('click', event => {
        event.preventDefault();
        if (!filtersOpen) {
            openFilters();
        } else {
            closeFilters();
        }
    })

    closeFiltersBtn.addEventListener('click', event => {
        event.preventDefault();
        closeFilters();
    })
}