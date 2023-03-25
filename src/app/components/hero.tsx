'use client'
import styles from './hero.module.scss'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <motion.section className={styles.hero}>
            <motion.h1 className={styles.title} initial={{ opacity: 0}} animate={{ opacity: 1}} >Hello <br /> I&apos;m&nbsp;Alex.</motion.h1>
            <motion.hr className={styles.line} initial={{ width: 0, opacity: 0}} animate={{ width: 205, opacity: 1 }} transition={{ delay: 0.2}}/>
            <motion.p className={styles.paragraph} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>I am a <em>frontend-developer</em> with lots of <em>graphic design</em> experience.</motion.p>
        </motion.section>
    )
}