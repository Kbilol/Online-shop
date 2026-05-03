

export const Logo: React.FC <React.ImgHTMLAttributes<HTMLImageElement>> = ({className, ...props}) => {
    const base = "object-cover rounded-2xl";
    const css = `${base} ${className}`
    return <><img src="/Logos.jpg" className={css} { ...props} /></>
    
}