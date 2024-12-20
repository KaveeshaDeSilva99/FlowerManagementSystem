import React, { useState } from "react";
import FlowerForm from "./FlowerForm";
import FlowerList from "./FlowerList";
import Cart from "./Cart";
import "./App.css";
import flower1Image from "./assets/flower1.jpg";

function App() {
  const [flowers, setFlowers] = useState([
    { id: 1, name: "Rose", type: "Flower", price: 10, quantity: 50 },
    { id: 2, name: "Tulip", type: "Flower", price: 15, quantity: 30 },
    { id: 3, name: "Sunflower", type: "Flower", price: 8, quantity: 5 }
  ]);

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");

  const addFlower = (flower) => {
    setFlowers([...flowers, { id: flowers.length + 1, ...flower }]);
  };

  const updateFlower = (updatedFlower) => {
    setFlowers(flowers.map(flower => flower.id === updatedFlower.id ? updatedFlower : flower));
  };

  const deleteFlower = (id) => {
    setFlowers(flowers.filter(flower => flower.id !== id));
  };

  const addToCart = (flower) => {
    setCart([...cart, flower]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(flower => flower.id !== id));
  };

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSort = (e) => setSort(e.target.value);

  const filteredAndSortedFlowers = flowers
    .filter(flower => flower.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "price") return a.price - b.price;
      if (sort === "quantity") return a.quantity - b.quantity;
      return 0;
    });

  return (
    <div className="App">
      
      <div className="flower-header">
        <img src={flower1Image} alt="Flower" className="flower-image" />
        <h2>Flower Management System</h2>
      
      </div>
      
      
      
      <div className="controls">
        <input
          type="text"
          placeholder="Search flowers..."
          value={search}
          onChange={handleSearch}
        />
        <select value={sort} onChange={handleSort}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
          <option value="quantity">Sort by Quantity</option>
        </select>
      </div>
      <FlowerForm addFlower={addFlower} />
      <FlowerList
        flowers={filteredAndSortedFlowers}
        deleteFlower={deleteFlower}
        updateFlower={updateFlower}
        addToCart={addToCart}
      />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
