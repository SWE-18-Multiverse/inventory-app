const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/items", (req, res) => {
  // Create one item
});

app.get("/items", (req, res) => {
  const items = db.getItems.all();
  res.status(200).json(items);
});

app.get("/items/:id", (req, res) => {
  const item = db.getOneItem.get({ id: req.params.id });

  if (!item) {
    res.status(404).json({ error: "Item not found" });
    return;
  }

  res.status(200).json(item);
});

app.patch("/items/:id", (req, res) => {
  // Update one item
});

app.delete("/items/:id", (req, res) => {
  // Delete one item
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
