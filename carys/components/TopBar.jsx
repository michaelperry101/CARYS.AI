"use client";
import ThemeToggle from "./ThemeToggle";
import AuthButton from "./AuthButton";
export default function TopBar(){
  return (<div className="topbar">
    <div/>
    <div style={{display:"flex",gap:8,alignItems:"center"}}><ThemeToggle/><AuthButton/></div>
  </div>);
}
