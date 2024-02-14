import "./footer.css";
import { Link } from "react-router-dom";

// Define el componente funcional Footer
const Footer = () => {
  return (
    <footer>
      {/* Contenedor para el contenido del pie de página */}
      <div className='container-footer'>
        {/* Muestra el año actual y el texto "Photography" */}
        <p>&copy; {new Date().getFullYear()} Dispensario medicinal </p>
        
        <Link to='/contacto' id="contactP">
          
        <p >Contacto</p>
        
        </Link>
        <img
              src='/img/iconmonstr-email-15.svg'
              alt=''
              style={{ width: "20px", height: "20px", marginRight: "5px", margin:"0.2rem", color:"white" }}
            />
      </div>  
    </footer>
  );
};

export default Footer;
