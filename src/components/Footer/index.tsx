import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './styles.scss';
import Logo from '../Logo';

type FooterProps = object

const Footer: React.FC<FooterProps> = () => (
  <footer className="footer-container">
    <div className="row-footer-section">
      <div>
        <Logo style={{ width: '100px', height: '100px' }} />
      </div>
      <div className="col-footer-section">
        <nav>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a href="#">pufi puff</a>
            </li>
            <li className="footer-nav-item">
              <a href="#">pufi rain</a>
            </li>
            <li className="footer-nav-item">
              <a href="#">pufi cart</a>
            </li>
            <li className="footer-nav-item">
              <a href="#">pufi nap</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-footer-section">
        <nav>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a href="#">contacto</a>
            </li>
            <li className="footer-nav-item">
              <a href="#">ayuda</a>
            </li>
            <li className="footer-nav-item">
              <a href="#">como comprar</a>
            </li>
            <li className="footer-nav-item">
              <a href="#">TERMINOS & CONDICIONES</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-footer-section">
        <p className="follow-us-text">Seguinos en</p>
        <ul className="follow-us-list">
          <li className="follow-us-item">
            <img
              src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/cylukrlv05dbey0bp8xq.jpg"
              alt="Data Fiscal Logo"
            />
          </li>
          <li className="follow-us-item">
            <img
              src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671315/ctoze7izdhy03wrkf1yp.jpg"
              alt="Pufi Garantía Logo"
            />
          </li>
        </ul>
      </div>
      <div className="col-footer-section">
        <ul className="social-icons-list">
          <li className="social-icon-item">Seguinos en</li>
          <li className="social-icon-item">
            <FaFacebookF />
          </li>
          <li className="social-icon-item">
            <FaTwitter />
          </li>
          <li className="social-icon-item">
            <FaInstagram />
          </li>
        </ul>
      </div>
    </div>
    <div className="politicies">
      <p className="copyright-text">
        Pufi Copyright 2024 - Todos los derechos reservados
      </p>
      <img
        src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671312/r1ledj3y7apy8stxsq1z.jpg"
        alt="Brandlive Logo"
      />
    </div>
    <div className="credits">Wilfrido Garcia, 6 horas</div>
  </footer>
);

export default Footer;
