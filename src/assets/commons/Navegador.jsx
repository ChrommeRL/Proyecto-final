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
                    <h2>api</h2>
                </Link> 

                <Link to={"/carrito"}>
                    <h2>Carrito</h2>
                </Link>
               
            </nav>
        </>
    )
};
export default Navegador;