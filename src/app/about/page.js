import HomeCard from "@/components/homeCard/HomeCard"
import Intro from "@/components/introduction/Intro"
import VerticalIntro from "@/components/introduction/VerticalIntro"
import styles from "./page.module.css"
import cardsList from '@/mocks/cardsAboutUs.json'
import { lazy, Suspense, suspense } from 'react'

const LoadingFallback = () => <div>Loading...</div>;


export default function Contact () {
  
  const { cards } = cardsList

  return (
    <main className={styles.main}>
      <Intro
        title={"The Equipment Company"}
        subtitle={"This is more than a job. This is our lifestyle."}
      />
      <VerticalIntro />
      <div className={styles.cardsCont}>
            {
              cards.map(({ title, subtitle, text, image }) =>
                <Suspense 
                  fallback={<LoadingFallback />}
                  key={title + subtitle}
                > 
                  <HomeCard
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    image={image}
                    link={false}
                  />
                </Suspense>
              )
            }
          </div>  
    </main>
     
  )
}