const express = require('express');
const router = express.Router();


//router.use(express.json());
//router.use(express.urlendcoded({ extended: true }));
// Query Parameters
// http://localhost:3000/products?category=shoes&color=blue
router.get('/', (req, res) => {
    console.log(req.query);
    // const { category, color } = req.query;
    if(req.query.category === undefined || req.query.color === undefined) {
        const error = {
            status: false,
            message: 'please specify category and color query parameters'
        }
        res.send(error);
    } else {
        const category = req.query.category;
        const color = req.query.color;

        // res.type('html');
        res.setHeader('Content-Type', 'text/html');
        res.status(201)
           .send(`<h1>Products Query Parameter</h1>
                <p>Category: ${category}</p>
            <p>Color: ${color}</p>`);
    // res.send(req.query)
        
    }
})

// Route Parameters
// http://localhost:3000/products/shoes/blue
router.get('/:category/:color', (req, res) => {
    console.log(req.params);
    const { category, color } = req.params;
    res.send(`<h1>Products Route Parameter</h1>
            <p>Category: ${category}</p>
            <p>Color: ${color}</p>`);
})

// Body Object
// Post Request
// http://localhost:3000/products
router.post('/', (req, res) => {
    const products = req.body;
    console.log(products);
    res.type('json');
    // res.setHeader('Content-Type', 'application/json');
    res.json(products);
    //res.send('<h1>Products Post</h1>');
})

// PUT Request and body object
// http://localhost:3000/products/1

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const products = req.body;
    console.log(products);
    res.send(`<h1>Product ID to PUT</h1>
            <p>ID: ${id}</p>`);
})

// http://localhost:3000/products/1
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`<h1>Product ID to DELETE</h1>
            <p>ID: ${id}</p>`);
})

module.exports = router;