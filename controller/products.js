const productModel = require("../schemas/products.schema");

exports.createProduct = (req, res, next) => {
  productModel.create(req.body);
};
