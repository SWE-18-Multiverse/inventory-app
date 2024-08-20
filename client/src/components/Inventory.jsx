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
      <h1>Welcome to our Inventory</h1>
      <ul className="inventory-container">
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>
              <>
                <img
                  className="inventory-image"
                  src={item.image}
                  alt={item.name}
                />
                <h3 className="inventory-item-name">{item.name}</h3>
              </>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Inventory;
