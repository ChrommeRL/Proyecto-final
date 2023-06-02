import React from 'react';
import ProductItem from './ProductItem'
import productsData from '../ProductBasedatos';

const ProductList = ({ addToCart }) => {
  const productList = productsData.map(product => (
    <ProductItem
      key={product.id}
      product={product}
      addToCart={addToCart}
    />
  ));

  return (
    <div>
      <h2>Productos disponibles:</h2>
      
      <ul>{productList} </ul>

      
    </div>
  );
};

export default ProductList;
