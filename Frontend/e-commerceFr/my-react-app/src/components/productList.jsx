import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/productService.jsx';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
