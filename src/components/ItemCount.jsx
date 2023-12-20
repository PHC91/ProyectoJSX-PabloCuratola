import React from 'react'
import { Grid,Box, Button, ButtonGroup } from '@chakra-ui/react'

const ItemCount = ({count, handleSumar, handleRestar, handleAgregar}) => {

  return (
    <div>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
      <ButtonGroup spacing='4'>
        
      <Button colorScheme='teal' variant='outline' onClick={handleSumar }>
      +
    </Button>
    <Box px={4}  fontSize='3xl' layerStyle='selected'>
{count}
    </Box>

    <Button colorScheme='teal' variant='outline' onClick={handleRestar}>
      -
    </Button></ButtonGroup> 
        <Button variant='ghost' colorScheme='blue'fontSize='20px' onClick={handleAgregar}>
          Agregar al Carrito
        </Button>
        
        </Grid>
    </div>
  )
}

export default ItemCount