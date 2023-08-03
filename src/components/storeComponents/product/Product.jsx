import styles from "./Product.module.css"

export default function Product ({ title, info, price, pic }) {
  return (
    <>
      <article 
        className={styles.product}
        style={{  backgroundImage: `url(${pic})` }}  
      >
        <div className={styles.productOverlay}></div>
        <h3>{ title }</h3>
        <div className={styles.separator}></div>
        <div className={styles.info}>
          <span>{info.prop1}</span>
          <span>{info.prop2}</span>
          <span>{info.prop3}</span>
          <span>{info.prop4}</span>
        </div>
        <span className={styles.price}>{ price }</span>
      </article>
    </>
  )
}