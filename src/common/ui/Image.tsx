



export const Image: React.FC<
React.ImgHTMLAttributes<HTMLImageElement>
> = ({ className, ...props }) => {
    const base = "object-cover w-full h-full";
    const css = `${base} ${className}`;

    return (
        <img
            loading="lazy"
            decoding="async" 
            className={css} 
            {...props} 
        />
    )
}