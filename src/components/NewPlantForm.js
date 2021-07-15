import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddPlant(formData)
    setFormData({
      name: "",
      image: "",
      price: 0

    })


  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={handleChange} 
        value={formData.name}
        type="text" 
        name="name" 
        placeholder="Plant name" />
        <input onChange={handleChange}
        value={formData.image}
        type="text" 
        name="image" 
        placeholder="Image URL" />
        <input onChange={handleChange} 
        type="number" 
        value={formData.price}
        name="price" 
        step="0.01" 
        placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
