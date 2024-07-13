"use client";
import { useEffect, useState } from 'react';
import styles from './styles.module.scss'


export default function PreLoader({end, onComplete }:{
    end: boolean,
    onComplete: () => void
}) {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);    
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(interval); 
                    return 100;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 150);

        return () => clearInterval(interval); 
    }, []);
    useEffect(() => {
        if (progress === 100) {
            onComplete();
        }
    }, [progress]);
    useEffect(() => {
        console.log(end)
    },[end])
    return (
        <div className={`${styles.preLoaderWrapper} ${end ? styles.end : ''}`}>
            <span>{progress.toFixed(0)}%</span>
        </div>
    );
}