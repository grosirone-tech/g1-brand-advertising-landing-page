'use client';

import './header.css';
import {Text} from '@/core-ui/text/Text';
import {Button} from '@/core-ui/button/Button';
import {useState, useEffect} from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navClass, setNavClass] = useState('navbar');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > 100) {
        setNavClass('navbar navbar-up');
      } else {
        setNavClass('navbar');
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleOutsideClick = (event: MouseEvent) => {
    const menuElement = document.querySelector('.dropdown');
    if (menuElement && !menuElement.contains(event.target as Node)) {
      closeMenu();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {threshold: 0.6},
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={navClass}>
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiD8hLv20DJIwesYmpIPHwoU4456ppTvj6g&s"
          alt="Logo"
        />
      </div>
      <div className={`dropdown ${isMenuOpen ? 'active' : ''}`}>
        <div className="dropdown-content">
          <Text
            size="normal"
            content="Services"
            className={`nav-text ${
              activeSection === 'services' ? 'active' : ''
            }`}
          />
          <Text
            size="normal"
            content="Prices"
            className={`nav-text ${
              activeSection === 'pricing' ? 'active' : ''
            }`}
          />
          <Text
            size="normal"
            content="Work"
            className={`nav-text ${
              activeSection === 'product' ? 'active' : ''
            }`}
          />
          <Text
            size="normal"
            content="Tech"
            className={`nav-text ${activeSection === 'tech' ? 'active' : ''}`}
          />
          <Text
            size="normal"
            content="Contact Us"
            className={`nav-text ${
              activeSection === 'contact' ? 'active' : ''
            }`}
          />
          <div className="login">
            <Button
              type="primary"
              content="Login"
              onClick={() => {
                console.log('clicked');
              }}
              className="login"
              style={{width: '6rem'}}
            />
          </div>
        </div>
      </div>
      <div className="navigation">
        <Text
          size="normal"
          content="Services"
          className={`nav-text ${activeSection === 'services' ? 'active' : ''}`}
        />
        <Text
          size="normal"
          content="Prices"
          className={`nav-text ${activeSection === 'pricing' ? 'active' : ''}`}
        />
        <Text
          size="normal"
          content="Work"
          className={`nav-text ${activeSection === 'product' ? 'active' : ''}`}
        />
        <Text
          size="normal"
          content="Tech"
          className={`nav-text ${activeSection === 'tech' ? 'active' : ''}`}
        />

        <Text
          size="normal"
          content="Contact Us"
          className={`nav-text ${activeSection === 'contact' ? 'active' : ''}`}
        />
        <Button
          type="primary"
          content="Login"
          className="login"
          onClick={() => {
            console.log('clicked');
          }}
          style={{width: 'auto', fontWeight: 'bolder'}}
        />
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <button
          className={`menu ${isMenuOpen ? 'opened' : ''}`}
          aria-label="Main Menu"
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}