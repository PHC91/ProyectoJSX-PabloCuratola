import { Divider } from "@chakra-ui/react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Carrusel from "./components/Carrusel"
import React, { useEffect, useState } from "react"
import About from "./components/About"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import Contacto from "./components/Contacto"
import { CartContext } from "./components/CartContext"
import Carrito from "./components/Carrito"
import CardWirdget from "./components/CardWirdget"
import Checkout from "./components/Checkout"
import { useToast } from '@chakra-ui/react'


const App = () => {
  
  const carritoStorage = JSON.parse(localStorage.getItem("carrito")) || [];
  const [carrito, setCarrito] = useState(carritoStorage);
  const toast = useToast()

  const agregarCarrito = (producto, count) => {

    const itemAgregado ={...producto,count};
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = carrito.find((producto) => producto.id === itemAgregado.id);
    if(estaEnElCarrito){
    estaEnElCarrito.count = estaEnElCarrito.count + count;
  } else {
    nuevoCarrito.push(itemAgregado)
  }
  
  setCarrito(nuevoCarrito);
  toast({
    title: 'Producto Agregado',
    description: `Has agregado el producto ${producto.titulo}. \n Cantidad: ${itemAgregado.count}`,
    status: 'success',
    position: 'bottom-right',
    duration: 9000,
    isClosable: true,
  })
}

 const cantidadCarrito = () =>{
  return carrito.reduce((acc,prod) => acc + prod.count,0)
 }

const precioTotal = () => {
  return carrito.reduce ((acc,prod) => acc + prod.precio * prod.count,0)
}

const eliminarProducto = (idProducto) => {
  const nuevoCarrito = [...carrito];
  let index = nuevoCarrito.findIndex((prod) =>prod.id == idProducto)
  nuevoCarrito.splice(index,1)
  setCarrito(nuevoCarrito);
}

const vaciarCarrito = () =>{
    setCarrito([]);
}

useEffect(() => {
  
  localStorage.setItem("carrito",JSON.stringify(carrito))
}, [carrito])


  return (
    <div>
    <CartContext.Provider value={{carrito, agregarCarrito, cantidadCarrito, precioTotal, vaciarCarrito, eliminarProducto}}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/Home" element ={<Home/>}/>
          <Route exact path="/About" element={<About/>}/> 
          <Route exact path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/categoria/" element={<ItemListContainer/>}/>
          <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/Contacto" element={<Contacto/>}/>
          <Route exact path="/Carrito" element={<Carrito/>}/>
          <Route exact path="/CardWirdget" element={<CardWirdget/>}/>
          <Route exact path="/Checkout" element={<Checkout/>}/>  
      </Routes>
  
     <Footer/>
      
      </BrowserRouter>   
    </CartContext.Provider>
      </div>
  )
}

export default App