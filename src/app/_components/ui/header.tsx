"use client";
import HumbergerSwitch from './others/humbSwitch';
import styles from './styles.module.scss'
export default function Header() {
    return (
        <header >
            <div className={styles.logoBox}>
                <h2>Aura</h2>
                <HumbergerSwitch onChange={() => { }} />
            </div>
            <div>
                <nav className={styles.navigation}>
                    
                </nav>
            </div>
        </header>
    );
}