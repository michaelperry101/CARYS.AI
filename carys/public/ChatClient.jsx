"use client";
import { useState, useRef } from "react";
import MessageBubble from "./MessageBubble";
import VoiceButton from "./VoiceButton";
export default function ChatClient(){
  const [messages,setMessages]=useState([{id:1,from:"bot",text:"Hi! I'm Carys. How can I help today?"}]);
  const [input,setInput]=useState("");
  const listRef=useRef(null);
  const send=async()=>{
    const text=input.trim(); if(!text) return;
    setInput(""); const id=Date.now(); setMessages(p=>[...p,{id,from:"me",text}]);
    try{
      const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:text})});
      const data=await res.json(); const reply=data?.reply ?? `You said: ${text}`;
      setMessages(p=>[...p,{id:id+1,from:"bot",text:reply}]);
    }catch{ setMessages(p=>[...p,{id:id+1,from:"bot",text:"Sorry, chat service failed."}]); }
    setTimeout(()=>{ listRef.current?.scrollTo({top:listRef.current.scrollHeight,behavior:"smooth"}); }, 50);
  };
  return (<div className="chat-wrap card">
    <div ref={listRef} className="messages" style={{maxHeight:460,overflowY:"auto"}}>
      {messages.map(m=> <MessageBubble key={m.id} from={m.from}>{m.text}</MessageBubble>)}
    </div>
    <div className="input-row">
      <input className="input" placeholder="Type a message…" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'?send():null}/>
      <div style={{display:"flex",gap:8}}><button className="send" onClick={send}>Send</button><VoiceButton text={input || "Hello from Carys!"}/></div>
    </div>
  </div>);
}
