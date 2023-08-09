import Separator from "../separator/Separator"
import styles from "./VerticalIntro.module.css"

export default function VerticalIntro () {
  return (
    <section className={styles.section}>
      <span>MTR Philosophy</span>
      <h2>This is our take on innovation</h2>
      <Separator width={7} height={.23} />
      <p>Technology is our passion. It’s our lifestyle. We love what we do. And we love people who love what we do, too. If you love hardware as much as us, then you’ll understand that this is just the start of an incredible journey on technology. And whether you’re a MTR Hardware Owner or a Charter guest, what matters most is a device's ability to bring you extraordinary, once-in-a-lifetime experiences.</p>
    </section>
  )
}