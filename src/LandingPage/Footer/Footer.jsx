import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <div>
      {/*Dirección y mapa del establecimiento */}
      <section className="sticky">
        <div className="box">
          <h4>
            Ubicación
            <div className="lineA">
              <span></span>
            </div>
          </h4>
          <br />
          <h5>
            Francisco Javier Mina 6-C, San Miguel Ajusco,
            <br />
            Tlalpan,14710, CDMX.
          </h5>
          <figure className="img">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3767.3948564123707!2d-99.2039354!3d19.2216158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfded065ba629%3A0x380dc5233ad5741!2sFrancisco%20Javier%20Mina%206%2C%20San%20Miguel%20Ajusco%2C%20Tlalpan%2C%2014710%20San%20Miguel%20Ajusco%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1648579560283!5m2!1ses-419!2smx"></iframe>
          </figure>
        </div>
        {/*Fechas y horarios*/}
        <div className="box3">
          <h4>
            Horarios
            <div className="line">
              <span></span>
            </div>
          </h4>
          <br />
          <h5>Lunes a viernes</h5>
          <h6>06:00-06:50</h6>
          <h6>07:00-08:00</h6>
          <h6>08:10-09:10</h6>
          <h6>18:00-19:00</h6>
          <h6>19:10-20:10</h6>
          <h6>20:10-21:20</h6>
        </div>
        {/*Contacto y redes sociales */}
        <div className="socialmedia">
          <h4>
            Contacto
            <div className="line">
              <span></span>
            </div>
          </h4>
          <br />
          <a href="https://www.facebook.com/YETIS14Ajusco12">
            <FacebookIcon />
            <h6>@YETIS14Ajusco12</h6>
          </a>
          <EmailIcon /> <h6>axoscoyetizote@gmail.com</h6>
          <a href="https://api.whatsapp.com/send?phone=5569083741">
            <WhatsAppIcon />
          </a>
          <h6>55-69-08-37-41</h6>
          <a href="https://instagram.com/crossftajusco?utm_medium=copy_link">
            <InstagramIcon />
          </a>
          <h6>Cross F T Ajusco</h6>
        </div>
      </section>
      {/*Copyright */}
      <div className="copyright">
        <small>
          &copy; 2022 <b>CrossFt Ajusco</b> Todos los derechos reservados.
        </small>
      </div>
    </div>
  );
};

export default Footer;
