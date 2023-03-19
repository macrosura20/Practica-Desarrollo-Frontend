export async function createProduct(name, price, buyValue, photo, description) {
  // construir un objeto con email y password siguiendo la interfaz definida en el endpoint /auth/register
  const newProduct = {
    name: name,
    price: price,
    photo: photo,
    buy: buyValue,
    description: description
  }
  
    const token = localStorage.getItem('token')
  
    const response = await fetch('http://localhost:8000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(newProduct)
    })
  
    if (!response.ok) {
      throw new Error('Error creando el Anuncio')
    }
  
  }