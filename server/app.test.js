// install dependencies
const { execSync } = require("child_process");
const { describe, it, expect, beforeAll, afterEach } = require("@jest/globals");
execSync("npm install");
execSync("npm run seed");
const request = require("supertest");
const { db } = require("./db/db");
const app = require("./app");
const seedData = require("./db/seed");
describe("GET test", () => {
  it("should get 200 response", async () => {
    const response = await request(app).get("/items");
    expect(response.status).toBe(200);
  });
  it("should get all items", async () => {
    const response = await request(app).get("/items");
    const responseData = response.body;
    expect(Array.isArray(responseData)).toBe(true);
    // the expect statement below expects an array of only objects and will check all of them
    expect(responseData).toEqual(
      responseData.map(() =>
        expect.objectContaining({
          name: expect.any(String),
          description: expect.any(String),
          price: expect.any(Number),
          category: expect.any(String),
          image: expect.any(String),
        }),
      ),
    );
  });
});
describe("GET test /:id", () => {
  it("should return the correct item", async () => {
    const response = await request(app).get("/items/2");
    expect(response.body.id).toBe(2);
    expect(response.body).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
        category: expect.any(String),
        image: expect.any(String),
      }),
    );
  });
});
describe("POST /items", () => {
  it("should return the item was created", async () => {
    const newItem = {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price: 109.95,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };
    const response = await request(app).post("/items").send(newItem);
    expect(response.body).toEqual(
      expect.objectContaining({
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        price: 109.95,
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      }),
    );
  });
  it("should throw an error, if no valid name provided", async () => {
    const nonValidItem = {
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price: 109.95,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };
    const response = await request(app).post("/items").send(nonValidItem);
    expect(response.body.error).toBe("Missing item name");
    expect(response.statusCode).toBe(400);
  });
  it("should throw an error, if no valid description provided", async () => {
    const nonValidItem = {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };
    const response = await request(app).post("/items").send(nonValidItem);
    expect(response.body.error).toBe("Missing item description");
    expect(response.statusCode).toBe(400);
  });
  it("should throw an error, if no valid price provided", async () => {
    const nonValidItem = {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };
    const response = await request(app).post("/items").send(nonValidItem);
    expect(response.body.error).toBe("Missing item price");
    expect(response.statusCode).toBe(400);
  });
  it("should throw an error, if no valid category provided", async () => {
    const nonValidItem = {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };
    const response = await request(app).post("/items").send(nonValidItem);
    expect(response.body.error).toBe("Missing item category");
    expect(response.statusCode).toBe(400);
  });
  it("should throw an error, if no valid image provided", async () => {
    const nonValidItem = {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price: 109.95,
      category: "men's clothing",
    };
    const response = await request(app).post("/items").send(nonValidItem);
    expect(response.body.error).toBe("Missing item image");
    expect(response.statusCode).toBe(400);
  });
});
describe("DELETE /items/:id", () => {
  it("Should delete item", async () => {
    const responsePost = await request(app).post("/items").send({
      name: "Mens Cotton Jacket",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      price: 55.99,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    });
    const responseDelete = await request(app).delete(
      `/items/${responsePost.body.id}`,
    );
    expect(responseDelete.status).toBe(204);
    const responseGet = await request(app).get(
      `/items/${responsePost.body.id}`,
    );
    expect(responseGet.status).toBe(404);
  });
});
describe("PATCH /items/:id", () => {
  it("Should update item", async () => {
    const updatedItem = {
      name: "Mens Tweed Jacket",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      price: 55.99,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    };
    const response = await request(app).patch("/items/3").send(updatedItem);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedItem);
  });
  it("Should throw an error if no item is provided", async () => {
    const response = await request(app).patch("/items/3").send({});
    expect(response.status).toBe(500);
  });
  it("Should throw an error if no valid item name is provided", async () => {
    const response = await request(app).patch("/items/3").send({
      name: "",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      price: 55.99,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    });
    expect(response.body.error).toBe("Item name not updated");
  });
  it("Should throw an error if no valid item description is provided", async () => {
    const response = await request(app).patch("/items/3").send({
      name: "Mens Tweed Jacket",
      description: "",
      price: 55.99,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    });
    expect(response.body.error).toBe("Item description not updated");
  });
  it("Should throw an error if no valid item price is provided", async () => {
    const response = await request(app).patch("/items/3").send({
      name: "Mens Tweed Jacket",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      price: 0,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    });
    expect(response.body.error).toBe("Item price not updated");
  });
  it("Should throw an error if no valid item category is provided", async () => {
    const response = await request(app).patch("/items/3").send({
      name: "Mens Tweed Jacket",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      price: 55.99,
      category: "",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    });
    expect(response.body.error).toBe("Item category not updated");
  });
  it("Should throw an error if no valid item image is provided", async () => {
    const response = await request(app).patch("/items/3").send({
      name: "Mens Tweed Jacket",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      price: 55.99,
      category: "men's clothing",
      image: "",
    });
    expect(response.body.error).toBe("Item image not updated");
  });
});
