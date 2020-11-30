import React from 'react';

import '../styles/pages/landing.css';
import {FiArrowRight} from 'react-icons/fi'

import { Link } from 'react-router-dom'

import logoImg from '../images/Logo.svg'

function Lading() {
    return (
        <div id="page-landing">

            <div className="content-wrapper">
                <img src={logoImg} alt="LogoHappy"/>

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>São Paulo</strong>
                    <span>Santana de Parnaíba</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={28} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>

        </div>
    );
};

export default Lading;