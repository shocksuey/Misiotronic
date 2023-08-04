import styles from "./NavFooter.module.css"

export default function NavFooter () {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Store</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Privacy</li>
      </ul>
      <div className={styles.socialMedia}>
        <a href="/">💬</a>
        <a href="/">🐦</a>
      </div>
    </div>
  )
}