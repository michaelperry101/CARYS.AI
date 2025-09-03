"use client";
import { createContext, useContext, useState, useMemo } from "react";
const SidebarCtx = createContext(null);
export default function SidebarProvider({ children }) {
  const [active, setActive] = useState("/");
  const value = useMemo(() => ({ active, setActive }), [active]);
  return <SidebarCtx.Provider value={value}>{children}</SidebarCtx.Provider>;
}
export function useSidebar(){ const ctx = useContext(SidebarCtx); if(!ctx) throw new Error("useSidebar must be used within SidebarProvider"); return ctx; }
