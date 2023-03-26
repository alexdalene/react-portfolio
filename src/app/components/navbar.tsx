'use client'
import styles from './navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.links}>
                <li>
                    <Link href='#'>CONTACT</Link>
                </li>
                <li>
                    <Link href='#'>RESUME</Link>
                </li>
            </ul>
        </nav>
    )
}