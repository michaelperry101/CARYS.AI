"use client";
import { SessionProvider } from "next-auth/react";
import SidebarProvider from "./SidebarContext";
import ThemeProvider from "./ThemeContext";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
export default function ClientShell({ children }){
  return (<SessionProvider><ThemeProvider><SidebarProvider>
    <div className="container"><Sidebar/><div className="content"><TopBar/><main className="main">{children}</main></div></div>
  </SidebarProvider></ThemeProvider></SessionProvider>);
}
