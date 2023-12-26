const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');

router.get('/add-product',(req, res, next) => {
  //  console.log('In the other middleware');
   // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));    
});

    router.post('/product', (req,res,next) => {
        console.log(req.body);
        res.redirect('/');
    });

    module.exports = router;