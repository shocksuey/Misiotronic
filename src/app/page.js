import HomeCard from '@/components/homeCard/HomeCard'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.videoCont}> */}
        {/* <video className={styles.video} src={"/vid01.mp4"} style={{ width: "100vw" }}  autoPlay muted loop /> */}
        <div className={styles.homeContent}>
          <div className={styles.titleCont}>
            <h1 className={styles.homeTitle}>Explore Our Products</h1>
            <div className={styles.separator}></div>
            <h2 className={styles.homeSubTitle}>Experience electronics in an exceptional way. Experience MTR.</h2>
          </div>
          <HomeCard />
        </div>
      {/* </div> */}
    </main>
  )
}
