'use client'

import HomeCard from '@/components/homeCard/HomeCard'
import styles from './page.module.css'
import cardsList from '../mocks/cards.json'
import useBlur from '@/hooks/useBlur'

export default function Home() {
  const blurValue = useBlur(20);

  const { cards } = cardsList
  return (
      <main className={styles.main}>

        <div className={styles.videoCont}>
          <video
            className={styles.video} 
            src={"/vid01.mp4"} 
            style={{ filter: `blur(${blurValue}px) brightness(0.7)`, width: "100vw" }}
            autoPlay muted loop
          />
        </div>

        <div className={styles.homeContent}>
          
          <div className={styles.titleCont}>
            <h1 className={styles.title}>Explore Our Products</h1>
            <div className={styles.separator}></div>
            <h2 className={styles.subtitle}>Experience electronics in an exceptional way. Experience MTR.</h2>
          </div>

          <div className={styles.cardsCont}>
            {
              cards.map(({ title, subtitle, text, image }) => 
                <HomeCard
                  title={title}
                  subtitle={subtitle}
                  text={text}
                  image={image}
                />
              )
            }
          </div>
          
        
        </div>
        

      </main>
  )
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
