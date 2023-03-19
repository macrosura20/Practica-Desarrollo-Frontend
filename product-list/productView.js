export function buildProductView(product) {
  const newProductElement = document.createElement('article');
  newProductElement.classList.add('product')

  newProductElement.innerHTML = `
    <a href="/Practica/Practica-Desarrollo-Frontend/product-detail.html?productId=${product.id}">
    <h2>${(product.buy==="True" ? "Compra" : "Venta")}</h2> 
      <div class="product-info">
          <p>${product.name}</p>
          <p>Precio: ${product.price}€</p>     
          <img src= ${product.photo} alt= Foto de ${product.name}>
        </div>
      <p class="description"> ${product.description}</p>
     
    </a>
  `;

  return newProductElement
}

export function buildErrorLoadingProducts() {
  return `<p class="load-error">Ha habido un problema cargando los productos a la venta. Inténtalo de nuevo más tarde</p>`
}
export function buildEmptyProductsList() {
  return `<p>No hay resultados disponibles</p>`;
}