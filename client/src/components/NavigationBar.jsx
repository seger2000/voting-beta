import React, {Fragment} from 'react';
import Button from './components-object/Button';

const NavigationBar = () => {

    return (
        <Fragment>
            <nav className='nav-bar' id='navBar'>
                <div className="container">
                    <ul className="nav-box nav-box--main">
                        <li className="nav-box-item">
                            <a href="/" className="logo">SmartVot MD</a>
                        </li>
                        <li className="nav-box-item  nav-box-item--large">
                            <ul className="nav-box">
                                <li className="nav__link-item"><a href="#headerStatistics" className="nav__link">Statistică</a></li>
                                <li className="nav__link-item"><a href="#candidates" className="nav__link">Candidat</a></li>
                                <li className="nav__link-item"><a href="#contact" className="nav__link">Contact</a></li>
                            </ul>
                        </li>
                        <li className="nav-box-item">
                            <Button
                                type="vote"
                                name="Votează"
                                id="btn-window"
                            />
                        </li>
                    </ul>

                    <ul className="nav-box nav-box--burger">
                        <li className="nav-box-item"><a href="/" className="logo">SmartVot MD</a></li>
                        <li className="nav-box-item">
                            <button className="burger-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavigationBar