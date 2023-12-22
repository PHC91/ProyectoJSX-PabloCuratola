import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Footer';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-secondary text-light  boTTom" >
      <Container  >
        <Row >
        <Col sm="3" className='mt-4' >
            <h5>Media Palta</h5>
            <p>Los ofrecemos productos de Excelente Calidad</p>
        
          </Col>
          <Col sm="3" className='mt-4'>
            <h5>Categorias</h5>
            <Link to={"/"}><p>Inicio</p></Link>
            <Link to={"/About"}><p>Nosotros</p></Link>
            <Link to={"/"}><p>Productos</p></Link>
            <Link to={"/Contacto"}><p>Contacto</p></Link>
          </Col>
          <Col sm="3" className='mt-4'>
          <h5>Información de contacto</h5>
            <p>Correo electrónico: mediapalta@gmail.com</p>
            <p>Teléfono: 123-456-7890</p>
          </Col>
          <Col sm="3" className='mt-4 '>
            <h5>Sigamos Conectados</h5>
            
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; Copyright  2023 Media Palta. / Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;