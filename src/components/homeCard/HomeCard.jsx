import styles from './HomeCard.module.css'
import Image from "next/image"
import Link from 'next/link'

export default function HomeCard ({ title, subtitle, text, image }) {
  return (
    <>
      <article className={styles.homeCard}>
        <div className={styles.textContent}>
          <span className={styles.subtitle}>{subtitle}</span>
          <h3 className={styles.h3}>{title}</h3>
          <div className={styles.separator}></div>
          <p className={styles.text}>{text}</p>
          <Link className={styles.button} href={"/store"}>Explore Electronics</Link>
        </div>
        <Image 
          className={styles.image} 
          alt={""} 
          src={image}
          width={800}
          height={800}
        />    
      </article>
    </>
    
  )
}