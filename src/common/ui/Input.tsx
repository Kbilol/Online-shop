

 
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?:"primary" | "success" | "warning" | "error";
}


export const Input: React.FC<InputProps> = ({variant = "primary", ...props }) => {

    const base = "placeholder-gray-300 border-2 font-bold py-2 px-4 rounded-lg transition-all outline-none shadow-md";

    const variants = {
        primary:"bg-blue-500 text-white border-blue-600 shadow-blue-500/50 hover:shadow-lg focus:shadow-lg",
        success:"bg-green-500 text-white border-green-600 shadow-green-500/50 hover:shadow-lg focus:shadow-lg",
        warning:"bg-yellow-500 text-white border-yellow-600 shadow-yellow-500/50 hover:shadow-lg focus:shadow-lg",
        error:"bg-red-500 text-white border-red-600 shadow-red-500/50 hover:shadow-lg focus:shadow-lg",
    };

    const className = `${base} ${variants[variant]}`;
    return(
        <input
            className={className}
            {...props}   
        />
    )
 }



 