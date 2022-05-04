import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

let state = {
  uname : "",
  psw: "",
  type: ""
}

let handleChange = e =>{
  switch(e.target.name){
    case "utype": state.type = e.target.value; 
      break;  
    
    case "uname": state.uname = e.target.value; 
      break;

    case "psw": state.psw = e.target.value;

  }
}

let handleSubmit = async e => {
  e.preventDefault();
  let config = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json' 
      },
      body: JSON.stringify(state)
  }

  let r = await fetch ("http://localhost:3000/api/student/save",config)
  console.log(r)
}

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>register</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="radio" id="tchr" name="utype" value="teacher" onClick={handleChange}></input>
                <label htmlFor="tchr">Teacher</label><br></br>
                <input type="radio" id="stud" name="utype" value="student" onClick={handleChange}></input>
                <label htmlFor="stud">Student</label><br></br>
            </div>
            <div>
                <label>user:</label>
                <input type="text" id="uname" name="uname" onChange={handleChange}></input>
            </div>
            <div>
                <label>password:</label>
                <input type="text" id="psw" name="psw" onChange={handleChange}></input>
            </div>
            <div>
                  <button type="primary">register</button>
            </div>
        </form>
      </main>

    </div>
  )

}
