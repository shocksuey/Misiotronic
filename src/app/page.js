'use client'

import HomeCard from '@/components/homeCard/HomeCard'
import styles from './page.module.css'
import cardsList from '../mocks/cards.json'
import Intro from '@/components/introduction/Intro'

export default function Home() {

  const { cards } = cardsList
  return (
      <main className={styles.main}>
        <div className="homeContent">     
          <Intro
            title={"Explore Our Products"}
            subtitle={"Experience electronics in an exceptional way. Experience MTR."}
          />
          <div className={styles.cardsCont}>
            {
              cards.map(({ title, subtitle, text, image }) => 
                <HomeCard
                  title={title}
                  subtitle={subtitle}
                  text={text}
                  image={image}
                  key={title + subtitle}
                />
              )
            }
          </div>  
        </div>
      </main>
  )
}