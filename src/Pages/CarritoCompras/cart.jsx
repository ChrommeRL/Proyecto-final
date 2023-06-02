import React from 'react';


const Cart = ({ cartItems }) => {
  const cartItemList = cartItems.map(item => (
    <li key={item.id}>
      {item.juego} - ${item.precio} | Stock {item.stock} | {item.plataforma}
    </li>
  ));

  return (
    <div>
      <h2>Carrito de compras:</h2>
      <ul>{cartItemList}</ul>
      
    </div>
  );
};

export default Cart;
