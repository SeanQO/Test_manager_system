import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>register</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
            <div>
              <form>
                <input type="radio" id="tchr" name="utype" value="Teacher"></input>
                <label for="tchr">Teacher</label><br></br>
                <input type="radio" id="stud" name="utype" value="Student"></input>
                <label for="stud">Student</label><br></br>
              </form>
            </div>
            <div>
                <label>user:</label>
                <input type="text" id="uname" name="uname"></input>
            </div>
            <div>
                <label>password:</label>
                <input type="text" id="psw" name="psw"></input>
            </div>
            <div>
                <Link href="/login">
                  <button type="primary">register</button>
                </Link>
            </div>
      </main>

    </div>
  )

}
