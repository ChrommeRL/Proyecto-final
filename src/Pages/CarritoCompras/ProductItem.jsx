import React from 'react';


const ProductItem = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <li>
      {product.juego} - ${product.precio}
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </li>
  );
};

export default ProductItem;
