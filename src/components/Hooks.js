import React, { useState, useEffect } from 'react'
import SecondHook from './secondHook'

const FirstHook = () => {
    const [text, setText] = useState("hi")
    const [myColor, setMyColor] = useState("")

    useEffect(() => {
        setMyColor("red")

    },[])


    useEffect(() => {
       console.log(11111, myColor)

    },[myColor])
    
    const changeColor = () => {
      setMyColor("blue")
    }
    

    return(
        <div>
             hook exAMPLE
             <p>
             { myColor }

             </p>
             <button onClick = {(e) => changeColor()}> Change color</button>
             <SecondHook myColor={myColor} text={text} />
        </div>
    )
}

export default FirstHook;

