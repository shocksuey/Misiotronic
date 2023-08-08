'use client'

import styles from './page.module.css'
import cardsList from '../mocks/cards.json'
import Intro from '@/components/introduction/Intro'
import { lazy, Suspense, suspense } from 'react'
const HomeCard = lazy(() => import('@/components/homeCard/HomeCard'));
const LoadingFallback = () => <div>Loading...</div>;

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
                <Suspense 
                  fallback={<LoadingFallback />}
                  key={title + subtitle}
                > 
                  <HomeCard
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    image={image}
                  />
                </Suspense>
              )
            }
          </div>  
        </div>
      </main>
  )
}