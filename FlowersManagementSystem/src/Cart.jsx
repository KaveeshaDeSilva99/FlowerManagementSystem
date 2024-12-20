import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, flower) => sum + flower.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((flower) => (
          <div className="flower-card" key={flower.id}>
            <p>
              {flower.name} - ${flower.price}
            </p>
            <button onClick={() => removeFromCart(flower.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
