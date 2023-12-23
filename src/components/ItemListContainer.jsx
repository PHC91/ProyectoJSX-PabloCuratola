import { Badge, Stack, Image, Card, CardBody, CardFooter, Heading,Divider,ButtonGroup,Button,Text, Grid, GridItem, Spacer, Box, Center } from '@chakra-ui/react'
import  { useEffect } from 'react'
import { useState } from 'react'
import "./css/itemList.css"
import { Link, useParams } from 'react-router-dom'
import Carrusel from "./Carrusel"
import Suscripcion from './Suscripcion' 
import { collection, getDocs } from 'firebase/firestore'
import {db}  from '../firebase/firebase'
import "../components/css/itemList.css"

const ItemListContainer = () => {
const {categoria} = useParams()



const [productosMostrar,setProductosMostrar] = useState([])



useEffect(() => {
const productos = collection(db, "productos"); 
getDocs(productos)
.then ((resp) => {
  console.log("cat then "+ categoria)
  //console.log(resp.docs[0].data())
  if(categoria!=undefined){
    setProductosMostrar(
      resp.docs.map((doc)=>{
        
        return{
          ...doc.data(), id: doc.id
        }
      }).filter((p)=>p.categoria == categoria)
    )
  }else{
    setProductosMostrar(
      resp.docs.map((doc)=>{
        
        return{
          ...doc.data(), id: doc.id
        }
      })
    )
  }

 
}
) 
},[categoria])

  return (

<Box position="relative">

<Carrusel/>

  <Center>
  
<Grid templateColumns='repeat(3, 1fr)' gap={6} >
  {
    productosMostrar.map((productos)=>{
      return(
        <GridItem w='auto' h='auto'  key={productos.id}>
      
          <Card maxW='sm'>
  <CardBody className='foNt'>
    <Image
    className="imagen-card"
      src={productos.imagen}
      alt=''
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{productos.titulo}</Heading>
      <Text>
        {productos.descripcion}
      </Text>

    </Stack>
  </CardBody>
  <Divider />
  <CardFooter >
      <Button variant='ghost' colorScheme='blue'fontSize='20px'><Link to={`/producto/${productos.id}`}>
        Detalle
        </Link>
      </Button>
  </CardFooter>
</Card>  </GridItem>
        
      )
    })
  }</Grid>
  </Center>
<Suscripcion/>
</Box>
)
}

export default ItemListContainer