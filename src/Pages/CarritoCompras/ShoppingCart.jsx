import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './cart';
import productsData from '../ProductBasedatos';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} />
     
    </div>
  );
};

export default ShoppingCart;
