import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form';
import { CartContext } from './CartContext';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2';
import ItemListContainer from './ItemListContainer';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';
const Checkout = () => {

  const navigate = useNavigate();
  const {handleSubmit, register} = useForm()

   const[pedidoId, setPedidoId] = useState("")

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);
  
    const [validated, setValidated] = useState(false);

   const comprar = (data) =>{
    const pedido = {
        cliente: data,
        productos : carrito,
        precio: precioTotal(),
    }
  

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido)
    .then ((doc) =>{
      return (
        Swal.fire({
          title: "Pedido Confirmado",
          text: `El codigo de su pedido es: ${doc.id}`, 
          icon: "success"
        }).then(()=>{
          vaciarCarrito();
          navigate('/');
        })
        )
     
      
    })
  }
  
  
  
  
  if (pedidoId){
    return (
    Swal.fire({
      title: "Pedido Confirmado",
      text: `El codigo de su pedido es: ${pedidoId}`, 
      icon: "success"
    })
    )
  }
    return (
      
    <div>
      <Card className='customBorder' style={{border:"2px solid greenyellow" }}>
      Finalizar Compra</Card>
    <Col  md="12" className=" w-75">
          <Form className=" m-5 p-2" onSubmit={handleSubmit(comprar)} style={{ background:"#a2cf41", borderRadius:"2px" }}>
          <Form.Group className="mb-1" >
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Nombre" {...register("nombre")} />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formGroupEmail" >
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Ingrese Email" {...register("email")}/>
      </Form.Group>
      <Form.Group className="mb-4" >
        <Form.Label></Form.Label>
        <Form.Control type="number" placeholder="Telefono" {...register("telefono")} />
      </Form.Group>  
        <textarea class="formcontrol" type="text" placeholder="Mensaje" style={{height:"100px", width:"100%"}} {...register("mensaje")}>
      </textarea>
      <Container className="d-flex justify-content-end">
      <Button type="submit" >Comprar</Button>
      </Container>
    </Form></Col></div>
  )
}

export default Checkout