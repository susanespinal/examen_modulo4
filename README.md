# examen_modulo4
//***** CREACION DE LA BD EN DOCKER
docker run --name postgres -e POSTGRES_USER=susan -e POSTGRES_PASSWORD=password -e POSTGRES_DB=postgres -p 4000:5432 -d postgres

/***** EJECUTAR CON:
/* -> src/index.js
-> npm run dev

/**** LOCALHOST:4001
PORT:4001 

/*** POST USERS EJEMPLO
http://localhost:4001/api/users
{
  "name":"Susan Espinal",
  "correo":"susan.espinal@gmail.com",
  "contrasena":"password",
  "estado":"true"
}

/*** POST CATEGORIES
http://localhost:4001/api/products
  {
    "usuarioId": 1,
    "name": "categoria 1"
  }

/*** POST PRODUCTS
http://localhost:4001/api/products
{
  "usuarioId": 1,
  "categoriaId": 1,
  "name":"Producto 1",
  "precio_unitario": 10,
  "estado": true
}
