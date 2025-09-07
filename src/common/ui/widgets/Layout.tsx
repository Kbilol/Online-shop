import { Outlet } from "react-router-dom"
import { NavbarApp } from "./Navbar"



export const Layout: React.FC = () => {
    return (
        <div>
          <header>
            <NavbarApp/>
          </header>
          <main>
            <Outlet /> 
          </main>
          <footer>Копирайт</footer>
        </div>
    )
}