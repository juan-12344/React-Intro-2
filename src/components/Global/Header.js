import React from 'react';
import logo from './images/logo.svg';
import './css/Header.css';

function Header() {
  return (
    <div className="Header">
      <header className="Header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenidos al Curso de React Parte Uno</h1>
      </header>
    </div>
  );
}

export default Header;
