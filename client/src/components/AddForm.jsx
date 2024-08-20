import React, { useState } from "react";
import apiURL from "../api";

const AddForm = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    image: "",
  });

  const handleChange = (event) => {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(),
      {
        //make POST request to /items
      };
  };

  return (
    <form action={`${apiURL}/items`} method="POST" onSubmit={handleSubmit}>
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
        <button type="submit">Add Item</button>
      </p>
    </form>
  );
};

export default AddForm;
