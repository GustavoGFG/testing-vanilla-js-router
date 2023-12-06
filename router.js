import { changeProductPageContent } from './src/js/changeProductPageContent.mjs';
import { productArray } from './src/js/productData.js';

const route = event => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
};

const routes = {
  404: '/src/pages/404.html',
  '/': '/src/pages/index.html',
  '/about': '/src/pages/about.html',
  '/lorem': '/src/pages/lorem.html',
  '/product': '/src/pages/product.html',
};

const handleLocation = async () => {
  const path = window.location.pathname;
  let route = routes[path] || routes[404];

  let params = new URL(document.location).searchParams;
  let productId = params.get('id');

  if (
    productId &&
    (productId <= 0 ||
      productId > productArray.length ||
      isNaN(Number(productId)) ||
      productId % productId != 0)
  ) {
    route = routes[404];
  }

  const html = await fetch(route).then(data => data.text());
  document.getElementById('main-page').innerHTML = html;

  if (window.location.pathname === '/product') {
    changeProductPageContent(productArray);
  }
};

window.onpopstate = handleLocation;

window.route = route;

handleLocation();
