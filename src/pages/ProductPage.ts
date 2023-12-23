import { AbstractPage } from "../router";
import { ProductInfo } from "../router/models/ProductInfo";
import { htmlElementPars } from "../router/utils/htmlElementPars";
import template from './product.html';

export class ProductPage extends AbstractPage {

  render(): HTMLElement | DocumentFragment {
   
    const routeState: any = this.routeState;

    let productsTemplate = '';

    routeState.resolvedData?.productList.filter((el: ProductInfo)=> el.id === Number(this.routeState.params.productId))
                                           .map((el: ProductInfo) => {
      console.log(el);

      let productElementTemplate = template;

   
      productsTemplate += htmlElementPars(productElementTemplate, el);

    })
    const templEl = document.createElement('div');
    templEl.innerHTML = productsTemplate;

    //content.textContent = `Product: ${this.routeState.params.productId}`;



    return templEl.cloneNode(true) as DocumentFragment;
  }
}
