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
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )

}