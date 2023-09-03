const products = require("../data/products");

const productsController = {
  detail: (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => product.id == id);

    if (!product) {
      return res.render("main/homeMayorista");
    }

    res.render("products/productDetail", { product, products });
  },
  cart: (req, res) => {
    res.render("products/productCart");
  },
};

module.exports = productsController;
