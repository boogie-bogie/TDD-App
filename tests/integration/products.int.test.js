const request = require("supertest");
const app = require("../../server");

// 단위 테스트에서 활용한 /tests/data/new-product.json 에 있는 데이터를 써준다.
const newProduct = require("../data/new-product.json");

it("POST /api/products", async () => {
  const response = await request(app)
    .post("/api/products")
    .send(newProduct);
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe(newProduct.name);
    expect(response.body.description).toBe(newProduct.description);
});