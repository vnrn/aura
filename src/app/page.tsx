"use client";
import styles from './home.module.scss'
import Image from "next/image";
import BgImage from '/public/main_background.jpg'
import HeroSection from './HomePageComponents/HeroSection';

import LocomotiveScroll from 'locomotive-scroll'
import { useEffect, useLayoutEffect, useState } from 'react';
import PreLoader from './preloader/preLoader';
import TrendsSection from './HomePageComponents/trendsSection/Trends';
import CatigorysSection from './HomePageComponents/trendsSection/Catigorys';


export default function Home() {
  const [preloaderEnd, setPreloaderEnd] = useState(true);
  // const [pageLoad, setPageLoad] = useState(false);
  // const [achivePreloaderProgress, setAchivePreloaderProgress] = useState(false);
  useLayoutEffect(() => {
          const scroll = new LocomotiveScroll({
            lenisOptions: {
              duration: 0.3,
            }
          });
  },[])
  // useEffect(() => {
  //   document.onreadystatechange = () => {
  //     if (document.readyState === "complete") {
  //       setPageLoad(true)
  //     }
  //   }
  // },[])
  // useEffect(() => {
  //   if (achivePreloaderProgress && pageLoad) {
  //     const scroll = new LocomotiveScroll();
  //     setPreloaderEnd(true)
  //   }
  // },[preloaderEnd, achivePreloaderProgress])
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (!preloaderEnd) {
  //       setPreloaderEnd(true);
  //     }
  //   }, 11000);

  //   return () => clearTimeout(timer);
  // }, [preloaderEnd]);
  return (
    <main className={styles.main}>
      {/* <PreLoader onComplete={() => {setAchivePreloaderProgress(true)}} end={preloaderEnd}/> */}
        <HeroSection display={preloaderEnd} />
        <TrendsSection />
        <CatigorysSection />
    </main>
  );
}
