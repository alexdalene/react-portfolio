import Hero from './components/hero'
import Section from './components/section'
import Project from './components/project'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}></div>
      <Hero />
      <Section />
      <Project />
    </main>
  )
}
