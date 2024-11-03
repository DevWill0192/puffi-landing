import React, { useState, useEffect } from 'react';
import './styles.scss';
import Logo from '../Logo';
import useDeviceType from '../../hooks/useDeviceType';

const Header: React.FC = () => {
  const isMobile: boolean = useDeviceType();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const element = document.querySelector('.header_container') as HTMLElement;
      const scrollClass = 'scrolled';
      if (!isMobile) {
        if (window.scrollY > 50) {
          element.classList.add(scrollClass);
        } else {
          element.classList.remove(scrollClass);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;
      menuToggle?.classList?.add('active');
    } else {
      document.body.style.overflow = 'auto';
      const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;
      menuToggle?.classList?.remove('active');
    }
  }, [isOpen]);

  return (
    isMobile ? (
      <>
        <div className="hamburger-menu">
          <div className='logo_container__mobile'>
            <a href="#">
              <Logo style={{ width: '50px', fill: '#fff' }}/>
            </a>
            <button className="menu-toggle" onClick={toggleMenu}>
              <span>-</span>
              <span>-</span>
              <span>-</span>
            </button>
          </div>

          <div className={`menu ${isOpen ? 'open' : ''}`}>
            <nav className="container_nav">
            <button onClick={() => scrollToSection('pufi-puff')}>
                <img src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/sge5hnnquythw43oiqy6.svg" alt="Pufi Puff Icon" />
                Pufi Puff
              </button>
              <button onClick={() => scrollToSection('pufi-rain')}>
                <img src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/qgnvu6dijn7zwtj3pyx5.svg" alt="Pufi Rain Icon" />
                Pufi Rain
              </button>
              <button onClick={() => scrollToSection('pufi-cart')}>
                <img src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/sdp3cnbf2lrly2g2kl63.svg" alt="Pufi Cart Icon" />
                Pufi Cart
              </button>
              <button onClick={() => scrollToSection('pufi-nap')}>
                <img src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/inrcctbsuy0rfwjxqybg.svg" alt="Pufi Nap Icon" />
                Pufi Nap
              </button>
            </nav>
            <div className="my_account_container">
              <a href="#">Mi cuenta</a> <span> | </span> <a href="#">Mi compra</a>
            </div>
          </div>
        </div>
      </>
    ) : (
      <header className={`header_container ${isMobile ? 'header_container--mobile' : ''}`}>
        <div className="logo_container">
          <a href="#">
            <Logo/>
          </a>
        </div>
        <nav className="container_nav">
           <button onClick={() => scrollToSection('pufi-puff')}>
                <img src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/sge5hnnquythw43oiqy6.svg" alt="Pufi Puff Icon" />
                Pufi Puff
              </button>
              <button onClick={() => scrollToSection('pufi-rain')}>
                <img src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/qgnvu6dijn7zwtj3pyx5.svg" alt="Pufi Rain Icon" />
                Pufi Rain
              </button>
              <button onClick={() => scrollToSection('pufi-cart')}>
                <img src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/sdp3cnbf2lrly2g2kl63.svg" alt="Pufi Cart Icon" />
                Pufi Cart
              </button>
              <button onClick={() => scrollToSection('pufi-nap')}>
                <img src="https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671313/inrcctbsuy0rfwjxqybg.svg" alt="Pufi Nap Icon" />
                Pufi Nap
              </button>
        </nav>
        <div className="my_account_container">
          <a href="#">Mi cuenta</a> <span> | </span> <a href="#">Mi compra</a>
        </div>
      </header>
    )
  );
};

export default Header;
