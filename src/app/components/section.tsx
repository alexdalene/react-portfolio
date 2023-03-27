'use client'
import styles from './section.module.scss'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    }
}

const children = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: {duration: 0.3} }
}

export default function Section() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"]
    })

    return (
        <motion.section className={styles.section} ref={ref} style={{ opacity: scrollYProgress }}>
          
            <motion.div className={styles.templates}
            variants={ container }
            initial='hidden' 
            whileInView='show'
            viewport={{ once: true, margin: '-100px 0px' }}>
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
            
        </motion.section>
    )
}

