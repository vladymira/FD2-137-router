import {RedirectPath, Router} from "./router";
import {CartPage, HistoryPage, ProductPage, ProductsPage} from "./pages";
import './css/style.scss'

import listPath from './list.json';
const appRouter = new Router([
  {
    path: '',
    redirectTo: '/products'
  },
  {
    path: 'cart',
    page: CartPage,
  },
  {
    path: 'history',
    page: HistoryPage,
    guards: [
      () => new Promise<RedirectPath>((resolve) => {
        setTimeout(() => resolve(new RedirectPath('/')), 2_000);
      })
    ],
  },
  {
    path: 'products',
    page: ProductsPage,
    resolve: {
      productList: () => fetch(listPath).then(response => response.json()),
    },
  },
  {
    path: 'products/:productId',
    page: ProductPage,
    resolve: {
      productList: () => fetch(listPath).then(response => response.json()),
    },
  },
 
]);

appRouter.start();
