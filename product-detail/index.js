import { productDetailController } from "./productDetailController.js";

// leer de la url el id del producto
const params = new URLSearchParams(window.location.search)
const productId = params.get('productId');

// si el queryparam no existe, haremos una redirección al listado de anuncios
if (!productId) {
  window.location = './index.html'
} else {
  // crearemos un controlador donde le pasaremos dicho id
  const productDetailElement = document.querySelector('.product-detail');

  productDetailController(productDetailElement, productId)
}