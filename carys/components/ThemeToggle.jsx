"use client";
import { useThemeCarys } from "./ThemeContext";
export default function ThemeToggle(){
  const { theme, setTheme } = useThemeCarys();
  return (<button onClick={()=>setTheme(theme==="light"?"dark":"light")} title="Toggle theme" style={{padding:"8px 12px",borderRadius:10,border:"1px solid var(--border)",background:"var(--bg)"}}>
    {theme==="light"?"☀️ Light":"🌙 Dark"}
  </button>);
}
