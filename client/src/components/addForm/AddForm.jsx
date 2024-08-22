import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../components/addForm/form.css'



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
    <div className="addform-container">
    <form
      className="form"
      action={"http://localhost:3000/items"}
      method="POST"
      onSubmit={handleSubmit}
    >
      
        <label htmlFor="name">Name </label>
        <input
          placeholder="Enter a name"
          required={true}
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
        />
    
    
        <label htmlFor="description">Description </label>
        <textarea
          placeholder="Enter a description"
          required={true}
          name="description"
          id="description"
          value={data.description}
          onChange={handleChange}
        />
      
      
        <label htmlFor="price">Price </label>
        <input
          placeholder="0"
          required={true}
          type="number"
          name="price"
          id="price"
          value={data.price}
          onChange={handleChange}
        />
      
      
        <label htmlFor="category">Category </label>
        <input
          placeholder="Enter a category"
          required={true}
          type="text"
          name="category"
          id="category"
          value={data.category}
          onChange={handleChange}
        />
      
      
        <label htmlFor="image">Image </label>
        <input
        placeholder="Enter a URL"
          required={true}
          type="text"
          name="image"
          id="image"
          value={data.image}
          onChange={handleChange}
        />
      
      <p>
        <button type="submit">Create Item</button>
      </p>
    </form>
    </div>
  );
};

export default AddForm;
