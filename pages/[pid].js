import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react';


const createNote = async (pid, b) => {

    try {
        console.log('PID in the create note', pid)
        let res = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pid: pid, b: b })
        })
        res = await res.json()
        console.log({ res })
    } catch (error) {
        console.log(error);
    }
}
const handleNameChange = (e) => {
    console.log(e.target.innerText)
    setName(e.target.innerText)

}

const Details = () => {
    const inputEl = useRef(null);
    const router = useRouter()
    const { pid } = router.query
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [Name, setName] = useState(null);

    useEffect(() => {

        if (pid != undefined)
            createNote(pid, inputEl.current.textContent)

    }, [pid])


    return (<div className={styles.container}>

        <p ref={inputEl} >This page is for : {pid}</p>
        <br></br>
        <button>Share Link</button>

    </div>)

}


export default Details