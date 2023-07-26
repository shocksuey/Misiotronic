import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.videoRectangle}>
        <video className={styles.video} autoPlay loop muted playsInline>
          <source src={'../vid01.mp4'} type={"video/mp4"} />
          {/* Agrega otras fuentes del video aquí si es necesario */}
        </video>
      {/* Contenido adicional que se superpone al video si lo deseas */}
    </div>
    
    </main>
  )
}
