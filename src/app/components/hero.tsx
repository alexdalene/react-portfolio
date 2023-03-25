import styles from './hero.module.scss'

export default function Hero() {
    return (
        <section className={styles.hero} >
            <h1 className={styles.title} >Hello <br /> I'm&nbsp;Alex.</h1>
            <p className={styles.paragraph}>I am a <em>frontend-developer</em> with lots of <em>graphic design</em> experience.</p>
        </section>
    )
}