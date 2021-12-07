import { Menu } from './menu';

const header = document.querySelector('.navbar-header');
const menuToggler = document.querySelector('.navbar-toggle');
const menu = new Menu('.collapsing-menu', menuToggler);

const toggleMenu = () => {
  menu.toggle();
};

const addStickyHeader = () => {
  header.classList.add('sticky');
};

const removeStickyHeader = () => {
  header.classList.remove('sticky');
};

const handleScroll = (event) => {
  if (window.scrollY > 20) {
    addStickyHeader();
    return;
  }

  removeStickyHeader();
};

window.addEventListener('scroll', handleScroll);
menuToggler.addEventListener('click', toggleMenu);
