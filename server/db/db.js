// DOCUMENTATION:
// https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md

const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");

// Connects to the database at server/inventory.db.
const db = new Database(path.join(__dirname, "..", "inventory.db"));

// Executes the contents of server/db/schema.sql.
const schema = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf-8");
db.exec(schema);

// A prepared statement that creates one item.
const createOneItem = db.prepare(
  `INSERT INTO items (name, description, price, category, image)
  VALUES (:name, :description, :price, :category, :image)`,
);

// A transaction that creates multiple items (used in server/db/seed.js).
const createItems = db.transaction((items) => {
  for (const item of items) {
    createOneItem.run(item);
  }
});

// A prepared statement that gets all items.
const getItems = db.prepare("SELECT * FROM items");

// A prepared statement that gets one item by its ID.
const getOneItem = db.prepare("SELECT * FROM items WHERE id = :id");

// A prepared statement that deletes a item by its ID.
const deleteOneItem = db.prepare("DELETE FROM items WHERE id = :id");

// A prepared statement that updates an item by its ID.
const updateOneItem = db.prepare(
  "UPDATE items SET name = :name, description = :description, price = :price, category = :category, image = :image WHERE id = :id",
);

module.exports = {
  createOneItem,
  createItems,
  getItems,
  getOneItem,
  db,
  deleteOneItem,
  updateOneItem,
};
