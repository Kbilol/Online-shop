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
          <footer>У нас вы найдёте всё необходимое для себя и своих близких.
Мы предлагаем качественные товары по доступным ценам, быструю доставку и удобный сервис.
Каждый покупатель для нас важен, поэтому мы заботимся о том, чтобы ваши покупки были лёгкими и приятными.</footer>
        </div>
    )
}