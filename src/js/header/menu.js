export class Menu {
  constructor(selector) {
    this.el = document.querySelector(selector);
  }

  open() {
    this.el.classList.add('is-open');
  }

  close() {
    this.el.classList.remove('is-open');
  }
}
