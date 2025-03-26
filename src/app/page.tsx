'use client';
import { useState } from 'react';
import SplashScreen from '../components/SplashScreen'; // adjust path as needed
import MainSite from '../components/MainSite'; // your current content

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain && <SplashScreen onFinish={() => setShowMain(true)} />}
      {showMain && <MainSite />}
    </>
  );
}
