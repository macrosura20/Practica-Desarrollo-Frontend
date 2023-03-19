export const getProductById = async (productId) => {
    const response = await fetch(`http://localhost:8000/api/products/${productId}`)
  
    if (!response.ok) {
      throw new Error('El producto solicitado no existe')
    }
  
    const product = await response.json();
  
    return product
  }

  export const deleteProduct = async (productId) => {
    const token = localStorage.getItem('token')
  
    const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      }
    })
  }