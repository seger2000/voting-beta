import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <Fragment>
            <div className="contact-wrapper">

                <div className="contact__col">
                    <div className="contact__date">
                        <div class="contact__date-row">
                            <div className="date-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                            <div className="contact__pers-info">
                                <div className="contact__pers-head">Adresa</div>
                                <div className="contact__pers-date">Vasile Alecsandri, 119, Chișinău, Republica Moldova</div>
                            </div>
                        </div>
                        <div className="contact__date-row">
                            <div className="date-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <div className="contact__pers-info">
                                <div className="contact__pers-head">Mail</div>
                                <div className="contact__pers-date">info@cec.md</div>
                            </div>
                        </div>
                        <div className="contact__date-row">
                            <div className="date-icon"><FontAwesomeIcon icon={faPhoneAlt} /></div>
                            <div className="contact__pers-info">
                                <div className="contact__pers-head">Telefon</div>
                                <div className="contact__pers-date">(+373 22) 251-451</div>
                                <div className="contact__pers-date">(+373 22) 234-047 (Fax)</div>
                            </div>
                        </div>
                        <div className="more-info"><a href="https://a.cec.md/ro" target="_blank">Mai multa informație</a></div>
                    </div>
                </div>

                <div className="contact__col">
                    <form action="#" id="contact-mail">
                        <div className="contact__title">Trimite un mesaj</div>
                        <div className="form-row">
                            <input type="text" className="form-input form-input--50" name="name" id="contactName"
                                placeholder="Name" />
                            <input className="form-input form-input--50" type="email" name="email" id="contactEmail" placeholder="email@gmail.com" />
                        </div>
                        <input className="form-input" type="text" name="subj" id="contactSubj" placeholder="Subject" />
                        <textarea className="form-input" name="message" id="contactMessage"
                            placeholder="Message"></textarea>
                        <input type="submit" value="Trimite" class="send-btn" />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default Contact