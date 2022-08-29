import React from 'react';
import Logo from '../images/Logo.svg';


export default function Header() {
    return (
        <header>
            <img src={Logo} className="meme-logo" alt="logo" />
            <p className="header-text">React Course - Project 3</p>
        </header>
    )
}