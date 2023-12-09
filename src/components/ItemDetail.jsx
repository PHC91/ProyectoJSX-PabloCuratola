import React, { useContext, useEffect, useState } from 'react'
import {Center,Box, Card, Stack, Image, CardBody, CardFooter, Heading,ButtonGroup,Button,Text, Grid, Divider } from '@chakra-ui/react'
import {useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import {CartContext}  from './CartContext'


const ItemDetail = ({productos}) => {
  const {carrito, agregarCarrito} = useContext(CartContext)
  
  const [count, setCount] = useState(1)
  
  const {id} = useParams();
  const [productosMostrar,setProductosMostrar] = useState([])
  
  useEffect(()=>{ 
    const filtrarProductos = productos.filter((producto) => producto.id ==id)
    setProductosMostrar(filtrarProductos)
  })
  
  
  
  const handleSumar = () => {
    count<10?setCount(count+1):setCount(count)
  }
  
  const handleRestar = () => {
    count>0?setCount(count-1):setCount(count)
  }
  
 
    
  
    return(
      <Box position="relative">
      <Center>
      {productosMostrar.map((producto) =>{
        return (
    <div key={producto.id}>
        <Card maxW='md' className='m-5'>
    <CardBody>
      <Image
      className="imagen-card"
        src={producto.imagen}
        alt=''
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{producto.titulo}</Heading>
        <Text>
          {producto.categoria}
        </Text>
        <Text>
          {producto.descripcion}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          ${producto.precio}
        </Text>
       
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter >
    <ItemCount count={count} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={()=>{agregarCarrito(producto, count)}}/>
    </CardFooter>
  </Card> </div>
  )})}
  </Center>
</Box>)}

export default ItemDetail