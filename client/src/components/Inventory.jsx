import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Inventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("http://localhost:3000/items");
      const items = await response.json();
      setItems(items);
    }

    fetchItems();
  }, []);

  useEffect(() => {
    document.title = "Inventory";
  }, []);

  return (
    <>
      <h1>Inventory</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Inventory;
