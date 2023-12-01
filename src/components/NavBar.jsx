import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import CardWirdget from './CardWirdget'
import { Menu, MenuButton, MenuList, MenuItem, Avatar, Flex, Box, Image, Spacer, Button, Stack, Input,InputGroup, InputLeftElement} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'




const NavBar = () => {
  const [icono, setIcono] = useState (false)
  return (


    <Box>
    <div>
      <Box bg='#92DA0B'>
<Flex>
  <Box w='100px' h='auto'>
    <Link to={"/"}>
  <Image boxSize='80px'
    objectFit='cover' src="/palta1.png"  ></Image>
    </Link> 
    </Box>
    <Spacer/>
    <InputGroup htmlSize={4} width='25%' marginTop={5}>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.300' />
    </InputLeftElement>
    <Input placeholder='' />
  </InputGroup>
    {/* <Stack direction={'row'} spacing={4}>
  <Box w='auto' h='10' marginTop={3} >
  <Menu >
  <MenuButton as={Button} colorScheme='whiteAlpha' border="1px" color="#B2840B">
    Despensa
  </MenuButton>
  <MenuList>
    <MenuItem>Aceites</MenuItem>
    <MenuItem>Edulcorantes Naturales</MenuItem>
    <MenuItem>Conservas</MenuItem>
  </MenuList>
</Menu></Box>
<Box w='auto' h='10' marginTop={3}>
  <Menu paddingX="10px">
  <MenuButton as={Button} colorScheme='whiteAlpha' border="1px" color="#B2840B">
    Alimentos Naturales
  </MenuButton>
  <MenuList>
    <MenuItem>Frutos Secos</MenuItem>
    <MenuItem>Barritas y Snacks</MenuItem>
    <MenuItem>Dulces y Mermeladas</MenuItem>
  </MenuList>
</Menu></Box>
<Box w='auto' h='10' marginTop={3}>
  <Menu>
  <MenuButton as={Button} colorScheme="whiteAlpha" border="1px" color="#B2840B">
    Bebidas e Infusiones
  </MenuButton>
  <MenuList>
    <MenuItem>Leches Vegetales</MenuItem>
    <MenuItem>Tes del Mundo</MenuItem>
    <MenuItem>Jugos</MenuItem>
  </MenuList>
</Menu></Box>
</Stack> */}
<Spacer/>

<Stack direction='row' marginTop={5}>
{icono?<Avatar onClick={() => setIcono(!icono)}ah bg='teal.500'/>:<Avatar onClick={() => setIcono(!icono)} name='' src='https://bit.ly/broken-link'></Avatar>}
</Stack>
<Box w='100px' h='10' marginTop={5}><Link to={"/Cart"}>
  <CardWirdget/></Link></Box>
</Flex>

</Box>
    </div>
    <div>
  <Box w='100%' h='100%'   >
  <Flex justifyContent="center" alignItems="center" gap="5" margin=" 20px 0px" >
  <Button as={Button} colorScheme='whiteAlpha' border="1px" color="#B2840B">
    Nosotros
  </Button>
  <Menu >
  <MenuButton as={Button} colorScheme='whiteAlpha' border="1px" color="#B2840B">
    Despensa
  </MenuButton>
  <MenuList>
    <MenuItem><Link to={`/categoria/${'Aceite'}`}>Aceites</Link></MenuItem>
    <MenuItem><Link to={`/categoria/${'Edulcorante'}`}>Edulcorantes Naturales</Link></MenuItem>
    <MenuItem><Link to={`/categoria/${'Conservas'}`}>Conservas</Link></MenuItem>
  </MenuList>
</Menu>
  <Menu paddingX="10px">
  <MenuButton as={Button} colorScheme='whiteAlpha' border="1px" color="#B2840B">
    Alimentos Naturales
  </MenuButton>
  <MenuList>
    <MenuItem>
    <Link to={`/categoria/${'Frutos Secos'}`}>
    Frutos Secos</Link></MenuItem>
    <MenuItem>
    <Link to={`/categoria/${'Barritas'}`}>Barritas y Snacks</Link></MenuItem>
    <MenuItem>
    <Link to={`/categoria/${'Mermeladas'}`} >
    Dulces y Mermeladas</Link></MenuItem>
  </MenuList>
</Menu>

  <Menu>
  <MenuButton as={Button} colorScheme="whiteAlpha" border="1px" color="#B2840B">
    Bebidas e Infusiones
  </MenuButton>
  <MenuList>
    <MenuItem><Link to={`/categoria/${'Leche Vegetal'}`}>Leches Vegetales</Link></MenuItem>
    <MenuItem><Link to={`/categoria/${'TDM'}`}>Tes del Mundo</Link></MenuItem>
    <MenuItem><Link to={`/categoria/${'Jugos'}`}>Jugos</Link></MenuItem>
  </MenuList>
</Menu>
<Button as={Button} colorScheme='whiteAlpha' border="1px" color="#B2840B">
    Contacto
  </Button>
</Flex> </Box>

    </div>
    </Box>
  )
 
}

export default NavBar