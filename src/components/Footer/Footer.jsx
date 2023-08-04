import styles from "./Footer.module.css"

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <h2>Let's stay in touch</h2>
      <div className={styles.separator}></div>
      <p>Sign up and be the first to hear about new-to-the-market yachts and exclusive opportunities.</p>
      <form>
        <div>
          <label htmlFor="nameInput">Name</label>
          <input type="text" name="nameInput" />
        </div>
        <div>
          <label htmlFor="emailInput">Email</label>
          <input type="email" name="emailInput" />
        </div>
        <button>Send</button>
      </form>
      <span>By submitting this form, I consent to receive newsletter and marketing offers accordingly to the Y.CO 
        <a href="/"> Privacy Policy.</a>
        You can unsubscribe anytime by clicking here.
      </span>
      <hr />
      <div></div>
    </footer>
  )
}