const express = require('express');
const productsRouter = require('./routes/products');

const app = express();
const SERVER_PORT = process.env.port || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const loggerMiddleware = (req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    next();
}

// Middleware for all routes - Gloval Middleware | application middleware
app.use(loggerMiddleware);

// Middleware for /api/v1/products route
app.use('/api/v1/products', (req, res, next) => {
    console.log('Middleware /api/v1/products');
    next();
})

// Routes
app.use('/api/v1/home',homeRouter)
app.use('/api/v1/products',productsRouter)


//Error
app.get('/error', (req, res) => {
    // Error middleware will be called
    throw new Error('This is an error');
});

//Error Handler
const errorHandler = (err, req, res, next) => {
    //console.error(err.stack);
    res.status(500).send({status: false, message: err.message});
}

// Middleware for error handling
app.use(errorHandler);

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
});