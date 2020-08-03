let Product = require('../models/Product');

let product = [
    new Product({
        name: 'Producto Seeder 1',
        description: 'Descripcion product seeder 1',
        price: 33,
        image_path: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
        stock: 44,
        popularity: 55,
        category: 'Patata',
        orderIds: 66,
        userId: 2,
    }),
    new Product({
        name: 'Producto Seeder 2',
        description: 'Descripcion product seeder 2',
        price: 33,
        image_path: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        stock: 44,
        popularity: 55,
        category: 'Patata',
        orderIds: 66,
        userId: 2,
        }),

]