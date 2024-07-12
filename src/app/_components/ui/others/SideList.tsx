"use client";
import { ArrowLeft, ChevronLeft, ChevronRight, ShoppingBag, Tag, User2, X } from 'lucide-react';
import styles from './styles.module.scss'
import Link from 'next/link';
import { useState } from 'react';
import { useScrollBlock } from '@/app/hooks/useFixedScroll';
import { navigationData } from '@/app/_data/headerStaticData';



const AccountNestedList = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
    return (
        <div style={{
            left: isOpen ? "0" : "100%",
        }} className={styles.accountNestedList}>
            <h3 className={styles.close} onClick={onClose}><ChevronLeft /> All</h3>
            <h3 className={styles.username}>vnun</h3>
            <div className={styles.links}>
                <Link href={""}>Profile</Link>
                <Link href={""}>Orders</Link>
                <Link href={""}>Bag</Link>
                <Link href={""}>Account Settings</Link>
                <Link href={""}>Log Out</Link>
            </div>
        </div>
    )
}

const CategoryNestedList = ({isOpen, onClose,onselectCatigory,onThirdNestedListOpen}: {isOpen: boolean, onClose: () => void, onselectCatigory: (value: number) => void, onThirdNestedListOpen: () => void}) => {
    return (
        <div className={styles.categoryNestedList} style={{
            left: isOpen ? "0" : "100%",
        }}>
            <h3 className={styles.close} onClick={()=>{onClose()}}><ChevronLeft /> All</h3>
            <div className={styles.links}>
                {navigationData[1].nested?.map((navigation, index) => {
                    return (
                        <h3 key={index} onClick={() => {onselectCatigory(index), onThirdNestedListOpen()}}>{navigation.label} <ChevronRight /></h3>
                    )
                })}
            </div>
        </div>
    )

}
const ThirdNestedCategoryList = ({onClose, isOpen, selectedCatigory}: {onClose: () => void, isOpen: boolean, selectedCatigory: number}) => {
    return (
        <div className={styles.thirdNestedList} style={{
            transition: "all 0.3s ease",
            left: isOpen ? "0" : "100%",
        }}> 
            <h3 className={styles.close} onClick={() => (onClose())}><ChevronLeft /> {navigationData[1].nested?.[selectedCatigory].label}</h3>
            <div className={styles.links}>
                {navigationData[1].nested?.[selectedCatigory].nested?.map((navigation, index) => {
                    return (
                        <Link key={index} href={navigation.href}>{navigation.label} <ChevronRight /></Link>
                    )
                })}
            </div>
        </div>
    )
}


export default function SideList({isOpen, onClose}:{
    isOpen: boolean,
    onClose: () => void;
}){
    const [isLogged, setIsLogged] = useState(true);
    const [isAccountListOpen, setIsAccountListOpen] = useState(false);
    const [isCatigoryListOpen, setIsCatigoryListOpen] = useState(false);
    const [isThirdCatigoryOpen, setIsThirdCatigoryOpen] = useState(false);
    const [selectedCatigory, setSelectedCatigory] = useState(0);
    return (
        <div onClick={()=>{onClose()}} style={{
            backgroundColor: isOpen ? "rgba(0, 0, 0, 0.557)" : "transparent",
            backdropFilter: isOpen ? "blur(3px)" : "none",
            pointerEvents: isOpen ? "all" : "none"
        }} className={styles.sideListWrapper}>
            <div onClick={(e:any)=>{
                e.stopPropagation();
            }} className={styles.sideList} style={{
                left: isOpen ? "0" : "-100%",
            }}>
                <AccountNestedList isOpen={isAccountListOpen} onClose={() => {setIsAccountListOpen(false)}} />
                <CategoryNestedList onThirdNestedListOpen={() => {setIsThirdCatigoryOpen(true)}} onselectCatigory={setSelectedCatigory} isOpen={isCatigoryListOpen} onClose={() => {setIsCatigoryListOpen(false)}} />
                <ThirdNestedCategoryList onClose={() => {setIsThirdCatigoryOpen(false)}} isOpen={isThirdCatigoryOpen} selectedCatigory={selectedCatigory} />
                <div className={styles.top}>
                    <div className={styles.header}>
                        <span onClick={()=>{onClose()}} className={styles.close}><X /></span>
                    </div>
                    <h3 className={styles.account} onClick={() => {setIsAccountListOpen(true)}}><span><User2 /> Hi, vnun</span> <ChevronRight /></h3>
                    <div className={styles.links}>
                        {navigationData.map((navigationData, index)=>{
                            if (navigationData.isCategory) {
                                return <h3 key={index} onClick={() => {setIsCatigoryListOpen(true)}}>{navigationData.label} <ChevronRight /></h3>;
                            } else {
                                return <Link key={index} href={navigationData.href}>{navigationData.label} <ChevronRight /></Link>;
                            }
                        })}
                        {!isLogged && <Link href={''}>Login <ChevronRight /></Link>}
                        {!isLogged && <Link href={''}>Register <ChevronRight /></Link>}
                    </div>
                </div>
                {isLogged && <div className={styles.fastExtentions}>
                    <Link href={''}>Bag <ShoppingBag /><span className={styles.bagCount}>3</span></Link>
                    <Link href={''}>Orders <Tag /></Link>
                </div>}
            </div>
        </div>
    )
}