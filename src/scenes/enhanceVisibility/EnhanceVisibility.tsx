import React from 'react';
import {Text} from '@/core-ui/text/Text';
import './enhanceVisibility.css';
import CardServices from '../ourServices/CardServices';

const enhance = [
  {
    id: '1',
    imageSrc: 'https://placehold.co/250',
    subtitle: '',
    description: '30 Spot Penayangan Iklan Digital',
  },
  {
    id: '2',
    imageSrc: 'https://placehold.co/250',
    subtitle: '',
    description: '108 Kali Penayangan Setiap Hari (6 AM - 3 PM)',
  },
  {
    id: '3',
    imageSrc: 'https://placehold.co/250',
    subtitle: '',
    description: '145.000 Pengunjung Pasar/Hari',
  }
];

export default function Enhance() {
  return (
    <section id="product">
      <div className="enhance-container">
        <Text size="header" content="WUJUDKAN VISIBILITAS BRAND ANDA" />
        <div className="enhance-specifications">
          {enhance.map((enhances) => (
              <CardServices
                  key={enhances.id}
                  imageSrc={enhances.imageSrc}
                  subtitle={enhances.subtitle}
                  description={enhances.description}
              />
          ))}
        </div>
      </div>
    </section>
  );
}