import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tests</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
            <h6>TESTS</h6>
            <Link href="/login">
                  <a type="primary">logout</a>
                </Link>
      </main>

    </div>
  )

}