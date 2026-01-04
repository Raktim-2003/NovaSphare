import React, { createContext, useState } from "react";
import run from "../gemini";
export const datacontext = createContext();

function UserContext({ children }) {
  let [speaking,setSpeaking]=useState(false)
  let [prompt,setprompt]=useState("listening...")
let [response,setResponse]=useState(false)

  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "hi-GB"; //change the language of VA
    window.speechSynthesis.speak(text_speak);
  }
  async function aiResponse(prompt) {
    let text = await run(prompt); // Your AI function
    let  newText=text.split("**")&&text.split("*")&&text.replace("google", "Raktim  Mondal")&&text.replace("Google", "Raktim  Mondal")
    setprompt(newText)
    speak(newText)
    setResponse(true)
    setTimeout(()=>{
     setSpeaking(false)
    },5000)

  }
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;
    setprompt(transcript)
    takecommand(transcript.toLowerCase())
  };



function takecommand(command){
  if(command.includes("open") && command.includes("youtube")){
    window.open("https://www.youtube.com/","_blank")
    speak("opening youtube")
    setResponse(true)
    setprompt("opening youtube...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if(command.includes("open") && command.includes("mail")){
    window.open("https://mail.google.com/","_blank")
    speak("opening mail")
    setResponse(true)
    setprompt("opening mail...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if(command.includes("open") && command.includes("drive")){
    window.open("https://drive.google.com","_blank")
    speak("opening drive")
    setResponse(true)
    setprompt("opening drive...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if(command.includes("open") && command.includes("chatgpt")){
    window.open("https://chatgpt.com/","_blank")
    speak("opening chatgpt")
    setResponse(true)
    setprompt("opening chatgpt...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if(command.includes("open") && command.includes("linkedin")){
    window.open("https://www.linkedin.com/","_blank")
    speak("opening linkedin")
    setResponse(true)
    setprompt("opening linkedin...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if(command.includes("open") && command.includes("github")){
    window.open("https://github.com/Raktim-2003","_blank")
    speak("opening github")
    setResponse(true)
    setprompt("opening github...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if(command.includes("open") && command.includes("map")){
    window.open("https://www.google.com/maps/","_blank")
    speak("opening map")
    setResponse(true)
    setprompt("opening map...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if(command.includes("open") && command.includes("youtube")){
    window.open("https://www.youtube.com/","_blank")
    speak("opening youtube")
    setResponse(true)
    setprompt("opening youtube...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if(command.includes("open") && command.includes("youtube")){
    window.open("https://www.youtube.com/","_blank")
    speak("opening youtube")
    setResponse(true)
    setprompt("opening youtube...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if(command.includes("open") && command.includes("youtube")){
    window.open("https://www.youtube.com/","_blank")
    speak("opening youtube")
    setResponse(true)
    setprompt("opening youtube...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if(command.includes("open") && command.includes("youtube")){
    window.open("https://www.youtube.com/","_blank")
    speak("opening youtube")
    setResponse(true)
    setprompt("opening youtube...")
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else if (command.includes("time")) {
    let time= new Date ().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
    setResponse(true)
    setprompt(time)
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  } else if (command.includes("date")) {
    let date = new Date().toLocaleDateString(undefined,
    {day:"numeric",month:"short"})
    speak(date)
    setResponse(true)
    setprompt(date)
    setTimeout(()=>{
     setSpeaking(false)
    },5000)
  }else{
    aiResponse(command)
  }
}

  let value = {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setprompt,
    response,
    setResponse
  };
  return (
    <div>
      <datacontext.Provider value={value}>{children}</datacontext.Provider>
    </div>
  );  
}

export default UserContext;
