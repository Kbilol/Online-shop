
import { Intro } from "./Intro"
import { NavbarApp } from "./Navbar"

export const Header:React.FC = () => {
    return(
        <header>
        <NavbarApp/>
        <Intro/>
        </header>
    )
}