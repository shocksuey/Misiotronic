import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            Home
          </a>
        </li>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            Products
          </a>
        </li>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            About
          </a>
        </li>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            Team
          </a>
        </li>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            Links
          </a>
        </li>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            Owner
          </a>
        </li>
      </ul>
    </nav>
  )

}