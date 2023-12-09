import { Button, Image, Badge } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const CardWirdget = () => {
  const {cantidadCarrito} = useContext(CartContext)

  return (
    <div>
      <Button bg="none" variant="none" mt="1">
       <Image boxSize='40px'
    objectFit='cover'src={`https://cdn-icons-png.flaticon.com/512/2611/2611181.png`}>
  </Image>
        <div className='mb-5'>
        <Badge  colorScheme='green' borderRadius="xl" fontSize="1em">
          {cantidadCarrito()}
          </Badge></div>
      </Button>
    </div>  
    
  )
}

export default CardWirdget