import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


const Carrito = ({show, handleClose}) => {
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);
  
  const handleVaciar = () =>{
    vaciarCarrito();
  }
  
  
    return (
        
<div
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {
            carrito.map((prod) => (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.imagen} />
      <Card.Body>
        <Card.Title>{prod.titulo}</Card.Title>
        <Card.Text>
          {prod.descripcion}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cantidad: {prod.count}</ListGroup.Item>
        <ListGroup.Item>Precio por unidad: ${prod.precio}</ListGroup.Item>
        <ListGroup.Item>Precio Total: ${prod.precio*prod.count}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-end">
      <Button  variant="danger" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></Button>
       
      </Card.Body>
        </Card>))}
    
          {
         carrito.length > 0 ?
        <><h2 className='mt-4'>Precio Total: ${precioTotal()}</h2><div class="d-flex justify-content-end"> <Button  variant="none"  onClick={handleVaciar}>Vaciar</Button></div></>:
    <h2>El carrito esta vacio</h2>
    }
     
</Modal.Body>

        <Modal.Footer>
           <Container fluid>
            <Col> 
        <Button className="m-2 w-100" variant="success" onClick={handleClose}>Iniciar Compra</Button>
        </Col>
        <Col>
        <Button variant='none' className='w-100' onClick={handleClose}>
Ver mas productos
          </Button>
          </Col>
          </Container>
        </Modal.Footer>
      </Modal>
    </div>
)}
   


export default Carrito