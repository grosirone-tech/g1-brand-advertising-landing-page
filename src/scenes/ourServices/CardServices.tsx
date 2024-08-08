'use client';

import React, {ReactNode, useEffect} from 'react';
import './ourServices.css';
import {Text} from '@/core-ui/text/Text';

interface CardProps {
  imageSrc: string | ReactNode | JSX.Element;
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
      <div className="services-img">{imageSrc}</div>
      <div className="service-text">
        <Text size="normal" content={subtitle} style={{marginBottom: '10px', fontWeight: 'bold'}} />
        <Text className="description" size="small" content={description} style={{display: 'flex', justifyContent: 'flex-end'}}/>
      </div>
    </div>
  );
};

export default CardServices;
