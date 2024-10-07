const express = require('express');
const router = express.Router();

//http://localhost:3000/
router.get('/', (req, res) => {
    res.status(200);
    res.send('<h1>Hello world</h1>');
});

//http://localhost:3000/about
router.get('/about', (req, res) =>{
    throw new Error('Error from /about route');
    //res.send('<h1>About Us</h1>')
});

//http://localhost:3000/contact?name=manny&email=manny@gmail
router.post('/contact', (req, res) =>{
    console.log(`POST Query: ${JSON.stringify(req.query)}`)
    console.log(`POST Body: ${JSON.stringify(req.body)}`)
    res.send(req.query);
});

// http://localhost:3000/header
router.get('/header', (req, res) => {
    // res.header('Content-Type', 'text/html');
    // res.setHeader('Content-Type', 'text/html');
    // req.get('Content-Type');
    // req.headers['Content-Type'];
    res.send(req.headers);
})

module.exports = router;