import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">Team Ctrl+z</a>
      <nav className="nav">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/profile" className="profile-link">My Profile</a> {/* Added My Profile link */}
      </nav>
    </header>
  );
};

export default Header;
