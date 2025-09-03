"use client";
import { useState } from "react";
export default function VoiceButton({ text }){
  const [busy,setBusy]=useState(false);
  const play=async()=>{
    if(!text) return; setBusy(true);
    try{
      const res=await fetch("/api/tts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text})});
      if(!res.ok) throw new Error("TTS failed");
      const blob=await res.blob(); const url=URL.createObjectURL(blob);
      const audio=new Audio(url); audio.onended=()=>URL.revokeObjectURL(url); audio.play();
    }catch(e){ console.error(e); alert("Voice failed. Check ELEVENLABS_* env keys."); } finally{ setBusy(false); }
  };
  return (<button onClick={play} disabled={busy} style={{padding:"12px 16px",borderRadius:12,border:"1px solid var(--border)"}} title="Speak (ElevenLabs)">🔊 {busy?"Speaking…":"Speak"}</button>);
}
