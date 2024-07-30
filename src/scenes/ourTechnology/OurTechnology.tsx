'use client';

import React, {useEffect, useRef} from 'react';
import './ourTechnology.css';
import {Text} from '../../core-ui/text/Text';

export default function Technology() {
  return (
    <section className="our-technology" id="tech">
      <Text
        size="subheader"
        content="TEKNOLOGI KAMI"
        className="our-technology-title"
      />
      <div className="our-technology-container">
        <div className="our-technology-img">
          <img
            src="../tablet.png"
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

