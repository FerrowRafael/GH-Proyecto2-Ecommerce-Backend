# GH-Proyecto2-Ecommerce-Backend 

BackEnd del segundo proyecto del Bootcamp FullStack de GeeksHubs de una ecommerce de camisetas.
React(Redux) / Express(MongoDB

## Table of Content

- [Built With](##-Built-With)
- [Knowledge](##-Knowledge)
- [Getting Started](##-Getting-Started)
- [Partes API](##-Partes-API)
- [Ejemplo practico filtro](##-Ejemplo-practico-filtro)
- [Documentation](##-Documentation)
- [Author](##-Author)
- [Base de Datos](##-Base-de-Datos)


## Built With 🛠️

* Javascript
* Node
* Express
* MongoDB
* Mongoose
* GIT/ GIT flow

Otros
* Postman
* Robo 3T
* Trello


## Knowledge 🧠 

* Uso DB No SQL


## Getting Started 🚀 

### Clonando repositorio

```js
git clone https://github.com/FerrowRafael/GH-Proyecto2-Ecommerce-Backend
```


### Instalación dependencias

- React
- Reduc
- redux-localstorage-simple
- axios
- antd

### Comenzando proyecto Express

Utilizamos express-generator para que nos genere una estructura de proyecto a partir de la cual trabajar.

```js
npm install express-generator -g

express --view=pug myapp

cd myapp

npm install

DEBUG=myapp:* npm start
```


### Configuración Sequelize-CLI

Instalación de dependencia
```js
$ npm install --save-dev sequelize-cli
```

Creando modelo 
```js
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```


### Arrancar el servidor

Para arrancar el servidor tienes que introducir el comando:

```js
npm start
```

## Partes API #Partes-API

- Controllers
- Middleware
- Migrations
- Models
- Routes
- Seeders
  

### Controllers

Los controladores tienen la lógica necesaria para obtener la información de la Base de Datos
Mis controladores son: 

#### Order
#### Prduct
#### User

Ejemplo: controllers/ProductController.js 
```js
async ProductsSearchMen(req, res) {
        console.log(req.params.input)
        try {
            const products = await Product.find({
                $or:[ {'name': new RegExp(req.params.input, 'i')}, {'description': new RegExp(req.params.input, 'i')}]  
            })
            .sort({ price: 1});
            res.status(200).send(products);
        } catch (err) {
            console.log(err);
        }
    },
```


### Middleware

- Authentication



### Models

En los modelos se coloca el tipo de datos que tendran los valores de cada tabla de la Base de Datos y las relaciones con el resto de tablas.
Mis modelos son:

- Order
- Prduct
- User

Ej. models/Order.js
```js
'use strict';
const OrderSchema = new mongoose.Schema({

    total: String,
    status: String,
    UserId: String,
    deliveryDate: Date,
    productIds: [{
        name: String,
        _id:{
            type: ObjectId,
            ref: 'Product',
        },
        unit: Number,
        subtotal: Number
    }]
}, {
    timestamps: true
});
const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
```


### Routes

#### Orders

GET <a href="http://localhost:3000/orders/all">http://localhost:3000/orders/all<a>
GET <a href="http://localhost:3000/orders/:id">http://localhost:3000/orders/id=:id<a>
GET <a href="http://localhost:3000/orders/add">http://localhost:3000/orders/name=:name<a>
  
#### Products

GET <a href="http://localhost:3000/orders/all">http://localhost:3000/orders/all<a>
GET <a href="http://localhost:3000/orders/:id">http://localhost:3000/orders/id=:id<a>
GET <a href="http://localhost:3000/orders/add">http://localhost:3000/orders/name=:name<a>

#### Users

GET <a href="http://localhost:3000/orders/all">http://localhost:3000/orders/all<a>
GET <a href="http://localhost:3000/orders/:id">http://localhost:3000/orders/id=:id<a>
GET <a href="http://localhost:3000/orders/add">http://localhost:3000/orders/name=:name<a>
  


## Ejemplo practico filtro ⚙️

Si queremos buscar por ejemplo los productos mas recientes
Introducimos la ruta:
``` js
http://localhost:3001/products/recent
```

Obtendremos el siguiente JSON
```json
[
    {
        "image_path": [
            "https://srv.latostadora.com/designall.dll/soy_un_unicornio--i:13562323411680135623192;b:f8f8f8;s:H_D2;f:f;k:4ac791c28bbd367c55dc9a1a774514b3;p:1.jpg"
        ],
        "stock": 506,
        "popularity": 302,
        "category": [],
        "orderIds": [],
        "_id": "5ebffdea43b3e659147028d5",
        "name": "Jersey Soy un unicornio!",
        "description": "Jersey con capucha. 80% algodón y 20% poliéster, 280 gr/m2, costuras reforzadas y bolsillo de canguro.",
        "price": 29.95,
        "userId": "5ebff9cc00a3373d30ddb356",
        "createdAt": "2020-05-16T14:51:22.087Z",
        "updatedAt": "2020-05-16T14:51:22.087Z",
        "__v": 0
    },
    {
        "image_path": [
            "https://srv.latostadora.com/designall.dll/espiritu_del_arbol_kodama--i:13562322766220135623194;b:f8f8f8;s:M_M4;f:f;k:abc533d43f222d91f521ae05bb036d67;p:1.jpg"
        ],
        ...
]
```

## Documentation 📚 

- [Express](https://es.reactjs.org/)


## Author 👨🏼‍💻 

* **Rafael Fernández Gómez** - [FerrowRafael](https://github.com/FerrowRafael)
