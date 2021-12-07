export class Menu {
  constructor(selector, menuToggler) {
    this.el = document.querySelector(selector);
    this.menuToggler = menuToggler;
    this.isOpen = false;
    this.dataCloseAttr = 'data-close-menu';
    this.init();
  }

  open = () => {
    this.isOpen = true;
    this.el.classList.add('is-open');
  };

  close = () => {
    this.isOpen = false;
    this.el.classList.remove('is-open');
  };

  toggle = () => {
    this.isOpen = !this.isOpen;
    this.el.classList.toggle('is-open');
  };

  handleClickOutside = ({ target }) => {
    if (this.menuToggler.contains(target) || target === this.menuToggler) {
      return;
    }

    if (!this.el.contains(target)) {
      this.close();
    }
  };

  handleMenuClose = ({ target }) => {
    const {
      dataset: { closeMenu },
    } = target;

    if (closeMenu === '') {
      this.close();
    }
  };

  init() {
    window.addEventListener('click', this.handleClickOutside);
    window.addEventListener('click', this.handleMenuClose);
  }
}
