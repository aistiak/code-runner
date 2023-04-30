// import axios from 'axios' ;
import { useState } from 'react';

function Home() {

    const [lang, setLang] = useState('python');
    const [code, setCode] = useState('');
    const [out, setOut] = useState('');
    const [loading ,setLoading] = useState(false)
    return (
        <>
            <div className='main'>
                <div className='lang_selector'>
                    <select onChange={(e) => {
                        setLang(e.target.value)
                        setCode(``)
                    }}>
                        <option value={'python'}>python3</option>
                        <option value={'node'}>Node.js</option>
                        <option value={'golang'}>GO</option>
                        {/* <option value={'typescript'}>TypeScript</option> */}
                    </select>
                </div>
                <div className='run_btn'>
                    <button disabled={loading}  onClick={async () => {
                        setLoading(true)
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
                        const res2 = await res1.json()
                        setOut(res2)
                        setLoading(false)
                    }}>
                      { loading ?  'running' :`run`}
                    </button>
                </div>
                <div className='code_stds'>
                    <div className='code_input'>
                        <textarea value={code} onChange={((e) => setCode(e.target.value))} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className='code_output'>
                        <textarea value={out} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;