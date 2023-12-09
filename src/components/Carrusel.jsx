import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="slider1.jpg"
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
          src="slider2.jpg"
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
          src="slider3.jpg"
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