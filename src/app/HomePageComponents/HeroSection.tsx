"use client";
import styles from './styles.module.scss'
import fasion1 from '/public/main_background.jpg'
import fasion2 from '/public/imgs/fasion2.jpg'
import fasion5 from '/public/imgs/fasion5.jpg'
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBasketIcon, Sparkle } from 'lucide-react';


export default function HeroSection({display}: {display: boolean}) {
    useEffect(() => {
        console.log(display)
    },[display])
    return (
        <div style={{display: display ? 'flex' : 'none'}} className={styles.heroSection}>
            <div className={styles.leftCard}>
                <div className={styles.imageContainer}>
                    <Image  src={fasion1} alt="Hero Section" />
                    <div className={styles.text}>
                       <h3>Embrace your individuality by defining your own style. Let fashion be a canvas for your self-expression, not a constraint.</h3>
                    </div>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.topImage}>
                    <Image src={fasion5} alt="Hero Section" />
                    <div className={styles.overLay}>
                        <h2>Aura</h2>
                        <p>Discover the perfect blend of fashion and elegance at Aura.</p>
                    </div>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.btnsBox}>
                        <h3>Join the Aura community and let fashion inspire you.</h3>
                        <div className={styles.btns}>
                            <Link href={'/'} className={styles.btn}>
                                <span className={styles.main}>Shop Now <ShoppingBasketIcon /></span>
                                <span className={styles.primary}>Shop Now <ShoppingBasketIcon /></span>
                            </Link>
                            <Link href={'/'} className={styles.btn}>
                            <span className={styles.main}>Join Now <Sparkle /></span>
                            <span className={styles.primary}>Join Now <Sparkle /></span>
                            </Link>
                        </div>
                        <p>Registration is completely free.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}