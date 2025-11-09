

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<IImageProps> = ({ className, ...props}) => {
    const base =""



    const css = `${base} ${className}`;
    <img 
    loading="lazy"
    decoding="async"
    className={css}
    { ...props}
    />
}