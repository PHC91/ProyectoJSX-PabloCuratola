import React from 'react'
import CardWirdget from './CardWirdget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Image, Spacer, Button, Stack } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
      <Box bg='#92DA0B'>
<Flex>
  <Box w='100px' h='auto'>
  <Image boxSize='80px'
    objectFit='cover' src={`https://cdn-icons-png.flaticon.com/512/6569/6569629.png`}  ></Image></Box>
    <Spacer/>
    <Stack direction={'row'} spacing={4}>
  <Box w='auto' h='10' marginTop={3} >
  <Menu>
  <MenuButton as={Button} >
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
  <MenuButton as={Button} >
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
  <MenuButton as={Button}>
    Bebidas e Infusiones
  </MenuButton>
  <MenuList>
    <MenuItem>Leches Vegetales</MenuItem>
    <MenuItem>Tes del Mundo</MenuItem>
    <MenuItem>Jugos</MenuItem>
  </MenuList>
</Menu></Box>
</Stack>
<Spacer/>
<Box w='100px' h='10' marginTop={5}>
  <CardWirdget/></Box>
</Flex>
</Box>
    </div>
  )
}

export default NavBar