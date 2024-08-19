import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inventory from "./components/Inventory.jsx";
import Item from "./components/Item.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/items/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
