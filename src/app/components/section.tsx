'use client'
import styles from './section.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Section() {
    return (
        <section className={styles.section}>
            <motion.div className={styles.templates} 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true, margin: '-200px 0px' }}>
                
                <Image src="/svg/first-template.svg" alt="" width='200' height='200'/>
                <Image src="/svg/second-template.svg" alt="" width='200' height='200'/>
                <Image src="/svg/third-template.svg" alt="" width='200' height='200'/>
            </motion.div>
            <motion.h2 className={styles.title}
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true, margin: '-200px 0px' }}>

                Take a look at <br /> my projects.
                </motion.h2>
        </section>
    )
}

