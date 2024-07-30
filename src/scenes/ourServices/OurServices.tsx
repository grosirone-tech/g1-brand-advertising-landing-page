import React from 'react';
import './ourServices.css';
import {Text} from '@/core-ui/text/Text';
import CardServices from './CardServices';

const OurServices: React.FC = () => {
  const servicesData = [
    {
      id: '1',
      imageSrc: (
        <svg
          height="60"
          width="60"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 26"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                style={{fill: '#CFCFCF'}}
                d="M22.934,11.19V8.705l-2.955-0.482c-0.176-0.699-0.45-1.357-0.813-1.961l1.723-2.456l-1.756-1.755
              l-2.424,1.743c-0.604-0.366-1.267-0.646-1.971-0.82l-0.516-2.941h-2.484L11.26,2.965c-0.706,0.173-1.371,0.448-1.977,0.812
              L6.866,2.051L5.11,3.806l1.7,2.431C6.442,6.846,6.163,7.51,5.985,8.22L3.066,8.705v2.484l2.916,0.516
              c0.176,0.71,0.456,1.375,0.824,1.985l-1.723,2.409l1.756,1.757l2.434-1.704c0.608,0.365,1.271,0.642,1.977,0.815l0.488,2.934
              h2.484l0.521-2.941c0.701-0.178,1.363-0.457,1.967-0.824l2.451,1.721l1.755-1.757l-1.749-2.429
              c0.362-0.604,0.637-1.263,0.811-1.964L22.934,11.19z M13,13.431c-1.913,0-3.464-1.55-3.464-3.464c0-1.912,1.551-3.463,3.464-3.463
              s3.463,1.551,3.463,3.463C16.464,11.881,14.913,13.431,13,13.431z"
              />
            </g>
            <path
              style={{fill: '#CFCFCF'}}
              d="M24,18.967v4c0,0.551-0.448,1-1,1H3c-0.552,0-1-0.449-1-1v-4H0v4c0,1.656,1.344,3,3,3h20
            c1.656,0,3-1.344,3-3v-4H24z"
            />
          </g>
        </svg>
      ),
      title: 'Service 1',
      subtitle: 'Instalasi & Pemasangan',
      description:
        'Kami menawarkan instalasi dan pemasangan yang mudah dan cepat.',
    },
    {
      id: '2',
      imageSrc: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 109.98902 110.00027"
          enable-background="new 0 0 100 100"
          id="svg12"
          width="70"
          height="70"
          fill="white"
        >
          <defs id="defs16" />
          <g id="g6" transform="translate(5.218,4.7822681)">
            <path
              d="M 92.423,81.112 91.448,80.137 C 83.934,72.623 70.202,58.891 58.822,47.502 l 22.299,-22.299 4.778,0.334 c 0.035,0.002 0.07,0.003 0.104,0.003 0.539,0 1.041,-0.292 1.305,-0.769 l 7.275,-13.113 c 0.324,-0.582 0.222,-1.308 -0.25,-1.779 L 90.12,5.667 C 89.65,5.196 88.923,5.094 88.341,5.417 l -13.113,7.276 c -0.507,0.281 -0.805,0.831 -0.765,1.409 l 0.334,4.776 -22.299,22.299 C 46.8,35.479 42.372,31.051 40.712,29.391 42.974,22.818 41.327,15.529 36.369,10.571 31.481,5.684 24.37,3.983 17.808,6.133 17.785,6.141 17.766,6.153 17.743,6.162 17.719,6.171 17.698,6.182 17.675,6.192 17.51,6.264 17.364,6.361 17.24,6.481 17.233,6.488 17.224,6.489 17.217,6.496 17.208,6.505 17.205,6.517 17.197,6.526 17.075,6.654 16.978,6.8 16.908,6.961 16.898,6.983 16.89,7.005 16.882,7.028 16.823,7.184 16.79,7.349 16.786,7.52 c 0,0.023 0,0.044 10e-4,0.067 0.003,0.143 0.02,0.286 0.067,0.429 0.008,0.024 0.021,0.044 0.03,0.067 0.008,0.022 0.019,0.043 0.029,0.064 0.073,0.165 0.169,0.311 0.289,0.435 0.007,0.007 0.009,0.017 0.016,0.024 l 7.089,7.089 c 0.676,0.676 1.048,1.573 1.049,2.527 10e-4,0.953 -0.37,1.848 -1.044,2.522 L 20.757,24.3 C 19.365,25.691 17.1,25.687 15.708,24.295 L 8.619,17.206 C 8.612,17.199 8.603,17.198 8.597,17.191 8.473,17.071 8.326,16.974 8.161,16.901 8.138,16.891 8.117,16.88 8.094,16.871 8.071,16.862 8.051,16.849 8.028,16.842 7.887,16.796 7.744,16.779 7.603,16.776 7.579,16.775 7.556,16.774 7.532,16.775 c -0.17,0.004 -0.335,0.037 -0.491,0.096 -0.022,0.008 -0.043,0.016 -0.065,0.026 -0.162,0.07 -0.309,0.168 -0.437,0.291 -0.009,0.008 -0.02,0.011 -0.029,0.019 -0.007,0.007 -0.008,0.016 -0.015,0.022 -0.12,0.124 -0.217,0.27 -0.289,0.435 -0.01,0.023 -0.021,0.045 -0.03,0.069 -0.009,0.023 -0.021,0.043 -0.029,0.066 -2.143,6.566 -0.443,13.677 4.438,18.559 3.495,3.494 8.147,5.349 12.891,5.349 1.986,0 3.984,-0.346 5.923,-1.012 l 7.518,7.519 c -0.131,-0.01 -0.257,-0.038 -0.389,-0.038 -1.417,0 -2.75,0.552 -3.751,1.554 L 6.337,76.167 c -1.003,1.002 -1.555,2.335 -1.555,3.752 0,1.417 0.552,2.75 1.555,3.752 l 2.295,2.296 c 10e-4,0.001 10e-4,0.002 10e-4,0.002 0.001,0.001 0.002,0.001 0.002,0.001 l 7.693,7.694 c 1.002,1.002 2.335,1.554 3.752,1.554 1.418,0 2.751,-0.552 3.752,-1.554 L 50.27,67.225 c 1.003,-1.002 1.555,-2.335 1.555,-3.752 0,-0.131 -0.028,-0.257 -0.038,-0.387 l 29.321,29.34 c 1.557,1.557 3.603,2.335 5.652,2.335 2.048,0 4.098,-0.778 5.662,-2.335 1.508,-1.507 2.338,-3.514 2.338,-5.652 10e-4,-2.145 -0.83,-4.155 -2.337,-5.662 z M 77.389,20.508 c 0.007,-0.007 0.009,-0.017 0.016,-0.024 0.122,-0.127 0.219,-0.274 0.29,-0.437 0.009,-0.02 0.019,-0.038 0.027,-0.058 0.06,-0.154 0.091,-0.32 0.096,-0.492 0.001,-0.025 0.003,-0.049 0.002,-0.075 0,-0.025 0.004,-0.048 0.002,-0.073 l -0.315,-4.507 11.298,-6.269 2.622,2.623 -6.269,11.298 -4.507,-0.316 c -0.026,-0.002 -0.05,0.003 -0.075,0.002 -0.023,0 -0.045,0.001 -0.068,0.002 -0.172,0.004 -0.338,0.036 -0.493,0.096 -0.023,0.009 -0.043,0.02 -0.066,0.03 -0.157,0.07 -0.301,0.164 -0.425,0.282 -0.01,0.009 -0.022,0.012 -0.032,0.021 L 51.5,50.604 49.396,48.5 Z M 30.87,37.945 c -0.41,-0.429 -1.054,-0.59 -1.638,-0.352 -5.698,2.312 -12.191,1 -16.539,-3.347 C 9.221,30.773 7.682,25.951 8.4,21.208 l 5.196,5.197 c 1.28,1.279 2.96,1.919 4.64,1.919 1.677,0 3.354,-0.638 4.63,-1.914 l 3.555,-3.555 c 1.238,-1.238 1.919,-2.883 1.918,-4.634 -10e-4,-1.75 -0.684,-3.397 -1.924,-4.636 L 21.216,8.386 c 4.741,-0.722 9.563,0.818 13.041,4.295 4.282,4.282 5.612,10.643 3.437,16.277 l -1.562,1.572 c -0.581,0.584 -0.577,1.529 0.007,2.11 0.291,0.29 0.672,0.434 1.052,0.434 0.384,0 0.767,-0.147 1.059,-0.441 l 0.739,-0.743 c 1.872,1.872 6.078,6.078 11.397,11.397 l -3.108,3.108 c -0.806,-0.771 -1.855,-1.202 -2.973,-1.202 -1.152,0 -2.235,0.449 -3.049,1.263 l -0.938,0.938 z M 15.087,88.201 11.8,84.913 34.619,62.094 c 0.878,-0.878 2.41,-0.878 3.288,0 0.907,0.906 0.907,2.38 0,3.287 z M 48.162,65.115 21.723,91.553 c -0.876,0.876 -2.408,0.876 -3.284,0 l -1.242,-1.242 22.82,-22.82 c 2.07,-2.07 2.07,-5.438 0,-7.508 -1.003,-1.003 -2.336,-1.556 -3.754,-1.556 -1.419,0 -2.752,0.552 -3.754,1.556 L 9.689,82.803 8.447,81.56 c -0.438,-0.439 -0.68,-1.022 -0.68,-1.642 0,-0.62 0.242,-1.203 0.68,-1.642 L 34.885,51.837 c 0.438,-0.438 1.021,-0.68 1.641,-0.68 0.621,0 1.204,0.241 1.642,0.68 l 9.993,9.993 c 0.438,0.438 0.68,1.021 0.68,1.641 10e-4,0.622 -0.241,1.205 -0.679,1.644 z m 3.27,-8.483 -2.124,2.124 -8.065,-8.064 2.125,-2.124 c 0.5,-0.5 1.374,-0.501 1.876,0 l 0.978,0.977 c 0.003,0.003 0.004,0.008 0.008,0.012 l 4.214,4.214 c 0.003,0.003 0.008,0.004 0.012,0.008 l 0.978,0.978 c 0.515,0.517 0.515,1.358 -0.002,1.875 z m 38.883,33.681 c -1.961,1.952 -5.144,1.953 -7.095,0.002 L 52.605,59.68 53.543,58.742 c 1.658,-1.658 1.673,-4.336 0.061,-6.022 l 3.108,-3.108 c 11.381,11.39 25.113,25.121 32.626,32.635 l 0.975,0.975 c 0.943,0.943 1.463,2.204 1.463,3.551 0,1.34 -0.52,2.598 -1.461,3.54 z"
              id="path2"
            />
            <circle cx="86.765999" cy="86.768997" r="2.4030001" id="circle4" />
          </g>
        </svg>
      ),
      subtitle: 'Pemeliharaan & Dukungan Teknis',
      description:
        'Kami menyediakan pemeliharaan dan dukungan teknis agar sistem berjalan optimal',
    },
    {
      id: '3',
      imageSrc: (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 99.63"
          width="70"
          height="70"
          fill="white"
        >
          <title>digital-ads</title>
          <path d="M16.34,23.62H82.53a4,4,0,0,1,4,4v2A21.69,21.69,0,0,0,78.83,31l-.46.18A21.59,21.59,0,0,0,65.11,51a20.87,20.87,0,0,0,.7,5.37H16.34a4,4,0,0,1-4-4V27.58a4,4,0,0,1,4-4ZM73.65,6.27A3.63,3.63,0,1,1,70,9.9a3.63,3.63,0,0,1,3.63-3.63Zm-10.92,0A3.63,3.63,0,1,1,59.1,9.9a3.62,3.62,0,0,1,3.63-3.63Zm21.83,0A3.63,3.63,0,1,1,80.93,9.9a3.62,3.62,0,0,1,3.63-3.63ZM6.05,0H92.82a6.05,6.05,0,0,1,4.26,1.77h0a6.05,6.05,0,0,1,1.77,4.26V33.41a21.17,21.17,0,0,0-4.08-2.22h0c-.45-.19-.9-.36-1.36-.51V18.48a3.68,3.68,0,0,1-.58.05H6.05a3.81,3.81,0,0,1-.59-.05V89.14a.59.59,0,0,0,.17.41h0a.57.57,0,0,0,.41.16H82.3l0,.28a12.82,12.82,0,0,0,.47,2.59,10.35,10.35,0,0,0,1.13,2.59H6.05a6,6,0,0,1-4.27-1.77h0A6,6,0,0,1,0,89.14V6.05A6.06,6.06,0,0,1,1.77,1.77L2,1.59A6.06,6.06,0,0,1,6.05,0ZM14.6,63.92H67.46V68.1H14.6V63.92ZM15.5,79a2.09,2.09,0,1,1,0-4.18H54A2.09,2.09,0,0,1,54,79Zm95.84,20.37a2.26,2.26,0,0,1-1.55.14,2.15,2.15,0,0,1-1.33-1l-7-12-5.31,6a6.51,6.51,0,0,1-2.38,1.78,3.16,3.16,0,0,1-1.82.21,2.43,2.43,0,0,1-1.57-1.12,4.28,4.28,0,0,1-.59-2l-3-38.51v-.09a1.63,1.63,0,0,1,.65-1.33,1,1,0,0,1,.31-.15,1.58,1.58,0,0,1,.68-.07,1.5,1.5,0,0,1,.61.19l.18.11,31.83,21.79a4.38,4.38,0,0,1,1.45,1.52,2.38,2.38,0,0,1,.19,1.92,3.08,3.08,0,0,1-1.09,1.47,6.7,6.7,0,0,1-2.74,1.18h0L111.12,81,118.05,93a2.17,2.17,0,0,1,.2,1.65,2.23,2.23,0,0,1-1,1.33l-.06,0-5.75,3.32-.13.06Zm-25-56a7.07,7.07,0,0,1,5,2.08c.13.13.26.27.38.41l-.2-.07a7.26,7.26,0,0,0-1.18-.27l-.4-.06a7.83,7.83,0,0,0-1.81,0l-.26,0a5.21,5.21,0,0,0-5.21,1.29h0a5.18,5.18,0,0,0-1.52,3.68A5.18,5.18,0,0,1,81.07,52a8,8,0,0,0-.13,1.28,7.69,7.69,0,0,0,0,1l.07.89a7.07,7.07,0,0,1,.34-9.65h0a7.08,7.08,0,0,1,5-2.08Zm0-7.68a14.77,14.77,0,0,1,14.78,14.77c0,.48,0,.95-.07,1.42l-2.17-1.48A12.54,12.54,0,1,0,81.54,62.09l.19,2.46a14.77,14.77,0,0,1,4.62-28.8ZM25.4,47.37H21l3.35-14.75h6.39l3.35,14.75H29.76L29.28,45H25.87l-.47,2.33Zm1.67-10.22-.45,4.13h1.9l-.44-4.13Zm9,10.22V32.62h5.79c2.33,0,3.93.56,4.8,1.7S48,37.34,48,40s-.44,4.55-1.3,5.68-2.47,1.7-4.8,1.7Zm5.85-11H40.19V43.6h1.72a2.5,2.5,0,0,0,1.23-.23c.25-.15.38-.49.38-1v-4.7c0-.54-.13-.88-.38-1a2.52,2.52,0,0,0-1.23-.23ZM50,47.11l.58-3.89a12.69,12.69,0,0,0,3.42.54,17.68,17.68,0,0,0,2.45-.14V42.44l-1.86-.19a5,5,0,0,1-3.46-1.38,5,5,0,0,1-.95-3.32c0-2,.39-3.4,1.15-4.15a5.44,5.44,0,0,1,3.9-1.14,19.39,19.39,0,0,1,5,.59l-.51,3.78a17.55,17.55,0,0,0-3.08-.35,15.47,15.47,0,0,0-2,.11v1.16l1.49.17a5.72,5.72,0,0,1,3.74,1.47,4.73,4.73,0,0,1,1,3.25A7.91,7.91,0,0,1,60.58,45a4.51,4.51,0,0,1-.84,1.56,3.12,3.12,0,0,1-1.38.82,7.91,7.91,0,0,1-1.56.34c-.45,0-1,.06-1.79.06a19.19,19.19,0,0,1-5-.62Z" />
        </svg>
      ),
      subtitle: 'Layanan Pembuatan Video Iklan',
      description:
        'Kami membantu Anda membuat iklan yang menarik untuk mencapai target audiens.',
    },
    {
      id: '4',
      imageSrc: (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 92.53 122.88"
          fill="white"
          width="70"
          height="70"
          style={{fillRule: 'evenodd'}}
        >
          <path
            className="cls-1"
            d="M46.27,18.21A28.62,28.62,0,1,1,17.64,46.83,28.62,28.62,0,0,1,46.27,18.21Zm1.36,97.49A82.87,82.87,0,0,0,64,101.81,85.44,85.44,0,0,0,84.56,62.23c2.81-13.67,1.5-27-4.75-37.34a36.74,36.74,0,0,0-6.63-8.06C65.62,9.93,57,6.64,48.23,6.56,39.07,6.49,29.77,10,21.55,16.5a38.54,38.54,0,0,0-8.63,9.56C7.15,35.15,5.41,46.43,7.31,58.24c1.94,12,7.66,24.61,16.77,36A102.46,102.46,0,0,0,47.63,115.7Zm21.24-9.46a89.32,89.32,0,0,1-19.33,16,3.28,3.28,0,0,1-3.71.13,109.25,109.25,0,0,1-26.9-24c-9.8-12.31-16-26-18.1-39.1C-1.33,45.89.7,33,7.36,22.53a45.3,45.3,0,0,1,10.1-11.18C26.85,3.87,37.6-.09,48.29,0,58.6.09,68.79,3.92,77.6,12a43.1,43.1,0,0,1,7.82,9.52c7.15,11.8,8.71,26.83,5.57,42.05a92.2,92.2,0,0,1-22.12,42.7ZM48.79,28.35c.37,0,.74.12,1.11.19a19,19,0,0,1,3.49,1.06,18.2,18.2,0,0,1,3.23,1.73,18.71,18.71,0,0,1,5.15,5.14A18.92,18.92,0,0,1,63.5,39.7l0,.07a18.34,18.34,0,0,1,1,3.43c.07.36.14.74.19,1.11h3.07a1.27,1.27,0,0,1,1.27,1.26v2.52a1.28,1.28,0,0,1-1.27,1.26H64.75c0,.37-.12.75-.19,1.11A18.88,18.88,0,0,1,63.5,54a18.91,18.91,0,0,1-4,6h0a19.11,19.11,0,0,1-6.05,4l-.07,0a18.34,18.34,0,0,1-3.43,1c-.37.08-.74.14-1.11.19v3.08a1.28,1.28,0,0,1-1.27,1.26H45a1.27,1.27,0,0,1-1.26-1.26V65.31c-.38,0-.75-.11-1.12-.19A18.86,18.86,0,0,1,33.08,60a19.41,19.41,0,0,1-2.32-2.84A17.77,17.77,0,0,1,29,54,18.18,18.18,0,0,1,28,50.46c-.07-.36-.13-.74-.18-1.11H24.71a1.27,1.27,0,0,1-1.26-1.26V45.57a1.27,1.27,0,0,1,1.26-1.26h3.08c.05-.37.11-.75.18-1.11A18.18,18.18,0,0,1,29,39.7a17.77,17.77,0,0,1,1.72-3.22,19.41,19.41,0,0,1,2.32-2.84,19,19,0,0,1,6.06-4l.07,0a18.24,18.24,0,0,1,3.42-1c.37-.07.74-.14,1.12-.19V25.27A1.27,1.27,0,0,1,45,24h2.51a1.27,1.27,0,0,1,1.27,1.26v3.08ZM46.27,42.06a4.77,4.77,0,1,1-4.78,4.77,4.77,4.77,0,0,1,4.78-4.77Zm13.54,7.29c-5.65,0-5.65-5,0-5q-.08-.42-.18-.84a13.46,13.46,0,0,0-.77-2.24l0-.06A12.64,12.64,0,0,0,57.64,39a14.61,14.61,0,0,0-1.63-2,14.2,14.2,0,0,0-1.95-1.62,13.91,13.91,0,0,0-2.2-1.23,13.57,13.57,0,0,0-2.25-.77l-.82-.18c0,5.66-5,5.66-5,0l-.84.19a13.11,13.11,0,0,0-2.24.76,14.37,14.37,0,0,0-2.2,1.23l-.07,0A14.24,14.24,0,0,0,34.89,39a13.39,13.39,0,0,0-2,4.44c-.07.28-.13.55-.18.83,5.66,0,5.65,5,0,5q.08.42.18.84a14.09,14.09,0,0,0,.77,2.24h0a15,15,0,0,0,1.23,2.2,13.59,13.59,0,0,0,1.63,1.95,13.92,13.92,0,0,0,4.14,2.85l.08,0a13.83,13.83,0,0,0,2.17.73l0,0c.26.06.52.12.78.16,0-5.66,5-5.66,5,0l.84-.19a13.16,13.16,0,0,0,2.24-.77h0A13.8,13.8,0,0,0,56,56.58a13.8,13.8,0,0,0,2.85-4.15l0-.06a14.58,14.58,0,0,0,.74-2.2c.06-.27.12-.54.17-.82Z"
          />
        </svg>
      ),
      subtitle: 'Penargetan Lokasi yang Tepat',
      description:
        'Kami menyediakan layanan penargetan lokasi yang dapat membantu Anda mencapai target audiens.',
    },
  ];

  return (
    <section className="our-services" id="services">
      <Text
        size="subheader"
        content="LAYANAN KAMI"
        className="our-services-title"
      />
      <div className="service-container">
        {servicesData.map((service) => (
          <CardServices
            key={service.id}
            imageSrc={service.imageSrc}
            subtitle={service.subtitle}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
