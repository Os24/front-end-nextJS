
import fetch from "isomorphic-unfetch";
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
   return (
    <div className={styles.container}>
      <Link href="/store"><a>this page!</a></Link>
      </div>

  )
 
  }


