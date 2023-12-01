import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from './Loader'


const ItemDetailContainer = () => {

const productos =[
  {id: 1, titulo: "Aceite Girasol", descripcion: "Aceite Natural a base de Girasol", precio: 300, categoria: "Aceite", imagen: "/girasol.jpeg"},
  {id: 2, titulo: "Aceite de Oliva", descripcion: "Aceite Natural a base de Oliva", precio: 3000, categoria: "Aceite", imagen: "/oliva.jpeg"},
  {id: 4, titulo: "Almendras", descripcion: "Almendras", precio: 200, categoria: "Frutos Secos", imagen: "/almendra.jpeg"},
  {id: 5, titulo: "Nueces", descripcion: "Nueces", precio: 100, categoria: "Frutos Secos", imagen: "/nueces.jpeg"},
  {id: 6, titulo: "Castaña de Caju", descripcion: "Castañas de Caju de Brasil", precio: 150, categoria: "Frutos Secos", imagen: "/caju.jpeg"},
  {id: 7, titulo: "Barritas Integra", descripcion: "Barritas sin conservantes", precio: 650, categoria: "Barritas", imagen: "/integra.jpeg"},
  {id: 8, titulo: "Barritas Felfort", descripcion: "Barritas marca Felfort", precio: 300, categoria: "Barritas", imagen: "/felfort.jpeg"},
  {id: 9, titulo: "Edulcorante Chuker", descripcion: "Edulcorante", precio: 300, categoria: "Edulcorante", imagen: "/edulcorante1.jpeg"},
  {id: 10, titulo: "Edulcorante ", descripcion: "Edulcorante", precio: 200, categoria: "Edulcorante", imagen: "/edulcorante2.jpeg"},
  {id: 11, titulo: "Leche Serenisima Descremada", descripcion: "Leche en Caja", precio: 600, categoria: "Leche Vegetal", imagen: "/serenisima.jpeg"},
  {id: 12, titulo: "Leches Silk", descripcion: "Leche Vegetal", precio: 700, categoria: "Leche Vegetal", imagen: "/silk.jpeg"},
  {id: 13, titulo: "Te hebras Negro", descripcion: "Te importa de Japon", precio: 700, categoria: "TDM", imagen: "/hebrasNegro.jpeg"},
  {id: 14, titutlo: "Te hebras Rojo", descripcion: "Te importado de China", precio: 600, categoria: "TDM", imagen: "/hebrasRojo.jpeg"},
  {id: 15, titutlo: "Pepinos", descripcion: "Pepinos en frasco", precio: 1200, categoria: "Conservas", imagen: "/pepino.jpeg"},
  {id: 16, titutlo: "Aceitunas Nucette", descripcion: "Calidad Premium", precio: 650, categoria: "Conservas", imagen: "/nucete.jpeg"},
  {id: 17, titutlo: "Jugo Natural", descripcion: "", precio: 600, categoria: "Jugos", imagen: "/jugos1.jpeg"},
  {id: 18, titutlo: "Jugo Natural a base de te", descripcion: "", precio: 500, categoria: "Jugos", imagen: "/jugos2.jpeg"},
  {id: 19, titutlo: "Mermelada Frutos Rojos", descripcion: "Mermelada 100% Natural", precio: 1500, categoria: "Mermeladas", imagen: "/mermelada1.jpeg"},
  {id: 20, titutlo: "Memelada Naranja", descripcion: "Mermelada 100% Natural", precio: 1500, categoria: "Mermeladas", imagen: "/mermelada2.jpeg"}
]

const [productosMostrar,setProductosMostrar] = useState([])
const[loading, setLoading] = useState(true)

useEffect(()=> {
  const id = setTimeout(() =>{
    setProductosMostrar([productos])
    setLoading(false)
  }, 5000);
   return () =>{
    clearTimeout(id);
  }
})

/* const mostrarProductos = new Promise((resolve, reject) => {
  if (productos.length > 0){
    setTimeout(()=>{
      resolve(productos)
  
    },5000)
  } else {
    reject("No se encontraron productos")
  }
})

mostrarProductos
.then((resultado) =>{
  console.log(resultado)
})

.catch((error) =>{
  console.log(error)
}) */
  return (
    <div>
      {loading?<Loader/>:<ItemDetail productos = {productos}/>}
    </div>
  )
}

export default ItemDetailContainer