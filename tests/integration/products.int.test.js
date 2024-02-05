const request = require("supertest");
const app = require("../../server");

// 단위 테스트에서 활용한 /tests/data/new-product.json 에 있는 데이터를 써준다.
const newProduct = require("../data/new-product.json");

let firstProduct;
describe("POST integration test", () => {
  it("POST /api/products", async () => {
    const response = await request(app).post("/api/products").send(newProduct);
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe(newProduct.name);
    expect(response.body.description).toBe(newProduct.description);
  });
  it("should return 500 on POST /api/products", async () => {
    const response = await request(app)
      .post("/api/products")
      .send({ name: "iphone" });
    expect(response.statusCode).toBe(500);

    // console.log('response', response.body);

    expect(response.body).toStrictEqual({
      message:
        "Product validation failed: description: Path `description` is required.",
    });
  });
});

describe("GET integration test", () => {
  it("GET /api/products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].name).toBeDefined();
    expect(response.body[0].description).toBeDefined();
    firstProduct = response.body[0];
    console.log(firstProduct);
  });
  it("GET /api/products/:productId", async () => {
    const response = await request(app).get(
      `/api/products/${firstProduct._id}`,
    );
    console.log(firstProduct._id);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(firstProduct.name);
    expect(response.body.description).toBe(firstProduct.description);
  });
  it("GET id doesnt exist /api/products/:productId", async () => {
    const response = await request(app).get(
      "/api/products/65b5c343fwetwet66af39c77",
    );
    expect(response.statusCode).toBe(404);
  });
});
