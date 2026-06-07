import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { configLink } from "@core/config.core";
import { Link } from "@common/ui/Link";
import { ToggleTheme } from "@theme/index";

import { Button } from "@common/ui/Button";

export const NavbarApp: React.FC = () => {
  const navbarLins = () => {
    return configLink.navBar.map((item, index) => {
      return (
        <Link variant="primary" key={index} to={item.link}>
          {item.name}
        </Link>
      );
    });
  };
  return (
    <Navbar fluid className="fixed w-full z-1    transition-all duration-300  opacity-95 bg-white/35 dark:bg-black/35 backdrop-blur-2xl backdrop-saturate-180 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6)]">
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/Logos.jpg"
          className="mr-3 h-6 rounded-2xl sm:h-9"
          alt="Flowbite React Logo"
        />

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Online shop
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-3">
        <Link to={"/auth/login"} variant="fourth">
          Войти
        </Link>
        <Button variant="primary">Аккаунт</Button>
        <ToggleTheme />
        <NavbarToggle />
      </div>
      <NavbarCollapse>{navbarLins()}</NavbarCollapse>
    </Navbar>
  );
};
