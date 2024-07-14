"use client";
import Link from 'next/link';
import styles from './styles.module.scss'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CarouselProductCard = (props:any) => {
    const router = useRouter();
    const [isDragging, setIsDragging] = useState(false);
    const [randomImageIndex, setRandomImageIndex] = useState(0);
    useEffect(() => {
        setRandomImageIndex(Math.floor(Math.random() * 6)); // Generates a random number between 0 and 5
    }, []);
    const handleMouseDown = () => {
        setIsDragging(false);
    };

    const handleMouseMove = () => {
        setIsDragging(true);
    };

    const handleClick = (e: any) => {
        if (!isDragging) {
            router.push(`/product/${props._id}`);
        }
    };
    return (
            <div 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            className={styles.productCard}>
                <img src={props.images[0].imageUrl} alt="product" />
                <div className={styles.productInfo}>
                    <h3>{props.product_title}</h3>
                    <p>SAR {props.price.base_price}</p>
                </div>
            </div>
    )
}

const CarouselProductSkeleton = () => {
    return (
        <div className={styles.productSkeleton}>
            <div className={styles.productImg}>

            </div>
            <div className={styles.productInfo}>
                <h3></h3>
                <p></p>
            </div>
        </div>
    )
}

export { CarouselProductCard, CarouselProductSkeleton };