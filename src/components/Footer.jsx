import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Footer';


const Footer = () => {
  return (
    <footer className="bg-secondary text-light  boTTom" >
      <Container  >
        <Row >
          <Col sm="4" >
            <h5>Información de contacto</h5>
            <p>Correo electrónico: mediapalta@gmail.com</p>
            <p>Teléfono: 123-456-7890</p>
          </Col>
          <Col sm="4">
          <h2>Hola</h2>
          </Col>
          <Col sm="4">
            <h5>Enlaces útiles</h5>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Acerca de nosotros</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
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