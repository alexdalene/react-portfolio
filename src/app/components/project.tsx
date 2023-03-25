import styles from './project.module.scss'
import Image from 'next/image'

function MakeProject({ type, title, description1, description2, url, gitLink, webLink}: { type: string, title: string, description1: string, description2: string, url: string, gitLink: string, webLink: string}) {
    return (
    <section className={styles.project}>
        <h4 className={styles.type}>{type ? type : "Default type"}</h4>
        <h3 className={styles.title}>{title ? title : "Default title"}</h3>
        <p className={styles.description}>{description1 ? description1 : "Default description"}</p>
        <p className={styles.description}>{description2 ? description2 : "Default description"}</p>
        <hr className={styles.line}/>
        <Image className={styles.image} src={url} alt="" width='300' height='300'/>
        <div className={styles.links}>
            <a href={gitLink} target='_blank'>GitHub</a>
            <a href={webLink} target='_blank'>Website</a>
        </div>
    </section>
    )
}

export default function Project() { 
    return (
        <div className={styles.container}>
        <MakeProject type='EXAM' 
        title='Science&nbsp;Museum' 
        description1='Exam through school. We had to follow a few requirements, like text and content - but had full control over design.' 
        description2='I decided to go with a retro-futuristic look. I really wanted to challenge myself on this project.'
        url='/images/science-museum.jpg'
        gitLink='https://github.com/alexdalene/exam-des22'
        webLink='https://ad-science-museum.netlify.app/'
        ></MakeProject>

        <MakeProject type='PROJECT' 
        title='Rainydays' 
        description1='This was our very first project using HTML and CSS. We later updated it to include REST API’s, making the products “real”.' 
        description2='Simplistic, modern and calming design - with a  focus on easy navigation.'
        url='/images/rainydays.jpg'
        gitLink='https://github.com/alexdalene/rainydays-cms'
        webLink='https://rainydays-cms-ad.netlify.app/'
        ></MakeProject>

        <MakeProject type='PROJECT' 
        title='LotR&nbsp;API' 
        description1='First real project I used REST API’s with. Found a free Lord of the Rings API that had almost everything I wanted.' 
        description2='Went for a more modern-sleek look, inspired by material-design and GitHub.'
        url='/images/lotr-api.jpg'
        gitLink='https://github.com/alexdalene/api-course-assignment'
        webLink='https://lotr-assignment.netlify.app/'
        ></MakeProject>
        </div>
    )
}