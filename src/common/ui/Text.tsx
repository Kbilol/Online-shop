interface IText extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: "primary" | "secondary"
    size?: "sm" | "md" | "lg"
}

export const Text: React.FC<IText> = ({
    children, 
    size = "md",
    variant = "primary",
    ...props
}) => {
    const base = "leading-relaxed";
    

    const variants = {
        primary:"text-gray-300",
        secondary:"text-pink-400",
    };
    const sizes = {
        sm:"text-sm",
        md:"text-md",
        lg:"text-lg",
    };

    const className = `${base} ${variants[variant]} ${sizes[size]}`;

    return <p className={className} {...props} >
        {children}
    </p>
} 