"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function AuthButton(){
  const { data } = useSession();
  const user = data?.user;
  if(user){
    return (<button onClick={()=>signOut()} style={{padding:"8px 12px",borderRadius:10,border:"1px solid var(--border)"}}>Sign out ({user.name ?? user.email})</button>);
  }
  return (<div style={{display:"flex",gap:8}}>
    <button onClick={()=>signIn("google")} className="cta" style={{padding:"8px 12px",borderRadius:10}}>Continue with Google</button>
    <button onClick={()=>signIn("email")} style={{padding:"8px 12px",borderRadius:10,border:"1px solid var(--border)"}} title="Requires EMAIL_* env vars">Continue with Email</button>
  </div>);
}
