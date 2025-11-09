
import { Link as LinkReactRouterDom, type LinkProps as RouterLinkProps } from "react-router-dom";

interface LinkProps extends RouterLinkProps {
  variant: "primary" | "second" | "warning" | "fourth";
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({variant, children, ...props }) => {

    const base = "font-bold py-2 px-4 rounded-lg transition-all hover:cursor-pointer";

    const variants = {
        primary:"text-gray-300 hover:text-white",
        second:"text-white bg-green-500 hover:bg-green-600",
        warning:"text-white bg-yellow-500 hover:bg-yellow-600",
        fourth:"text-white bg-pink-500 hover:bg-pink-600",
    };

    const className = `${base} ${variants[variant]}`;
    return(
        <LinkReactRouterDom
            className={className}
            {...props}
            >
              {children}
        </LinkReactRouterDom>
    )
 }



 