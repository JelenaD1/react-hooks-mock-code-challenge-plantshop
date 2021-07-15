import React, {useState} from "react";

function PlantCard({plant, onClickDelete}) {
  

  const [inStock, setInStock] = useState(true)

  const[currentPrice, setCurrentPrice] = useState(plant.price)

  const handleClick = () => {
    setInStock(!inStock)
  }
  

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    onClickDelete(plant.id)

  }
  const handlePriceChange = (e) => {
    setCurrentPrice(e.target.value)
  }

  const newPriceSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: currentPrice
      })
   
    })
   }
  

  
  

  return (
    <li  className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <form onSubmit={newPriceSubmit}>
      <input 
        value={currentPrice}
        onChange={handlePriceChange}
        type="number" 
        name="price" 
        step="0.01" 
        placeholder={currentPrice} />
        <input 
        type="submit"
        value="submit">
        </input>
      </form>
      {/* //</form><p>Price: {plant.price}</p> */}
     
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
