import Hero from './components/hero'
import Section from './components/section'
import Project from './components/project'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Section />
      <Project />
    </main>
  )
}
