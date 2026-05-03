
interface ITitle extends React.HTMLAttributes<HTMLHeadingElement> {
    variant?: "primary" | "secondary"
    size?: "sm" | "md" | "lg"
}

export const Title: React.FC<ITitle> = ({
    children, 
    size = "md",
    variant = "primary",
    ...props
}) => {
    const base = "font-bold leading-snug";
    

    const variants = {
        primary:"text-gray-300",
        secondary:"text-pink-400",
    };
    const sizes = {
        sm:"text-sm",
        md:"text-md",
        lg:"text-3xl",
    };

    const className = `${base} ${variants[variant]} ${sizes[size]}`;

    return <h2 className={className} {...props} >
        {children}
    </h2>
} 