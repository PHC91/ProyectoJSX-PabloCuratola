import { Divider } from "@chakra-ui/react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Carrusel from "./components/Carrusel"
import Cart from "./components/Cart"
import React from "react"
import About from "./components/About"
import ItemDetailContainer from "./components/ItemDetailContainer"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/Home" element ={<Home/>}/>
          <Route exact path="/About" element={<About/>}/> 
          <Route exact path="/Cart" element={<Cart/>}/> 
          <Route exact path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route exact path="/" element={<ItemListContainer/>}/>
      </Routes>
     
      
      </BrowserRouter>   
      </div>
  )
}

export default App