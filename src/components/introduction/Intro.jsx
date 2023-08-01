import styles from './Intro.module.css'

export default function Intro ({title, subtitle}) {
  return(
    <div className={styles.titleCont}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.separator}></div>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  )
}