import styles from './section.module.scss'

export default function Section() {
    return (
        <section className={styles.section}>
            <div className={styles.templates}>
                <img src="/svg/first-template.svg" alt="" />
                <img src="/svg/second-template.svg" alt="" />
                <img src="/svg/third-template.svg" alt="" />
            </div>
            <h2 className={styles.title}>Take a look at <br /> my projects.</h2>
        </section>
    )
}

