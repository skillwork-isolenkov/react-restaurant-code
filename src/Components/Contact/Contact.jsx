import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import lipsumTeams from '../img/lipsum-teams.png'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-main">
                <div className="elements">
                    <h2>Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="email-bar">
                        <input className="input-email" type="email" required placeholder="Enter Your E-Mail ID" />
                        <a href="/" className="orange-btn"><FontAwesomeIcon icon={faAngleDoubleRight} /></a>
                    </div>
                    <span className="message"></span>
                </div>
            </div>

            <div className="contact-footer">
                <img src={lipsumTeams} alt="lipsumTeams" />
                <div className="navbar-elements">
                    <div className="about">
                        <h3 className="orange">About Us</h3>
                        <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes.</p>
                    </div>

                    <ul className="new-menu">
                        <h3 className="orange">New Menu</h3>
                        <li><a href="/">Pizza Peperoni</a></li>
                        <li><a href="/">Chicken Burger</a></li>
                        <li><a href="/">Spaghetti Bolognese</a></li>
                        <li><a href="/">Club Sandwich </a></li>
                    </ul>

                    <ul className="contact">
                        <h3 className="orange">Contact Us</h3>
                        <li><i className="fa fa-location-arrow"></i> 685 Eva Pearl Street Baton Rouge LA</li>
                        <li><i className="fa fa-mobile"></i>+359 87 6778588</li>
                        <li> <i className="fa fa-envelope-square"></i> <a href="/">ivansolenkov99@gmail.com</a></li>
                    </ul>

                    <div className="hours">
                        <h3 className="orange">Opening Hours</h3>
                        <h4>Monday-Thursday</h4>
                        <span>11:00 AM - 9:00 PM</span>
                        <h4>Friday-Saturday</h4>
                        <span>11:00 AM - 5:00 PM</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;