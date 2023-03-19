import { pubSub } from "../pubSub.js"
import { getProducts } from "./products.js"
import { buildSpinnerView, hideSpinner } from "../utils/SpinnerView.js"
import { buildProductView, buildEmptyProductsList } from "./productView.js"

export async function productListController(productListElement) {
  productListElement.innerHTML = buildSpinnerView()
  let products = [];
  try {
    products = await getProducts()
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Los productos se cargaron correctamente')


    if (products.length > 0) {
      drawProducts(products, productListElement)
    } else {
      showEmptyMessage(productListElement)
    }
  } catch (error) {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hemos podido cargar los productos')
  } finally {
    hideSpinner(productListElement)
  }
}


function drawProducts(products, productListElement) {
  for (const product of products) {
    const newProductElement = buildProductView(product)
    productListElement.appendChild(newProductElement)
  }
}

function showEmptyMessage(productListElement) {
  productListElement.innerHTML = buildEmptyProductsList()
}
