import {createContent} from './modules/utils.js';

export default class AbstractView {

  get template() {
    throw new Error(`you have to define template for view`);
  }

  render() {
    return createContent(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
