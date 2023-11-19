import React from 'react'
import { Card, Stack, Image, Card, CardBody, CardFooter, Heading,Divider,ButtonGroup,Button,Text, Grid } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({titulo, descripcion, id, categoria, imagen}) => {
  return (
    <div>
        <Card maxW='sm'>
  <CardBody>
    <Image
    className="imagen-card"
      src={imagen}
      alt=''
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{titulo}</Heading>
      <Text>
        {categoria}
      </Text>
      <Text>
        {descripcion}
      </Text>
      <Button>
        <Link to={`/producto/${id}`}>
        Detalles
        </Link>
      </Button>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter >
      <Button variant='solid' colorScheme='blue'>
        <Link to={`/item/${id}`}>
        Detalle
        </Link>
      </Button> 
  </CardFooter>
</Card> 
    </div>
  )
}

export default Item