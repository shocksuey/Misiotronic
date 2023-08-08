'use client'

import Intro from "@/components/introduction/Intro";
import ScrollToBottom from "@/components/scrollToBottom/ScrollToBottom";
import styles from "./page.module.css"

export default function Contact () {
  return (
    <div className={styles.Contact}>
      <Intro
        title={"Contact us"}
        subtitle={"Experience electronics in an exceptional way. Experience MTR."}
      />
      <ScrollToBottom />
    </div>
  )
}