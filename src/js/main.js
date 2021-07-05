import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';
import promoSlider from './promoSlider';
import priceRange from './priceRange';
import newsSlider from './newsSlider';
import menu from './menu';
import filters from './filters';
import tabs from './tabs';
import showMore from './showMore';
import copyCode from './copyCode';
import productGallery from './productGallery';
import modals from './modals';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
    promoSlider();
    priceRange();
    newsSlider();
    menu();
    filters();
    tabs();
    showMore();
    copyCode();
    productGallery();
    modals();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
