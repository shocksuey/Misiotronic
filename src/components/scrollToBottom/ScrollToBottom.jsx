import styles from "./ScrollToBottom.module.css"
import { useState } from "react"

export default function ScrollToBottom () {
  
  const [visible, setVisible] = useState(true)
  
  function handleClick () {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    setVisible(!visible)
  }
  return (
    visible ?
    <>
      {
        <div onClick={handleClick} className={styles.cont}>
          🔽
        </div>
      }
    </>
    : null
  )
}