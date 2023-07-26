import styles from './Header.module.css'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <header className={styles.headerCont}>
      <h1 className={styles.logo}>MTR</h1>
      <Nav />
    </header>
  )
}