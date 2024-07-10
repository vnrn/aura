"use client";
import styles from './styles.module.scss'

export default function HumbergerSwitch({onChange}:{
    onChange: (value: boolean) => void
}) {
    return (
       <div className={styles.humbSwitch} onClick={() => onChange(!onChange)}>
        <span></span>
        <span></span>
       </div>
    )
}