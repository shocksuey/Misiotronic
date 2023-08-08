import styles from "./Footer.module.css"

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <h2>Let's stay in touch</h2>
      <div className={styles.separator}></div>
      <p>Sign up and be the first to hear about new-to-the-market hardware and exclusive opportunities.</p>
      <form>
        <div>
          <label htmlFor="nameInput">Name</label>
          <input className={styles.input} type="text" name="nameInput" />
        </div>
        <div>
          <label htmlFor="emailInput">Email</label>
          <input type="email" name="emailInput" />
        </div>
        <button>Send</button>
      </form>
      <span>By submitting this form, I consent to receive newsletter and marketing offers accordingly to Misiotronica.
        <a href="/"> Privacy Policy.</a>
        You can unsubscribe anytime by <a href="/">clicking here.</a>
      </span>
      <hr />
      <div></div>
    </footer>
  )
}