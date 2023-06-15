import React from "react";
import "./styles/Footer.css";
import ContactForm from "./Form";





const Footer = () => {
    return (
        <footer> 
            <div className="Footer">
                <p>
                    gracias por visitarnos, en el siguiente formulario puedes
                     contactarnos y conseguir más información de nuestros productos
                </p>
                <ContactForm/>
            </div>
        
        </footer>
        
    );
}


export default Footer;