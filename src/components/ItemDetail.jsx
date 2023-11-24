import React, { useEffect, useState } from 'react'
import { Badge,Center,Box, Card, Stack, Image, CardBody, CardFooter, Heading,ButtonGroup,Button,Text, Grid, Divider, AbsoluteCenter } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'




const ItemDetail = ({productos}) => {

    const {id} = useParams();
    
    const [productosMostrar,setProductosMostrar] = useState([])
    const [count, setCount] = useState(0)
    useEffect(()=>{ 
      const filtrarProductos = productos.filter((producto) => producto.id ==id)
      setProductosMostrar(filtrarProductos)
    })
  return(
    <Box position="relative">
      <Center>
      {productosMostrar.map((producto) =>{
    return (
    <div key={producto.id}>
        <Card maxW='sm'>
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
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
      <ButtonGroup spacing='4'>
        
      <Button colorScheme='teal' variant='outline' onClick={() => count<10?setCount(count+1):setCount(count)}>
      +
    </Button>
    <Box px={4}  fontSize='3xl' layerStyle='selected'>
{count}
    </Box>

    <Button colorScheme='teal' variant='outline' onClick={() => count>0?setCount(count-1):setCount(count)}>
      -
    </Button></ButtonGroup> 
        <Button variant='solid' colorScheme='blue'>
          Comprar
        </Button>
        <Button variant='ghost' colorScheme='blue'fontSize='20px'>
          Agregar al Carrito
        </Button>
        
        </Grid>
    </CardFooter>
  </Card> </div>
  )})}
  </Center>
</Box>)}

export default ItemDetail