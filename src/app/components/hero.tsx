'use client'
import styles from './hero.module.scss'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <motion.section className={styles.hero}>
            <motion.header className={styles.header}>
                    <motion.h1 className={styles.title} initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: '0%' }} transition={{ delay: 1.1 }} >Hello <br /> I&apos;m&nbsp;Alex.</motion.h1>
                    <motion.hr className={styles.line} initial={{ width: '0%', opacity: 0}} animate={{ width: '100%', opacity: 1 }} transition={{ delay: 1.1, duration: 1 }}/>
                    <motion.p className={styles.paragraph} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>I am a <em>frontend-developer</em> with <em>graphic design</em> experience.</motion.p>
            </motion.header>
        </motion.section>
    )
}