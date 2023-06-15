import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Pages/StylesPages/IngresosTotales.css'

const IngresosTotales = () => {
  const [totalingreso, setTotalingreso] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDatosIngreso();
  }, []);

  const fetchDatosIngreso = async () => {
    try {
      const traerproductos = await axios.get('https://fakestoreapi.com/products');
      const traerordenes = await axios.get('https://fakestoreapi.com/carts');

      const productos = traerproductos.data;
      const ordenes = traerordenes.data.reduce((acc, cart) => {
        return [...acc, ...cart.products];
      }, []);

      const ingresos = calcularIngresos(productos, ordenes);
      setTotalingreso(ingresos);
    } catch (error) {
      setError('Error al obtener los datos de ingreso');
    }
  };

  const calcularIngresos = (productos, ordenes) => {
    let total = 0;
    ordenes.forEach((item) => {
      const product = productos.find((p) => p.id === item.productId);
      if (product) {
        const precio = parseFloat(product.price);
        const cantidad = parseInt(item.quantity);
        total += precio * cantidad;
      }
    });
    return total.toFixed(2);
  };

  return (
    <section>
      {error ? (
        <p>{error}</p>
      ) : totalingreso ? (
        <div className="total">
          <p>Ingresos: ${totalingreso}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </section>
  );
};

export default IngresosTotales;
