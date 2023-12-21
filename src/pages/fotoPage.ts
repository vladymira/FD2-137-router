import {AbstractPage} from "../router";
import template from './foto.html';

const templEl = document.createElement('template');
templEl.innerHTML = template;

export class fotoPage extends AbstractPage {
  render(): HTMLElement | DocumentFragment {

    return templEl.content.cloneNode(true) as DocumentFragment;
  }

}
