import React from "react";

import Navegador from "./assets/commons/Navegador";
import Home from "./Pages/Home";
import ProductList from "./Pages/juegos";
import Error from "./Pages/Error";
import Header from './assets/commons/header';
import Footer from './assets/commons/Footer';

import './App.css'
import Header from './assets/commons/header'
import Footer from './assets/commons/Footer'
import Navegador from './assets/commons/Navegador'
import Home from './Pages/Home'


export const App = ()=> {

  return (
    <>
        <Header/>
        <Navegador/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Juegos" element = {<ProductList/>}/>
          <Route path = "*" element = {<Error/>}/>
       </Routes>
        <Home/>
        <Footer/>
        

    </>
  )
}

