export async function loginUser(email, password) {
    // construir un objeto con email y password siguiendo la interfaz definida en el endpoint /auth/register
    const user = {
      username: email,
      password: password
    }
      const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  
    if(!response.ok){
        throw new Error("Error al identificar al usuario")
    }
     const data = await response.json()

     return data.accessToken
  }