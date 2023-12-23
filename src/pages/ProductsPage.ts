import { AbstractPage, ActivatedRouteState } from "../router";
import template from './products.html';
import { htmlElementPars } from '../router/utils/htmlElementPars'
import { ProductInfo } from "../router/models/ProductInfo";



export class ProductsPage extends AbstractPage {
  render(): HTMLElement | DocumentFragment {

    const routeState: any = this.routeState;

    let productsTemplate = '';

    routeState.resolvedData?.productList.map((el: ProductInfo) => {
      console.log(el);

      let productElementTemplate = template;
     // let aa= template.replace(/(:)##([A-zА-я]*?)id##/i, (_, a, b) => a + b + el.id.toString());

      productsTemplate += htmlElementPars(productElementTemplate, el);

    })
    const templEl = document.createElement('div');
    templEl.className = 'products-list';




    templEl.innerHTML = productsTemplate;

    return templEl.cloneNode(true) as DocumentFragment;
  }


  onRender(): void {

  }
}
