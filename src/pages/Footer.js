import React from "react";
import Logo from "../images/Logo .png"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={Logo} alt=""/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a moder twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="./About">About</a></li>
                        <li><a href="./Menu">Menu</a></li>
                        <li><a href="./Reservations">Reservations</a></li>
                        <li><a href="./Orderonline">Order online</a></li>
                        <li><a href="./Login">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Adress: <br/> Little Lemon Street</li>
                        <li>Phone: <br/> +253 598 484 785</li>
                        <li>Email: <br/> littlelemon@gmail.com</li>
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