import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">© 2021 Copyright CheckPoint 4</p>
        <a className="linkWild" style={{ textDecoration: 'none' }} href="https://wildcodeschool.fr/">Wild Code School</a>
        <Link style={{ textDecoration: 'none' }} className="linkWild" to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
