import styles from './page.module.css'
import Header from '@/components/header/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  )
}
