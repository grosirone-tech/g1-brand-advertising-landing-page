'use client';

import React, {useEffect} from 'react';
import './ourServices.css';
import {Text} from '@/core-ui/text/Text';

interface CardProps {
  imageSrc: string;
  subtitle: string;
  description: string;
}

const CardServices: React.FC<CardProps> = ({
  imageSrc,
  subtitle,
  description,
}) => {
  return (
    <div className="service">
      <div className="services-img">
        <img src={imageSrc} alt="Service" />
      </div>
      <div className="service-text">
        <Text size="normal" content={subtitle} style={{marginBottom: '20px'}}/>
        <Text
          className="description"
          size="small"
          content={description}
        />
      </div>
    </div>
  );
};

export default CardServices;
