const products = []

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{pageTitle: 'Product Add'})
  }

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  }

exports.getProducts = (req, res, next) => {
    console.log('shop.js', products);
    res.render('shop',{prods: products, pageTitle: 'Shop'})
  }