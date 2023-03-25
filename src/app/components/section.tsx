import styles from './section.module.scss'
import Image from 'next/image'

export default function Section() {
    return (
        <section className={styles.section}>
            <div className={styles.templates}>
                <Image src="/svg/first-template.svg" alt="" width='200' height='200'/>
                <Image src="/svg/second-template.svg" alt="" width='200' height='200'/>
                <Image src="/svg/third-template.svg" alt="" width='200' height='200'/>
            </div>
            <h2 className={styles.title}>Take a look at <br /> my projects.</h2>
        </section>
    )
}

