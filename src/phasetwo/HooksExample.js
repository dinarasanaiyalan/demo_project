import React, { useContext, useEffect, useState } from 'react'
import StdDetails from './StudentContext';
import './HooksExample.css'
import myStyle from './Sample.module.css'

function HooksExample() {

    // const [statename, setStatename] = useState(defaultValue);
    const [userName, setUserName] = useState('Besant');
    const [language, setLanguage] = useState('JavaScript');
    const [count, setCount] = useState(0);
    const stdDetails = useContext(StdDetails)

    const updateName = () => {
        setUserName('Besant Technology')
    }

    useEffect(() => {
        alert("Working fine")
    })

    const textColor = {
        color: 'red'
    }

    return (
        <div>
            <h1 className='hooks-heading'>Hooks Example</h1>
            <div style={textColor}>
                UserName : <span>{userName}</span>
            </div>
            <div className={myStyle.container}>
                Language : <span>{language}</span>
            </div>
            <div>
                Count : <span>{count}</span>
            </div>
            <div>
                <button onClick={updateName}>Update Name</button>
            </div>
            <div>
                <h1>Student Details : </h1>
                <p>{stdDetails.name}</p>
                <p>{stdDetails.address}</p>
            </div>
        </div>
    )
}

export default HooksExample
