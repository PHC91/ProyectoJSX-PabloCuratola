import React, { useContext, useEffect, useState } from 'react'
import {Center,Box, Card, Stack, Image, CardBody, CardFooter, Heading,ButtonGroup,Button,Text, Grid, Divider } from '@chakra-ui/react'
import {useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import {CartContext}  from './CartContext'


const ItemDetail = ({productos}) => {
  const {carrito, agregarCarrito} = useContext(CartContext)
  
  const [count, setCount] = useState(1)
  
const {id} =useParams();
  const [productosMostrar,setProductosMostrar] = useState()
  
  useEffect(()=>{ 
    setProductosMostrar(productos)
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
      {/* {productosMostrar.map((producto) =>{ */}
       
    <div key={productos.id}>
        <Card maxW='md' className='m-5'>
    <CardBody>
      <Image
      className="imagen-card"
        src={productos.imagen}
        alt=''
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{productos.titulo}</Heading>
        <Text>
          {productos.categoria}
        </Text>
        <Text>
          {productos.descripcion}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          ${productos.precio}
        </Text>
       
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter >
    <ItemCount count={count} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={()=>{agregarCarrito(productos, count, id)}}/>
    </CardFooter>
  </Card> </div>
  
  </Center>
</Box>)}

export default ItemDetail