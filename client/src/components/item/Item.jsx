import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditForm from "../editForm/EditForm";
import './item.css'

function Item() {
  const [item, setItem] = useState({
    id: null,
    name: null,
    description: null,
    price: null,
    category: null,
    image: null,
  });

  const [isEditingItem, setIsEditingItem] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsEditingItem(!isEditingItem);
  };

  // Gets the route parameters (see client/src/main.jsx).
  const params = useParams();

  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(`http://localhost:3000/items/${params.id}`);
      const item = await response.json();
      setItem(item);
    }

    fetchItem();
  }, [params.id]);

  useEffect(() => {
    if (item.name) {
      document.title = item.name;
    }
  }, [item.name]);

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?",
    );

    if (!isConfirmed) return;

    //send a DELETE request to /items/:id
    await fetch(`http://localhost:3000/items/${params.id}`, {
      method: "DELETE",
    });

    setItem(null);

    // Return to the home page
    navigate("/");
  };

  return (
    <div className="item-container">
      <h1>{item.name}</h1>
      <h2>{item.category}</h2>
      <img src={item.image} alt={item.name} />
      <p className="item-description">{item.description}</p>
      <p id='price'>{`£${item.price}`}</p>
      <div className="button-container">
        <button onClick={handleClick}>Edit Item</button>
        <button onClick={handleDelete}>Delete Item</button>
      </div>
      
      {isEditingItem && (
        <EditForm
          currentItem={item}
          setItem={setItem}
          setIsEditingItem={setIsEditingItem}
        />
      )}
    </div>
  );
}

export default Item;
