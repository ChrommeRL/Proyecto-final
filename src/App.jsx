import React from "react";
import './App.css'
import Header from './assets/commons/header'
import Footer from './assets/commons/Footer'
import Navegador from './assets/commons/Navegador'
import Home from './Pages/Home'
import Error from './Pages/Error'


import { Routes, Route} from 'react-router-dom';
import API from "./Pages/Carrito";
import IngresosTotales from "./Pages/IngresosTotales";




export const App = ()=> {

  return (
    <>
        <Header/>
        <Navegador/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/informaciongeneral" element = {<IngresosTotales/>}/>
          <Route path = "*" element = {<Error/>}/>
          <Route path = "/api" element = {<API/>}/>
          
       </Routes>
      
       
        <Footer/>
        

    </>
  )
}

