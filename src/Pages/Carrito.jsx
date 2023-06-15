import React, { useState, useEffect } from "react";
import '../Pages/StylesPages/carrito.css'

function API() {
  const url = 'https://fakestoreapi.com/products';
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      const responseJSON = await response.json();
      setTodos(responseJSON);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="product-container">
      <center>
        <div className="product-grid">
          {todos.map((todo) => (
            <div key={todo.id} className="product-item">
              <h2><img src={todo.image} alt={todo.title} /></h2>
              <h2>{todo.title}</h2>
              <p>${todo.price}</p>
              <p>{todo.description}</p>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}

export default API;

