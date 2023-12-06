let url = 'https://gustavodev.pythonanywhere.com/products';

async function getProducts(url) {
  let response = await fetch(url);
  let productListData = await response.json();

  return productListData;
}

export const productArray = await getProducts(url);
// console.log(productArray);
