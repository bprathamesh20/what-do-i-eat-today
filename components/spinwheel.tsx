'use client';

import React, { useState } from 'react';
import { useClient } from '../hooks/useClient';
import { ImageProps } from 'next/image';
import { SpinWheelProps, WheelData } from '@/utils/types';


const SpinWheel: React.FC<SpinWheelProps> = ({ data }) => {
  const isClient = useClient();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  // We're importing Wheel here to ensure it's only loaded on the client side
  const { Wheel } = require('react-custom-roulette');

  return (
    <div className='grid p-24'>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button
        onClick={handleSpinClick}
        className='mt-12 px-6 py-3 bg-red-400 rounded-md text-lg shadow-sm text-white font-bold tracking-wider transition duration-300 ease-in-out transform hover:bg-red-300 hover:scale-105 active:bg-red-600 active:scale-95'
      >
        SPIN
      </button>
    </div>
  );
};

export default SpinWheel;