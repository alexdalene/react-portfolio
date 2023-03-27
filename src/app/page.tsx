'use client'
import Hero from './components/hero'
import Section from './components/section'
import Project from './components/project'
import Navbar from './components/navbar'
import styles from './page.module.scss'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className={styles.main}>
      <motion.div className={styles.overlay} initial={{ height: '100lvh' }} animate={{ height: '0lvh' }} transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.5 }}></motion.div>
      <div className={styles.background}></div>
      <Navbar />
      <Hero />
      <Section />
      <Project />
    </main>
  )
}
