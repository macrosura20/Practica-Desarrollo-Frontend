import { createProduct } from "./createProduct.js";
import { pubSub } from "../pubSub.js";

export function createProductController(createProductFormElement){
  createProductFormElement.addEventListener('submit', async(event) => {
    event.preventDefault()

    const productName = createProductFormElement.querySelector('#name')
    const productPrice = createProductFormElement.querySelector('#price')
    const productBuyValue = createProductFormElement.querySelector('#buyValue')
    const productPhoto = createProductFormElement.querySelector('#photo')
    const productDescription = createProductFormElement.querySelector('#description')
    try {
      await createProduct(productName.value, productPrice.value, productBuyValue.value, productPhoto.value, productDescription.value)
      //createProductFormElement.reset()
      window.location = './index.html'
    } catch (error) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
    }
  })
}