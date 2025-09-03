"use client";
import Link from "next/link";
import { useSidebar } from "./SidebarContext";
const items=[{href:"/",label:"Home"},{href:"/chat",label:"Chat"},{href:"/settings",label:"Settings"},{href:"/reviews",label:"Reviews"},{href:"/subscribe",label:"Subscribe"}];
const legal=[{href:"/privacy",label:"Privacy"},{href:"/terms",label:"Terms"},{href:"/about",label:"About"}];
export default function Sidebar(){
  const { active, setActive } = useSidebar();
  return (<aside className="sidebar">
    <div className="sidebar-header">
      <img className="logo" src="/carys-logo.svg" alt="Carys logo"/><div className="brand">Carys</div>
    </div>
    <div className="sidebar-scroll">
      <div className="sidebar-section"><div className="sidebar-title">Main</div>
        {items.map(i=>(<Link key={i.href} href={i.href} className={`nav-item ${active===i.href?"active":""}`} onClick={()=>setActive(i.href)}>{i.label}</Link>))}
      </div>
      <div className="sidebar-section"><div className="sidebar-title">Legal</div>
        {legal.map(i=>(<Link key={i.href} href={i.href} className={`nav-item ${active===i.href?"active":""}`} onClick={()=>setActive(i.href)}>{i.label}</Link>))}
        <Link href="/login" className="nav-item" onClick={()=>setActive("/login")}>Sign in / Create account</Link>
        <Link href="/cancel" className="nav-item" onClick={()=>setActive("/cancel")}>Cancel</Link>
        <Link href="/success" className="nav-item" onClick={()=>setActive("/success")}>Success</Link>
      </div>
    </div>
  </aside>);
}
