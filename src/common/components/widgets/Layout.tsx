import { Outlet } from "react-router-dom"
import { NavbarApp } from "./Navbar"
import { Header } from "./Header"
import { Footer } from "./Footer"



export const Layout: React.FC = () => {
    return (
        <div>        
            <Header/>
          <main>
            <Outlet /> 
          </main>
          <Footer/>
        </div>
    )
}