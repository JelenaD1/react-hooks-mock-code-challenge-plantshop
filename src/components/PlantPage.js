import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const API = ("http://localhost:6001/plants")

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setPlants(data))

  }, [])

  const handleAddPlant = (newPlant) => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
     .then(resp => resp.json())
     .then(data => setPlants([...plants, data]))

  }
  
  // const handlePlantSearch = (searchTerm) => {
  //   const filteredPlants = plants.filter((plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase())))
  //   setPlants(filteredPlants)

  // }

  const plantsToDisplay = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search  
               searchTerm={searchTerm}
               setSearchTerm={setSearchTerm} />
      <PlantList plants={plantsToDisplay}
      
      />
    </main>
  );
}

export default PlantPage;
