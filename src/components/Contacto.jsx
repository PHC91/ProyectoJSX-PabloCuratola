import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./css/Contacto.css";
import { Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';



function Contacto() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Row>
      <Card className='customBorder' style={{border:"2px solid greenyellow" }}>
      Contacto</Card>
        <Col>
    <Container>
        <Row className='mt-5 mb-5'>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 w-75"

    >
      <Tab eventKey="home" title="Contacto">
        <Row>
          <Col>
          <Form className=" m-5 p-5" style={{ background:"#a2cf41", borderRadius:"10px" }}>
          <Form.Group className="mb-1" >
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Ingrese Email" />
      </Form.Group>
      <Form.Group className="mb-4" >
        <Form.Label></Form.Label>
        <Form.Control type="number" placeholder="Telefono" />
      </Form.Group>
    
        <Form.Label></Form.Label>
        <textarea class="formcontrol" type="text" placeholder="Mensaje" style={{height:"100px", width:"100%"}}>
      </textarea>
      <Container className="d-flex justify-content-end">
      <Button type="submit" >Enviar</Button>
      </Container>
    </Form>
          </Col>
          <Col className='m-5'>
          <Col className="mb-3">
          <h5>Atencion Telefonica</h5>
          45454545
          </Col>
          <Col className="mb-3">
          <h5>MediaPalta te lee</h5>
          mediapalta@gmail.com
          </Col>
          <Col className="mb-3">
          <h4>Trabaja con Nosotros</h4>
          RrhhMediaPalta@gmail.com
          </Col>
          <Col className="mb-3">
          <h4>Ubicacion</h4>
          Ciudad Autonoma de Buenos Aires, Argentina
          </Col>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="profile" title="Trabaja en Media Palta">
        <Col md="8">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            defaultValue=""
          />
        
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            defaultValue=""
          />
          
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingresa un email valido ej: juan@gmail.com
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Ingresa una Ciudad valida
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Localidad</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Ingresa una Localidad Valida
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Ingresa un Codigo Postal Valido
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Acepta Terminos y Condiciones"
          feedback="Debe aceptar los terminos antes de avanzar"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
    </Col>
      </Tab>
      
    </Tabs>
    </Row>
    </Container>
    </Col>
    </Row>
  );
}

export default Contacto;