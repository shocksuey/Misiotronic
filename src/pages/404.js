import Link from "next/link";
import styles from "./404.module.css"
export default function Custom404() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.window}>
          <img 
            src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg"  
            alt="error 404"
            style={{}}
          />
          <Link href={"/"}>
            <h1>404 - Page Not Found</h1>
            <span> Click to go home </span>
          </Link>
        </section>
      </main>
    </>
  )
}