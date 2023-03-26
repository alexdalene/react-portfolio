'use client'
import styles from './project.module.scss'
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
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const line = {
    hidden: { width: '0px', opacity: 0 },
    show: { width: '100%', opacity: 1 }
}

function MakeProject({ type, title, description1, description2, url, gitLink, webLink}: { type: string, title: string, description1: string, description2: string, url: string, gitLink: string, webLink: string}) {
    return (
    <motion.section className={styles.project} variants={ container } initial='hidden' whileInView='show' viewport={{ once: true }}>
        <motion.h4 className={styles.type} variants={ children } >{type ? type : "Default type"}</motion.h4>
        <motion.h3 className={styles.title} variants={ children } >{title ? title : "Default title"}</motion.h3>
        <motion.p className={styles.description} variants={ children } >{description1 ? description1 : "Default description"}</motion.p>
        <motion.p className={styles.description} variants={ children } >{description2 ? description2 : "Default description"}</motion.p>
        {/* <motion.hr className={styles.line} variants={ line } /> */}
        <motion.div className={styles.imagesContainer} variants={ children } >
        <Image className={styles.image} src={url} alt="" width='300' height='300'/>
        </motion.div>
        <motion.div className={styles.links} variants={ children } >
            <motion.a href={gitLink} target='_blank'>GitHub</motion.a>
            <motion.a href={webLink} target='_blank'>Website</motion.a>
        </motion.div>
    </motion.section>
    )
}

export default function Project() { 
    return (
        <div className={styles.container}>
        <MakeProject type='EXAM' 
        title='Science&nbsp;Museum' 
        description1='Exam through school. We had to follow a few requirements, like text and content - but had full control over design.' 
        description2='I decided to go with a retro-futuristic look. I really wanted to challenge myself on this project.'
        url='/images/science-museum.png'
        gitLink='https://github.com/alexdalene/exam-des22'
        webLink='https://ad-science-museum.netlify.app/'
        ></MakeProject>

        <MakeProject type='PROJECT' 
        title='Rainydays' 
        description1='This was our very first project using HTML and CSS. We later updated it to include REST API’s, making the products “real”.' 
        description2='Simplistic, modern and calming design - with a  focus on easy navigation.'
        url='/images/rainydays.png'
        gitLink='https://github.com/alexdalene/rainydays-cms'
        webLink='https://rainydays-cms-ad.netlify.app/'
        ></MakeProject>

        <MakeProject type='PROJECT' 
        title='LotR&nbsp;API' 
        description1='First real project I used REST API’s with. Found a free Lord of the Rings API that had almost everything I wanted.' 
        description2='Went for a more modern-sleek look, inspired by material-design and GitHub.'
        url='/images/lotr-api.png'
        gitLink='https://github.com/alexdalene/api-course-assignment'
        webLink='https://lotr-assignment.netlify.app/'
        ></MakeProject>
        </div>
    )
}