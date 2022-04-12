import { Carousel } from "react-bootstrap";
import img1 from "../../assets/lp_imgs/p1.jpg";
import img2 from "../../assets/lp_imgs/p2.jpg";
import img3 from "../../assets/lp_imgs/lalostyle.jpg";
import img4 from "../../assets/lp_imgs/bosque.jpg";
import img5 from "../../assets/lp_imgs/celebrate.jpg";
import img6 from "../../assets/lp_imgs/spartan.png";
import img7 from "../../assets/lp_imgs/tripping.jpg";

{
  /*Este componente aparece en la página de inicio y contiene las imagenes
representativas del negocio, con una pequeña descripción */
}

const Carrousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>Carrera Power Ade</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Entrenamiento en el centro recreativo "El Arenal"</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Yo seré tu entrenador</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Third slide" />
        <Carousel.Caption>
          <h3>Entrenamiento en el bosque</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="Third slide" />
        <Carousel.Caption>
          <h3>Convivio</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="Third slide" />
        <Carousel.Caption>
          <h3>Yo seré tu entrenador</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img7} alt="Third slide" />
        <Carousel.Caption>
          <h3>Carrera</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carrousel;
