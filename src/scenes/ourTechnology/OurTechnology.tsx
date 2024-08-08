'use client';

import React from 'react';
import './ourTechnology.css';
import {Text} from '../../core-ui/text/Text';

export default function Technology() {
  const techItems = [
    {id: '1', spec: 'Ukuran Layar', desc: '15 inch'},
    {id: '2', spec: 'Ukuran Pixel', desc: '1080 x 1920 pixels'},
    {id: '3', spec: 'Jenis Iklan', desc: 'Short Video'},
    {id: '4', spec: 'Jam Operasional Spot', desc: '6AM-3PM'},
    {id: '5', spec: 'Market', desc: '108 Spot/titik'},
    {id: '6', spec: 'Exposure', desc: '2 Markets Exposure'},
    {id: '7', spec: 'Durasi per Iklan', desc: '30 detik (max)'},
    {id: '8', spec: 'Orientasi Iklan', desc: 'Landscape'},
    {id: '9', spec: 'Rotasi Iklan', desc: '5 menit (10 iklan/titik)'},
  ];

  return (
    <section className="our-technology" id="tech">
      <Text
        size="subheader"
        content="TEKNOLOGI KAMI"
        className="our-technology-title"
      />
      <div className="our-technology-container">
        <div className="our-technology-img">
          <img src="../tablet.png" alt="Technology" />
        </div>
        <div className="our-technology-text">
          <table className="technology-text">
            <thead>
              <tr style={{textAlign: 'center', width: '100%', height: '3rem'}}>
                <th colSpan={3}>
                  <Text
                    size="normal"
                    content="Spesifikasi"
                    className="spec-title"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {techItems.map(({id, spec, desc}) => (
                <tr key={id}>
                  <td>
                    <Text size="small" content={spec} />
                  </td>
                  <td>
                    <Text size="normal" content=" : " />
                  </td>
                  <td>
                    <Text size="small" content={desc} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
