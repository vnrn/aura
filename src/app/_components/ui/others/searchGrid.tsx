"use client";
import { Eraser, Search, X } from 'lucide-react';
import Link from 'next/link';
import styles from './styles.module.scss'
import { useEffect, useRef, useState } from 'react';

interface IProductSearchCard {
    title: string;
    image: string;
    hasOffer: boolean;
    offerPercent: number;
    currentPrice: number;
    originalPrice: number;
}

export default function SearchGrid({isOpen, onClose}:{
    isOpen: boolean;
    onClose: () => void
}) {
    const [searchValue, setSearchValue] = useState('');
    const [gotResponse, setGotResponse] = useState(true);
    const [keywords, setKeywords] = useState(["women", "women tops", "women dresses", "men pants", "men T-shirts"]);
    const [products, setProducts] = useState([{
        title: "modern dress",
        image: "https://sa.hm.com/assets/styles/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/image-thumb__8142271__product_listing/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        hasOffer: true,
        offerPercent: 10,
        currentPrice: 19.99,
        originalPrice: 29.99
    },
    {
        title: "modern dress",
        image: "https://sa.hm.com/assets/styles/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/image-thumb__8142271__product_listing/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        hasOffer: false,
        offerPercent: 0,
        currentPrice: 30.00,
        originalPrice: 30.99
    },
    {
        title: "modern dress",
        image: "https://sa.hm.com/assets/styles/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/image-thumb__8142271__product_listing/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        hasOffer: false,
        offerPercent: 0,
        currentPrice: 30.00,
        originalPrice: 30.99
    },
    {
        title: "modern dress",
        image: "https://sa.hm.com/assets/styles/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/image-thumb__8142271__product_listing/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        hasOffer: false,
        offerPercent: 0,
        currentPrice: 30.00,
        originalPrice: 30.99
    },
    {
        title: "modern dress",
        image: "https://sa.hm.com/assets/styles/HNM/18556040/024e2172c380fa86f77703b32c04a43459a373b6/1/image-thumb__8142271__product_listing/024e2172c380fa86f77703b32c04a43459a373b6.jpg",
        hasOffer: false,
        offerPercent: 0,
        currentPrice: 30.00,
        originalPrice: 30.99
    }]);

    const searchInputRef:any = useRef(null)
    useEffect(() => {
        if(isOpen) searchInputRef.current.focus()
    }, [isOpen])
    const ProductSearchCard = ({
        title,
        image,
        hasOffer,
        offerPercent,
        currentPrice,
        originalPrice
    }: IProductSearchCard)=>{
        return (
            <Link href={''} className={styles.productCard}>
                <div className={styles.image}>
                    <img src={image} alt={title} />
                    {hasOffer && <span>{offerPercent}% OFF</span>}
                </div>
                <div className={styles.info}>
                    <h3>Shoulder-pad polo dress Shoulder-pad polo dress</h3>
                    <p className={styles.price}><span className={`${styles.originalPrice} ${hasOffer ? styles.oldPrice : ''}`}>SAR {originalPrice}</span> {hasOffer && <span className={styles.offerPrice}>SAR {currentPrice}</span>}</p>
                    {hasOffer && <span className={styles.save}>(saves {offerPercent}%)</span>}
                </div>
            </Link>
        )
    }

    return (
        <div onClick={()=>{onClose()}} style={{display: isOpen ? 'flex' : 'none'}} className={styles.searchGrid}>
            <div style={{
                height: gotResponse ? '600px' : "fit-content",
            }} onClick={(e) => {e.stopPropagation()}} className={styles.grid}>
                <div className={styles.header}>
                    <Link className={styles.logo} href={'/'}>Aura</Link>
                    <div className={styles.searchInput}>
                        {searchValue && <span onClick={() => setSearchValue('')}><Eraser /></span>}
                        <input ref={searchInputRef} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search" />
                        <span><Search /></span>
                    </div>
                    <span className={styles.close} onClick={() => {onClose()}}><X /></span>
                </div>
                <div className={styles.content}>
                    {!gotResponse ? <div className={styles.defaultKeywords}>
                        <h3>Popular Search Terms</h3>
                        <Link href={'/'}>Women tops</Link>
                        <Link href={'/'}>Women tousers</Link>
                        <Link href={'/'}>Men T-shirts</Link>
                        <Link href={'/'}>Women Dresses</Link>
                    </div> :
                    <div className={styles.results}>
                        <div className={styles.keywords}>
                            <h3>Top Suggested</h3>
                            {keywords.map((keyword, index) => (
                                <Link key={index} href={'/search/' + keyword + ''}>{keyword}</Link>
                            ))}
                        </div> 
                        <div className={styles.products}>
                            {products.map((product, index) => (
                                <ProductSearchCard key={index} {...product} />
                            ))}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}