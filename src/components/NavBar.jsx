import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import CardWirdget from './CardWirdget'
import { Menu, MenuButton, MenuList, MenuItem, Avatar, Flex, Box, Image, Spacer, Button, Stack, Input,InputGroup, InputLeftElement} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Carrito from './Carrito'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"



const NavBar = () => {
  const [icono, setIcono] = useState (false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
   
<Spacer/>

<Stack direction='row' marginTop={5}>
{icono?<Avatar onClick={() => setIcono(!icono)}ah bg='teal.500'/>:<Avatar onClick={() => setIcono(!icono)} name='' src='https://bit.ly/broken-link'></Avatar>}
</Stack>
<Box w='100px' h='10' marginTop={5} onClick={handleShow}>
  <CardWirdget/></Box>
</Flex>

</Box>
    </div>
    <div>
  <Box w='100%' h='100%'   >
  <Flex justifyContent="center" alignItems="center" gap="5" margin=" 20px 0px" >
    <Nav>
  <Nav.Link  className="NavLink" border="1px">
    Nosotros
  </Nav.Link>
  </Nav>
  <Nav >
  <NavDropdown title="Despensa" id="" color="#B2840B">
  <NavDropdown.Item eventKey="4.1"><Link to={`/categoria/${'Aceite'}`}>Aceites</Link></NavDropdown.Item>
  <NavDropdown.Item eventKey="4.2"><Link to={`/categoria/${'Edulcorante'}`}>Edulcorantes Naturales</Link></NavDropdown.Item>
    <NavDropdown.Item eventKey="4.3"><Link to={`/categoria/${'Conservas'}`}>Conservas</Link></NavDropdown.Item>

  </NavDropdown>
</Nav>
  <Nav paddingX="10px">
  <NavDropdown title="Alimentos Naturales" id=""color="#B2840B">
    <NavDropdown.Item eventKey="4.1">
    <Link to={`/categoria/${'Frutos Secos'}`}>
    Frutos Secos</Link></NavDropdown.Item>
    <NavDropdown.Item eventKey="4.2">
    <Link to={`/categoria/${'Barritas'}`}>Barritas y Snacks</Link>
    </NavDropdown.Item>
    <NavDropdown.Item eventKey="4.3">
    <Link to={`/categoria/${'Mermeladas'}`} >
    Dulces y Mermeladas</Link></NavDropdown.Item>
  </NavDropdown>
</Nav>

  <Nav>
  <NavDropdown title="Bebidas e Infusiones" id="nav-dropdown" color="#B2840B">
    Bebidas e Infusiones
    <NavDropdown.Item eventKey="4.1"><Link to={`/categoria/${'Leche Vegetal'}`}>Leches Vegetales</Link></NavDropdown.Item>
    <NavDropdown.Item eventKey="4.2"><Link to={`/categoria/${'TDM'}`}>Tes del Mundo</Link></NavDropdown.Item>
    <NavDropdown.Item eventKey="4.3"><Link to={`/categoria/${'Jugos'}`}>Jugos</Link></NavDropdown.Item>
  </NavDropdown>
</Nav>
<Nav>
<Nav.Item colorScheme='#B2840B' border="1px" color="#B2840B">
  <Nav.Link> <Link to="/Contacto">
    Contacto </Link>
    </Nav.Link>
    </Nav.Item>
  </Nav>
</Flex> </Box>
<Carrito show={show} handleClose={handleClose}/>
    </div>
    </Box>
  )
 
}

export default NavBar