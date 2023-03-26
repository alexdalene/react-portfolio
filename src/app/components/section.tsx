'use client'
import styles from './section.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      },
    }
}

const children = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
}

export default function Section() {
    return (
        <section className={styles.section}>
            <motion.div className={styles.templates}
            variants={ container }
            initial='hidden' 
            whileInView='show'
            viewport={{ once: true }}>
                <motion.div variants={ children }>
                <Image src="/svg/first-template.svg" alt="" width='200' height='200'/>
                </motion.div>
                <motion.div variants={ children }>
                <Image src="/svg/second-template.svg" alt="" width='200' height='200'/>
                </motion.div>
                <motion.div variants={ children }>
                <Image src="/svg/third-template.svg" alt="" width='200' height='200'/>
                </motion.div>
            </motion.div>
            <motion.h2 className={styles.title}
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }} 
            viewport={{ once: true }}>

                Take a look at <br /> my projects below.
                </motion.h2>
        </section>
    )
}

