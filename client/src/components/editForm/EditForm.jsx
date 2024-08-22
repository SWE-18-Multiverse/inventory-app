import React, { useState } from "react";
import '../addForm/form.css'

const EditForm = ({ currentItem, setItem, setIsEditingItem}) => {
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

    // hide the form
    setIsEditingItem(false)
  };

  return (
    <form
      className="form"
      action={`http://localhost:3000/items/${currentItem.id}`}
      method="POST"
      onSubmit={handleSubmit}
    >
      
        <label htmlFor="name">Name</label>
        <input
          required={true}
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
        />
      
        <label htmlFor="description">Description</label>
        <textarea
          required={true}
          name="description"
          id="description"
          value={data.description}
          onChange={handleChange}
        />
     
        <label htmlFor="price">Price</label>
        <input
          required={true}
          type="number"
          name="price"
          id="price"
          value={data.price}
          onChange={handleChange}
        />
    
        <label htmlFor="category">Category</label>
        <input
          required={true}
          type="text"
          name="category"
          id="category"
          value={data.category}
          onChange={handleChange}
        />
     
        <label htmlFor="image">Image</label>
        <input
          required={true}
          type="text"
          name="image"
          id="image"
          value={data.image}
          onChange={handleChange}
        />
  
        <button type="submit">Submit</button>
    
    </form>
  );
};

export default EditForm;
