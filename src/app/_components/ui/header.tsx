"use client";
import Link from 'next/link';
import HumbergerSwitch from './others/humbSwitch';
import styles from './styles.module.scss'
import { navigationData } from '@/app/_data/headerStaticData';
import { Search, ShoppingBag, User2Icon } from 'lucide-react';
import { useState } from 'react';


export default function Header() {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.logoBox}>
                <HumbergerSwitch onChange={()=>{}} />
                <h2>Aura</h2>
                <nav className={styles.navigation}>
                    {navigationData.map((navigationData, index)=>(
                        <Link key={index} className={navigationData.isCategory ? styles.categoryLink : undefined} href={navigationData.href}>{navigationData.label}</Link>
                    ))}
                </nav>
            </div>
            <div className={styles.right}>
                <Link className={styles.cartLink} href={'/cart'}><span>cart</span> <ShoppingBag /></Link>
                {!isLogged && <div className={styles.noAccount}>
                    <Link href={'/auth'}>login</Link>
                    <Link href={'/auth'}>register</Link>
                </div>}
                <div className={styles.account}>
                    <Link href={'/auth'}><span>account</span> <User2Icon /></Link>
                    <div className={styles.dropdown}>
                        <h3>hi, user</h3>
                        <Link href={'/account'}>account info</Link>
                        <Link href={'/account'}>orders</Link>
                        <Link href={'/account'}>logout</Link>
                    </div>
                </div>
                <div className={styles.searchBox}>
                    <div className={styles.searchInput}>
                        <input type="text" placeholder='search' />
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    );
}