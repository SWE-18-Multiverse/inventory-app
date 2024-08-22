import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import './inventory.css'
import LandingImage from "../../images/Layout.jpg"

function Inventory() {
  const [items, setItems] = useState([]);

  const fetchItems = useCallback(async () => {
    const response = await fetch("http://localhost:3000/items");
    const items = await response.json();
    setItems(items);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    document.title = "Inventory";
  }, []);

  return (
    <>
      <img className="landingpage-img" src={LandingImage} alt="landing page img"/>
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
