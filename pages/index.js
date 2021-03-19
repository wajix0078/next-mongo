import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [name, setName] = useState(null)

  const handleNameChange = (e) => {
    setName(e.target.value)


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    window.location.href = `/${name}`
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>MERN SKill Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form >
        <label>Name: </label>
        <input type="text" onChange={handleNameChange} ></input>
        <br></br>
        <br></br>
        <input value="Create" type="submit" onClick={handleSubmit} ></input>
      </form>

    </div>
  )
}
