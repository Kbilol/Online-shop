import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { configLink } from "@core/config.core";





export const NavbarApp:React.FC = () => {
  const navbarLins = () =>{
      return configLink.navBar.map((item,index) => {
        return <NavbarLink key={index} href={item.link}>{item.name}</NavbarLink>
      })

  }
  return(
                <Navbar fluid >
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/Logos.jpg" className="mr-3 h-6 rounded-2xl sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Online shop</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {navbarLins()}
      </NavbarCollapse>
    </Navbar>
  );
}