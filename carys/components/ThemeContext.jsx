"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const ThemeCtx = createContext(null);
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(()=>{ const s = typeof window!=='undefined' ? localStorage.getItem('carys-theme') : null; if(s==='light'||s==='dark') setTheme(s); },[]);
  useEffect(()=>{ if(typeof window!=='undefined') localStorage.setItem('carys-theme', theme); document.documentElement.dataset.theme = theme; },[theme]);
  const value = useMemo(()=>({theme,setTheme}),[theme]);
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}
export function useThemeCarys(){ const ctx=useContext(ThemeCtx); if(!ctx) throw new Error("useThemeCarys outside provider"); return ctx; }
