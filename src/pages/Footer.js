import React from "react";
import Logo from "../images/Logo .png"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={Logo} alt=""/>
                    <p>we are a family......................</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Adress: <br/> Escrever endereço</li>
                        <li>Phone: <br/> Escrever Telefone</li>
                        <li>Email: <br/> Escrever email</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;