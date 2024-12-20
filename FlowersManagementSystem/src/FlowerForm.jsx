import React, { useState } from "react";


const FlowerForm = ({ addFlower }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const flowerSuggestions = [
    "Rose",
    "Tulip",
    "Sunflower",
    "Lily",
    "Orchid",
    "Daffodil",
    "Chrysanthemum",
    "Marigold",
  ];

  const typeSuggestions = [
    "Perennial",
    "Annual",
    "Bulb",
    "Wildflower",
    "Shrub",
  ];

  const [nameSuggestions, setNameSuggestions] = useState([]);
  const [typeSuggestionsList, setTypeSuggestionsList] = useState([]);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    // Filter suggestions based on input
    setNameSuggestions(
      flowerSuggestions.filter((flower) =>
        flower.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setType(value);

    // Filter suggestions based on input
    setTypeSuggestionsList(
      typeSuggestions.filter((type) =>
        type.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const selectNameSuggestion = (suggestion) => {
    setName(suggestion);
    setNameSuggestions([]); // Hide suggestions after selection
  };

  const selectTypeSuggestion = (suggestion) => {
    setType(suggestion);
    setTypeSuggestionsList([]); // Hide suggestions after selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type || !price || !quantity) return;

    addFlower({ name, type, price: parseFloat(price), quantity: parseInt(quantity) });
    setName("");
    setType("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className="flower-form">
        <h2>Add a New Flower</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Flower Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter flower name"
          />
         
          {nameSuggestions.length > 0 && (
            <ul className="suggestions">
              {nameSuggestions.map((suggestion, index) => (
                <li key={index} onClick={() => selectNameSuggestion(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="type">Flower Type</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={handleTypeChange}
            placeholder="Enter flower type"
          />
          
          {typeSuggestionsList.length > 0 && (
            <ul className="suggestions">
              {typeSuggestionsList.map((suggestion, index) => (
                <li key={index} onClick={() => selectTypeSuggestion(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="price" >Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
          />
        </div>

        <button className="addflower">Add Flower</button>

      </form>
    </div>
  );
};

export default FlowerForm;
