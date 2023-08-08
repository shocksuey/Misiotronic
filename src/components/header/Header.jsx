import styles from './Header.module.css'
import Nav from '../Nav/Nav'

export default function Header() {

  return (
    <header className={styles.headerCont}>
      <div className={styles.logoCont}>
        <h1 className={styles.logo}>MTR</h1>
        <h2>Misiotronica</h2>
      </div>
      <Nav />
    </header>
  )
}