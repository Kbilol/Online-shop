

 
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant:"primary" | "second" | "warning" | "fourth" ;
}


 export const Button: React.FC<ButtonProps> = ({variant,children, ...props }) => {

    const base = "text-white font-bold py-2 px-4 rounded";

    const variants = {
        primary:"bg-blue-500 hover:bg-blue-600",
        second:"bg-gray-500 hover:bg-gray-600",
        warning:"bg-yellow-500 hover:bg-yellow-600",
        fourth:"bg-pink-500 hover:bg-pink-600",
    };

    const className = `${base} ${variants[variant]}`;
    return(
        <button
        className={className}
            {...props}
            >
              {children}
        </button>
    )
 }



 