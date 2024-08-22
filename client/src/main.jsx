import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inventory from "./components/inventory/Inventory.jsx";
import Item from "./components/item/Item.jsx";
import Layout from "./components/navbar/Layout.jsx";
import AddForm from "./components/addForm/AddForm.jsx";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inventory />} />
          <Route path="/items/:id" element={<Item />} />
          <Route path="/new-item" element={<AddForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);