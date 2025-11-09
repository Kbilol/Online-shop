import { Outlet } from "react-router-dom"

import { Header } from "./Header"
import { Footer } from "./Footer"
import { Container } from "@common/ui/Container"



export const Layout: React.FC = () => {
    return (
        <div>        
            <Header/>
          <main>
            <Container>
            <Outlet /> 
            </Container>
          </main>
          <Footer/>
        </div>
    )
}