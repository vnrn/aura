"use client";

import Carousel from "@/app/_components/carousel/carousel";
import products from "@/app/_data/fakeProducts";
import styles from './sytles.module.scss'
export default function TrendsSection(){
    return (
        <div className={styles.trendsSection}>
            <h2 className={styles.title}>Latest & Greatest</h2>
            <Carousel data={products} />
        </div>
    )
}