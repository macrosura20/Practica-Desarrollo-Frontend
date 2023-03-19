# Practica-Desarrollo-Frontend con JavaScript
## Laura Gabriela Fernandez Zambrano
Aplicación Web Shabby Wallapop:
Funcionalidades:
 - Mostrar una lista de todos los anuncios
 - Mostrar en detalle cada uno de los articulos del anuncio
 - Registrarse en la página
 - Hacer Login
 - Crear anuncio y borralos si estas haz hecho Login previamente.

Se utiliza [sparrest.js](https://github.com/kasappeal/sparrest.js) proyecto basado en la utilidad json-server , el cual nos ofrece un completo API REST para simular un backend real y adaptarse a las necesidades de esta práctica.

- Usuarios
```json
"users": [
    {
      "username": "test@test.es",
      "password": "$2b$10$wngfKayExB5GDuYnxhEEZexdzh0p1YHCdxonJg3ZxYqevSjXlJ6sq",
      "id": 1
    }]
```

- Productos
```json
"products": [
    {
      "photo": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51iR6nXKD-L._AC_SX425_.jpg",
      "userId": 1,
      "updatedAt": "2023-03-19T08:28:49.900Z",
      "id": 1,
      "name": "Peluche",
      "description": "Peluches inspirados en el videojuego de aventuras, puzles y terror donde has de escapar de una fábrica de juguetes habitada por unos juguetes con sed de venganza.",
      "price": "17.95",
      "buy": "True"
    }]
```