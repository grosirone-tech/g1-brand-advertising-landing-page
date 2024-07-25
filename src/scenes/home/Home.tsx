'use client';

import './home.css';
import {Text} from '@/core-ui/text/Text';
import {Button} from '@/core-ui/button/Button';
import React, {useEffect, useRef} from 'react';

const Home: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (
      homeRef.current &&
      imageRef.current &&
      textRef.current &&
      buttonRef.current
    ) {
      const bannerHeight = homeRef.current.offsetHeight;
      const parallaxRate = 0.5;
      const opacityRate = 1;

      imageRef.current.style.transform = `translateY(${
        scrollY * parallaxRate
      }px)`;
      textRef.current.style.transform = `translateY(${
        scrollY * parallaxRate * 0.8
      }px)`;
      buttonRef.current.style.transform = `translateY(${
        scrollY * parallaxRate * 0.8
      }px)`;

      textRef.current.style.opacity = `${
        1 - (scrollY / bannerHeight) * opacityRate
      }`;
      buttonRef.current.style.opacity = `${
        1 - (scrollY / bannerHeight) * opacityRate
      }`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={homeRef} className="banner" id="home">
      <div className="container">
        <div className="home-img" ref={imageRef}>
          <img
            src="https://i.ytimg.com/vi/RDmmy9GEc5U/maxresdefault.jpg"
            alt="home"
          />
        </div>
        <div className="overlay">
          <div className="overlay-text" ref={textRef}>
            <Text
              size="header"
              content="Kami siap meningkatkan visibilitas Brand anda"
            />
          </div>
          <div className="overlay-button" ref={buttonRef}>
            <Button type="primary" content="Pesan Sekarang" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
