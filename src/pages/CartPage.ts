import {AbstractPage} from "../router";
import template from './Cart.html';

export class CartPage extends AbstractPage {

  render(): HTMLElement | DocumentFragment {
    const content = document.createElement('div');
    const routeState:any = this.routeState;
    debugger;
    content.innerHTML = template;
    
    return content.cloneNode(true) as DocumentFragment;

  }

}
