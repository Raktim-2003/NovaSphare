import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"
function App() {
  let {recognition,speaking,setSpeaking,prompt,response,setprompt,setResponse}= useContext(datacontext)


  
  return (
    <div className='main'>
      <img src={va} alt="" id="nova"/>
      <span>I'm Nova. Yours virtual Assistance advance version</span>
      {!speaking? 
      <button onClick={()=>{
        setprompt("listening...")
      setSpeaking(true)
      setResponse(false)
      recognition.start()
      }}>Click here <CiMicrophoneOn /></button>
    :
    <div className='response'>
      {!response? <img src={speakimg} alt=""  id="speak" />
      :
      <img src={aigif} alt="" id="aigif" /> }
      <p>{prompt}</p>
    </div>
    }
      
    </div>
  )
}

export default App