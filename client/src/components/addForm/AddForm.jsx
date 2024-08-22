import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddForm = ({ fetchItems, hideForm }) => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(event.target.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigate("/");
  };

  return (
    <form
      action={"http://localhost:3000/items"}
      method="POST"
      onSubmit={handleSubmit}
    >
      <p>
        <label htmlFor="name">Name</label>
        <input
          required={true}
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          required={true}
          name="description"
          id="description"
          value={data.description}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input
          required={true}
          type="number"
          name="price"
          id="price"
          value={data.price}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="category">Category</label>
        <input
          required={true}
          type="text"
          name="category"
          id="category"
          value={data.category}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          required={true}
          type="text"
          name="image"
          id="image"
          value={data.image}
          onChange={handleChange}
        />
      </p>
      <p>
        <button type="submit">Create Item</button>
      </p>
    </form>
  );
};

export default AddForm;
