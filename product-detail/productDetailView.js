
export const buildProductDetail = (product) => {
  const productDate = new Date(product.updatedAt)
  return `
    <p>${product.name}</p>
    <p> Se ha creado ${productDate.toISOString()}</p>
    <p> Descripcion: ${product.description}</p>
    <p> Precio: ${product.price}€</p>
    <p>Estado: ${(product.buy==="True" ? "Compra" : "Venta")}</p> 
    <img src= ${product.photo} alt= Foto de ${product.name}>
    <br>
    <button id="deleteProduct">Eliminar Anuncio</button>
  `
}
