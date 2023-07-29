import styles from './HomeCard.module.css'
import Image from "next/image"

export default function HomeCard () {
  return (
    <>
      <article className="homeCard">
        <div className="textContent">
          <span>Achieving the Unbelievable</span>
          <h3>Yacht Charter</h3>
          <div className={styles.separator}></div>
          <p>
            The joy of charter lies in the uplifting moments 
            experienced throughout. From the weird and wild, to 
            the all-out extraordinary, Y.CO will help you create 
            memories so remarkable they’ll stay with you for a lifetime.
          </p>
          <button>Explore Electronics</button>
        </div>
        <Image 
          className={styles.imageContent} 
          alt={""} 
          src={""}
        />    
      </article>
    </>
    
  )
}