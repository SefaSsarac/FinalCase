import React from 'react';

const Payment = ({ totalPrice }) => {
  const handleInvoice = () => {
    alert("Ödeminiz gerçekleşmiştir.");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handleInvoice}>Pay Now</button>
    </div>
  );
};

export default Payment;
