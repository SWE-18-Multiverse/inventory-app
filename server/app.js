const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/items", (req, res) => {
  // Create one item
  const newItem = req.body;

  if(!newItem.name){
    res.status(400).json({error: 'Missing item name'});
    return
  }
  if(!newItem.description){
    res.status(400).json({error: 'Missing item description'});
    return
  }
  if(!newItem.price){
    res.status(400).json({error: 'Missing item price'});
    return
  }
  if(!newItem.category){
    res.status(400).json({error: 'Missing item category'});
    return
  }
  if(!newItem.image){
    res.status(400).json({error: 'Missing item image'});
    return
  }
  
  const { lastInsertRowid } = db.createOneItem.run(newItem);
  const createdItem = db.getOneItem.get({ id: lastInsertRowid });
  res.status(201).json(createdItem);
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

module.exports = app;
