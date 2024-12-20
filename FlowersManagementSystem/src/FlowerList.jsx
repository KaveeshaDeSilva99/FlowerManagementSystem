import React, { useState } from "react";

const FlowerList = ({ flowers, deleteFlower, updateFlower, addToCart }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentFlower, setCurrentFlower] = useState(null);

  const handleEdit = (flower) => {
    setIsEditing(true);
    setCurrentFlower(flower);
  };

  const handleUpdate = () => {
    updateFlower(currentFlower);
    setIsEditing(false);
    setCurrentFlower(null);
  };

  return (
    <div className="flower-list">
      <h2>Flowers List</h2>
      {flowers.map((flower) => (
        <div
          className={`flower-card ${flower.quantity < 10 ? "low-stock" : ""}`}
          key={flower.id}
        >
          <p>
            <strong>{flower.name}</strong> - {flower.type} - ${flower.price} -{" "}
            {flower.quantity} in stock
          </p>
          <div>
            <button className="add-to-cart" onClick={() => addToCart(flower)}>
              Add to Cart
            </button>
            <button className="delete" onClick={() => deleteFlower(flower.id)}>
              Delete
            </button>
            <button className="edit" onClick={() => handleEdit(flower)}>
              Edit
            </button>
          </div>
        </div>
      ))}

      {isEditing && (
        <div className="edit-form">
          <h3>Edit Flower</h3>
          <input
            type="text"
            value={currentFlower.name}
            onChange={(e) => setCurrentFlower({ ...currentFlower, name: e.target.value })}
          />
          <input
            type="text"
            value={currentFlower.type}
            onChange={(e) => setCurrentFlower({ ...currentFlower, type: e.target.value })}
          />
          <input
            type="number"
            value={currentFlower.price}
            onChange={(e) => setCurrentFlower({ ...currentFlower, price: parseFloat(e.target.value) })}
          />
          <input
            type="number"
            value={currentFlower.quantity}
            onChange={(e) => setCurrentFlower({ ...currentFlower, quantity: parseInt(e.target.value) })}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
};

export default FlowerList;
