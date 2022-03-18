import { Carousel } from "react-bootstrap";

const Carrousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/274884265_4789403461155573_3591756592765545757_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGtQe9iQmL_NJzGtCYMDnJvdgwWw4rORW92DBbDis5Fb-qwAUObWi-akRYubuDGr3WUeIWFh7tjVDKMk3sAfX29&_nc_ohc=BXDSi6qQPjEAX-gcA3l&_nc_ht=scontent.fmex31-1.fna&oh=00_AT_pfgTH5kpgConDoQLBu0FR95wNzOXO25R4CB6LtUCDUg&oe=62371978"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4720827/pexels-photo-4720827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carrousel;
