import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import RM from '../assets/img/Tricolor.png';

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__item--max">
                            <div className="footer__item">
                                <h5 className="footer__title --title">Despre noi</h5>
                                <div className="footer__about-text">
                                    <img className="main-logo footer--logo" src={RM}
                                        alt="Ministerul Afacerilor Externe şi Integrării Europene RM" />

                                    <div>
                                        <p>Comisia Electorală Centrală a Republicii Moldova</p>
                                        <p>© 2022 Toate drepturile rezervate</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer__item--min">
                            <div className="footer__item">
                                <h5 className="footer__title --title">Contacte</h5>
                                <ul className="footer__list-link">
                                    <li className="footer-link">
                                        <p>Vasile Alecsandri, 119, Chișinău, Republica Moldova</p>
                                    </li>
                                    <li className="footer-link">
                                        <p>Tel: (+373 22) 251-451</p>
                                    </li>
                                    <li className="footer-link">
                                        <p>Fax: (+373 22) 234-047</p>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="footer__item">
                                <h5 className="footer__title --title">Social Media</h5>
                                <ul className="footer__list-link">
                                    <li className="footer-link">
                                        <a href="https://www.facebook.com/cecmoldova/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="https://www.instagram.com/cec.moldova/"
                                            target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="https://twitter.com/CECMoldova" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer-flag">
                    <div className="flag-color flag--blue"></div>
                    <div className="flag-color flag--yellow"></div>
                    <div className="flag-color flag--red"></div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer