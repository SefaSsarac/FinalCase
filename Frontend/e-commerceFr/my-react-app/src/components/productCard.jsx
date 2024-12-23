import React from 'react';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    // Sepete ekleme işlemi
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
