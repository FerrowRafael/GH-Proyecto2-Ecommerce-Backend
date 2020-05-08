const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const PORT = 3001;
const app = express();

mongoose.connect('mongodb://localhost:27017/BackEndN', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(console.error);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
// const ordersRouter = require('./routes/orders');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
// app.use('/orders', ordersRouter);

app.listen(PORT, () => console.log('server running on port ' + PORT));