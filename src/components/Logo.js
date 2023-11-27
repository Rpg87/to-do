import React from "react";
import rpg from '../images/logo.png';
import '../stylesheets/Logo.css';


const Logo = () => {


    return (
        <div className="container">

            <div className='container-logo'>
                <a href="https://www.linkedin.com/in/raquel-pe-go/" target='_blank'
                    rel='noreferrer'>
                    <img className='raquel-logo'
                        src={rpg}
                        alt='Logo de Raquel' />
                </a>

            </div>


        </div>
    )
};

export default Logo;