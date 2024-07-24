'use client';

import React, {useEffect, useRef} from 'react';
import './ourTechnology.css';
import {Text} from '../../core-ui/text/Text';

const OurTechnology: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (imageRef.current) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const parallaxOffset = scrollTop * 0.1;

      imageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="our-technology" id="tech" ref={containerRef}>
      <div className="parallax-background" ref={imageRef}>
        <img src="https://images.pexels.com/photos/163255/sunrise-sun-morgenrot-skies-163255.jpeg?cs=srgb&dl=pexels-pixabay-163255.jpg&fm=jpg" />
      </div>
      {/* Content */}
      <Text
        size="header"
        content="TEKNOLOGI KAMI"
        className="our-technology-title"
      />
      <div className="our-technology-container">
        <div className="our-technology-img">
          <img
            src="https://imgv3.fotor.com/images/cover-photo-image/AI-illustration-of-a-dragon-by-Fotor-AI-text-to-image-generator.jpg"
            alt="Technology"
          />
        </div>
        <div className="our-technology-text">
          <Text size="normal" content="Spesifikasi" style={{height: '3rem'}} />
          <Text size="small" content="Ukuran Layar" />
          <Text size="small" content="Jenis Iklan" />
          <Text size="small" content="Jam Oprasional Spot" />
          <Text size="small" content="Market Exposure" />
          <Text size="small" content="Durasi per Iklan Orientasi" />
          <Text size="small" content="Rotasi Iklan" />
        </div>
      </div>
    </section>
  );
};

export default OurTechnology;
