import React from "react";
import { Link } from 'react-router-dom';
import '../commons/styles/navegador.css'



const Navegador = ()=>{

    return(
        <>
            <nav>
                <Link to={"/"}>
                    <h2>Inicio</h2>
                </Link>

                <Link to={"/api"}>
                    <h2>productos de la tienda</h2>
                </Link> 

                <Link to={"/informaciongeneral"}>
                    <h2>Ingresos y productos</h2>
                </Link>
               
            </nav>
        </>
    )
};
export default Navegador;