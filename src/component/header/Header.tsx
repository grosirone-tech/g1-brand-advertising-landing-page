'use client';

import './header.css';
import {Text} from '@/core-ui/text/Text';
import {Button} from '@/core-ui/button/Button';
import {useState, useEffect} from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navClass, setNavClass] = useState('navbar');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setNavClass(window.pageYOffset > 100 ? 'navbar navbar-up' : 'navbar');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 867) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {threshold: 0.9},
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const menuElement = document.querySelector('.dropdown');
      if (menuElement && !menuElement.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

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

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollIntoView = (
    selector: string,
    block: 'start' | 'center' | 'end' | 'nearest' = 'start',
  ) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block});
      setIsMenuOpen(false);
    } else {
      console.log('Element not found:', selector);
    }
  };

  const handleNavClick = (
    sectionId: string,
    block: 'start' | 'center' | 'end' | 'nearest' = 'start',
  ) => {
    scrollIntoView(`#${sectionId}`, block);
  };

  const navItems = [
    {id: 'home', label: 'Home'},
    {id: 'services', label: 'Services'},
    {id: 'pricing', label: 'Prices'},
    {id: 'product', label: 'Work'},
    {id: 'tech', label: 'Tech'},
    {id: 'contact', label: 'Contact Us'},
  ];

  return (
    <div className={navClass}>
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiD8hLv20DJIwesYmpIPHwoU4456ppTvj6g&s"
          alt="Logo"
        />
      </div>
      <div className={`dropdown ${isMenuOpen ? 'opened' : ''}`}>
        <div className="dropdown-content">
          {navItems.map(({id, label}) => (
            <Text
              key={id}
              size="normal"
              content={label}
              className={`nav-text dropdown-nav-text ${
                activeSection === id ? 'active' : ''
              }`}
              onClick={() => handleNavClick(id, 'nearest')}
            />
          ))}
          <div className="login">
            <Button
              type="primary"
              content="Login"
              onClick={() => console.log('clicked')}
              className="login"
              style={{width: '6rem'}}
            />
          </div>
        </div>
      </div>
      <div className="navigation">
        {navItems.map(({id, label}) => (
          <Text
            key={id}
            size="navbar"
            content={label}
            className={`nav-text ${activeSection === id ? 'active' : ''}`}
            onClick={() => handleNavClick(id)}
          />
        ))}
        <Button
          type="primary"
          content="Login"
          className="login"
          onClick={() => console.log('clicked')}
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
