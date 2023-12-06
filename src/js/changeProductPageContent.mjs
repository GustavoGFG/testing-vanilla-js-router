export function changeProductPageContent(productArray) {
  // console.log(window.location.pathname);
  // console.log('Keys & Values', window.location.search);
  let params = new URL(document.location).searchParams;
  let productId = params.get('id');

  const product = productArray.find(p => {
    return p.id == productId;
  });

  document.getElementById('main-page').innerHTML = `
  <div>
  <img src="${product.thumbnail}" alt="" width="400">
  <p>R$${product.price}</p>
</div>
    `;
}
