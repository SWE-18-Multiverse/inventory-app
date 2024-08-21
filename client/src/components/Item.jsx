import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditForm from "./EditForm";

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
    <>
      <h1>{item.name}</h1>
      <h2>{item.category}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>{`£${item.price}`}</p>
      <button onClick={handleClick}>Edit Item</button>
      <button onClick={handleDelete}>Delete Item</button>
      {isEditingItem && (
        <EditForm
          currentItem={item}
          setItem={setItem}
          setIsEditingItem={setIsEditingItem}
        />
      )}
    </>
  );
}

export default Item;
