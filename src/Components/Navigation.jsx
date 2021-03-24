import { Link } from "react-router-dom";
import logo from './img/lipsum-team.png';

const Navigation = () => {
    return (
        <div className="navigation">
            <i id="burger-menu" className="fa fa-bars"></i>
            <div className="navbar">
                <img src={logo} alt="logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/reservation">Reservation</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;