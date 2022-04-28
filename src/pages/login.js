import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>login</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
            <div>
                <label>user name:</label>
                <input type="text" id="uname" name="uname"></input>
            </div>
            <div>
                <label>password:</label>
                <input type="text" id="psw" name="psw"></input>
            </div>
            <div>
                <Link href="/tests">
                  <button type="primary">login</button>
                </Link>
            </div>
            <div>
                <Link href="/register">
                  <a type="primary">register</a>
                </Link>
            </div>
      </main>

    </div>
  )

}
