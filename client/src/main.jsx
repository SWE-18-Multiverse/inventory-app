import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inventory from "./components/Inventory.jsx";
import Item from "./components/Item.jsx";
import Layout from "./components/Layout.jsx";
import AddForm from "./components/AddForm.jsx";

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