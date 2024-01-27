const productController = require("../../controller/products");
const productModel = require("../../schemas/products.schema");

productModel.create = jest.fn();

describe("Product Controller Create", () => {
  it("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });

  it("should call ProductModel.create", () => {
    productController.createProduct(); // createProduct가 호출될 때
    expect(productModel.create).toBeCalled(); // productModel의 create 메서드가 호출이 되는지
  });
});
