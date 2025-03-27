'use client';
import { useState } from 'react';
import SplashScreen from '../components/SplashScreen'; 
import Homepage from '../components/Home'; 

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain && <SplashScreen onFinish={() => setShowMain(true)} />}
      {showMain && <Homepage />}
    </>
  );
}
