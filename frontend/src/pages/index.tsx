

// import axios from 'axios' ;
import { useState } from 'react';

function Home() {

    const [lang, setLang] = useState('python')
    const [code, setCode] = useState('')
    const [out, setOut] = useState('')
    return (
        <>
            <div>
                <div>
                    <select onChange={(e) => {
                        setLang(e.target.value)
                    }}>
                        <option value={'python'}>python3</option>
                        <option value={'node'}>nodejs</option>
                    </select>
                </div>
                <div>
                    <button onClick={async () => {
                        console.log({
                            lang,
                            code
                        })
                        const res1 = await fetch('http://localhost:3000/run-code', {
                            // url : 'localhost:3003',
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json",

                            },
                            body: JSON.stringify({
                                lang,
                                code
                            })
                        })
                        // console.log(
                        const t = await res1.json()
                        setOut(t)
                    }}>run</button>
                </div>
                <div>
                    <textarea value={code} onChange={((e) => setCode(e.target.value))} name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <textarea value={out} name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </>
    )
}

export default Home;