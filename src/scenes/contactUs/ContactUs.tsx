'use client';

import React, { useState } from 'react';
import { Text } from '../../core-ui/text/Text';
import { Button } from '@/core-ui/button/Button';
import './contactUs.css';

export default function ContactUs() {
  function mailto (){
      window.location.href = "mailto:g1@gmail.com?subject=Hello";
  }

  return (
    <section id="contact" className="contact-us-container">
      <div className="contact-us-top">
        <Text size="subheader" content="HUBUNGI KAMI" />
      </div>
      <div className="contact-us-low">
        <Button
          type="primary"
          content="gtrone@grosir.one"
          onClick={mailto}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          }
        />
      </div>
    </section>
  );
}
