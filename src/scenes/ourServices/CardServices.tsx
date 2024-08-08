'use client';

import React, {ReactNode, useEffect} from 'react';
import './ourServices.css';
import {Text} from '@/core-ui/text/Text';

interface CardProps {
  imageSrc: string | ReactNode | JSX.Element;
  subtitle: string;
  description: string;
}

const splitStringAndRender = (str: string) => {
  const words = str.split(' ');
  const length = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, length).join(' ');
  const secondHalf = words.slice(length).join(' ');
  return { firstHalf, secondHalf };
}

const CardServices: React.FC<CardProps> = ({
  imageSrc,
  subtitle,
  description,
}) => {
  const { firstHalf, secondHalf } = splitStringAndRender(subtitle);
  
  return (
    <div className="service">
      <div className="services-img">{imageSrc}</div>
      <div className="service-text">
        <Text
          size="normal"
          content={
            <div>
              <div>{firstHalf}</div>
              <div>{secondHalf}</div>
            </div>
          }
          style={{marginBottom: '10px', fontWeight: 'bold'}}
        />
        <Text
          className="description"
          size="small"
          content={description}
          style={{display: 'flex', justifyContent: 'flex-end'}}
        />
      </div>
    </div>
  );
};

export default CardServices;
