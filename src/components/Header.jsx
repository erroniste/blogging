import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">MyWebsite</a>
      <nav className="nav">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;