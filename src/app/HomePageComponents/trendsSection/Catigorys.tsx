"use client";
import styles from './sytles.module.scss'
import fasion2 from '/public/imgs/fasion2.jpg'
import fasion6 from '/public/imgs/fasion6.jpg'
import fasion7 from '/public/imgs/fasion7.jpg'
import Image from 'next/image';
import Link from 'next/link';
export default function CatigorysSection() {
    return (
        <div className={styles.catigorysSection}>
            <h2 className={styles.title}>More to Explore</h2>
            <div className={styles.cardsGrid}>
                <div className={styles.catigoryCard}> 
                    <div className={styles.imageContainer}>
                        <Image data-scroll data-scroll-speed={0.07} src={fasion2} alt="women" />
                    </div>
                    <Link href="">
                        <span className={styles.main}>Women</span>
                        <span className={styles.primary}>Women</span>
                    </Link>
                </div>
                <div className={styles.catigoryCard}> 
                    <div className={styles.imageContainer}>
                        <Image data-scroll data-scroll-speed={0.07} src={fasion6} alt="men" />
                    </div>
                    <Link href="">
                        <span className={styles.main}>Men</span>
                        <span className={styles.primary}>Men</span>
                    </Link>
                </div>
                <div className={styles.catigoryCard}> 
                    <div className={styles.imageContainer}>
                        <Image data-scroll data-scroll-speed={0.07} src={fasion7} alt="sales" />
                    </div>
                    <Link href="">
                        <span className={styles.main}>Sale</span>
                        <span className={styles.primary}>Sale</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}