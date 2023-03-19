import { deleteProduct, getProductById } from "./productDetail.js"
import { buildProductDetail } from "./productDetailView.js"
import { decodeToken } from '../utils/decodeToken.js'
import { pubSub } from "../pubSub.js"
import { buildSpinnerView, hideSpinner } from "../utils/SpinnerView.js"

export const productDetailController = async (productDetailElement, productId) => {
  productDetailElement.innerHTML = buildSpinnerView()
  try {
    
    const product = await getProductById(productId)
    
    productDetailElement.innerHTML = buildProductDetail(product)
    handleDeleteProductButton(productDetailElement, product)
  } catch (error) {
    alert(error)
  }finally{
    hideSpinner(productDetailElement)
  }

  function handleDeleteProductButton(productDetailElement, product) {
    const token = localStorage.getItem('token');
    const deleteButtonElement = productDetailElement.querySelector('#deleteProduct');

    if (!token) {
      deleteButtonElement.remove()
    } else {
      const userInfo = decodeToken(token);
      if (product.userId === userInfo.userId) {
        // añadir evento click al boton + enganchar con sparrest
        deleteButtonElement.addEventListener('click', async () => {
          const answer = confirm('¿Deseas borrar el anuncio?')
          if (answer) {
            await deleteProduct(product.id)
            window.location = './index.html'
          }
        })
      } else {
        deleteButtonElement.remove()
      }
    }
  }
}