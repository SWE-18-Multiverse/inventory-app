import React, { useState } from "react";

const EditForm = ({ currentItem, setItem, ...props }) => {
  const [data, setData] = useState({
    name: currentItem.name,
    description: currentItem.description,
    price: currentItem.price,
    category: currentItem.category,
    image: currentItem.image,
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(event.target.action, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const editedItem = await response.json();
    setItem(editedItem);

    await fetchItems();
  };

  return (
    <form
      action={`http://localhost:5173/items/${currentItem.id}`}
      method="PATCH"
      onSubmit={handleSubmit}
    >
      <p>
        <label htmlFor="name">Name: </label>
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
        <label htmlFor="description">Description: </label>
        <textarea
          required={true}
          name="description"
          id="description"
          value={data.description}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="price">Price: </label>
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
        <label htmlFor="category">Category: </label>
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
        <label htmlFor="image">Image: </label>
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
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default EditForm;
