import styles from './Header.module.css'
import Nav from '../nav/Nav'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
      <Nav />
    </header>
  )
}