import './Footer.css';
import React from "react";



const Footer = () => {
    const current = new Date();
    const date = `${current.getFullYear()}`;


    return (
        <div id="footer">
            <div className='footer-text'>Leafy &copy; {date}</div>



        </div>
    )
}
export default  Footer;