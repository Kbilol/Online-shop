import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { configLink } from "@core/config.core";
import { Link } from "@common/ui/Link";
import { Button } from "@common/ui/Button";






export const NavbarApp:React.FC = () => {
  const navbarLins = () =>{
      return configLink.navBar.map((item,index) => {
        return <Link variant="primary" key={index} to={item.link}>{item.name}</Link>
      })

  }
  return(
                <Navbar fluid >
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/Logos.jpg" className="mr-3 h-6 rounded-2xl sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Online shop</span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-3">
        <Button variant="primary">Войти</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {navbarLins()}
      </NavbarCollapse>
    </Navbar>
  );
}