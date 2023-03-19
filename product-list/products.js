  export async function getProducts(){
    const productsUrl = 'http://localhost:8000/api/products' 
    
    const reponse = await fetch(productsUrl)
    const products = await reponse.json()

    return products
  }