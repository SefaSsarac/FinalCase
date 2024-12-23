import React from 'react';

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name} - ${item.price} x {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
