const mongoose = require("mongoose");

/**생성자 함수로 Schema 생성 */
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: Number,
});

/**Model 생성 */
const Product = mongoose.model("Product", productSchema);

/**Model 내보내기 */
module.exports = Product;
