const productModel = require("../schemas/products.schema");

exports.createProduct = () => {
  productModel.create();
};
