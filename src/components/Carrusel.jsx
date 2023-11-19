import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="./carrusel.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="carrusel2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="carrusel3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;