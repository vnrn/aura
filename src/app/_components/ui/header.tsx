"use client";
import Link from 'next/link';
import HumbergerSwitch from './others/humbSwitch';
import styles from './styles.module.scss'
import { navigationData } from '@/app/_data/headerStaticData';
import { ChevronDown, Search, ShoppingBag, User2Icon } from 'lucide-react';
import { useEffect, useLayoutEffect, useState } from 'react';
import SearchGrid from './others/searchGrid';
import SideList from './others/SideList';


export default function Header() {
    const [isLogged, setIsLogged] = useState(false);
    const [isSearchListOpen, setIsSearchListOpen] = useState(false);
    const [isSideListOpen, setIsSideListOpen] = useState(false)

    const [scrollDirection, setScrollDirection] = useState(0); // 1 for down, -1 for up

  useLayoutEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection(1);
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection(-1);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [headerVis, setHeaderVis] = useState(true)
  useEffect(() => {
        if(scrollDirection === 1){
            setHeaderVis(false) 
        }else{
            setHeaderVis(true)
        }
  },[scrollDirection])
    return (
        <header style={{
            top: headerVis ? '0' : '-100px',
        }} className={styles.header}>
            <SideList isOpen={isSideListOpen} onClose={()=>{setIsSideListOpen(false)}}/>
            <div className={styles.logoBox}>
                <HumbergerSwitch onChange={()=>{setIsSideListOpen(true)}} />
                <h2>Aura</h2>
                <nav className={styles.navigation}>
                    {navigationData.map((navigationData, index)=>(
                        <Link key={index} className={navigationData.isCategory ? styles.categoryLink : undefined} href={navigationData.href}>{navigationData.label} {navigationData.isCategory && <ChevronDown />}</Link>
                    ))}
                    <div className={styles.categoryList}>
                        {navigationData[1].nested?.map((navigation, index)=>{
                            return (
                                <div className={styles.cell} style={{
                                    animationDelay: `${index * 0.1}s`
                                }}>
                                    <h3>{navigation.label}</h3>
                                    <div className={styles.links}>
                                        {navigation.nested?.map((nested, index)=>{
                                            return (
                                                <Link key={index} href={nested.href}>{nested.label}</Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </nav>
            </div>
            <div className={styles.right}>
                <Link className={styles.cartLink} href={'/cart'}><span>cart</span> <span className={styles.cartCount}>3</span> <ShoppingBag /></Link>
                {!isLogged && <div className={styles.noAccount}>
                    <Link href={'/auth'}>login</Link>
                    <Link href={'/auth'}>register</Link>
                </div>}
                {isLogged &&<div className={styles.account}>
                    <Link className={styles.accountLink} href={'/auth'}><span>account</span> <User2Icon /></Link>
                    <div className={styles.dropdown}>
                        <h3>hi, user</h3>
                        <Link href={'/account'}>account info</Link>
                        <Link href={'/account'}>orders</Link>
                        <Link href={'/account'}>logout</Link>
                    </div>
                </div>}
                <div className={styles.searchBox}>
                    <div className={styles.searchInput}>
                        <input onFocus={()=>{setIsSearchListOpen(true)}} type="text" placeholder='search' />
                        <span onClick={()=>{setIsSearchListOpen(true)}}><Search /></span>
                    </div>
                    <SearchGrid isOpen={isSearchListOpen} onClose={()=>{setIsSearchListOpen(false)}} />
                </div>
            </div>
        </header>
    );
}