import React from 'react';
import {Text} from '@/core-ui/text/Text';
import './enhanceVisibility.css';
import CardServices from '../ourServices/CardServices';

const enhance = [
  {
    id: '1',
    imageSrc: 'https://placehold.co/250',
    subtitle: '30 Spot Penayangan Iklan Digital',
    description: '',
  },
  {
    id: '2',
    imageSrc: 'https://placehold.co/250',
    subtitle: '108 Kali Penayangan Setiap Hari (6 AM - 3 PM)',
    description: '',
  },
  {
    id: '3',
    imageSrc: 'https://placehold.co/250',
    subtitle: '145.000 Pengunjung Pasar/Hari',
    description: '',
  }
];

export default function Enhance() {
  return (
    <section id="product">
      <div className="enhance-container">
        <Text size="subheader" content="WUJUDKAN VISIBILITAS BRAND ANDA" />
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