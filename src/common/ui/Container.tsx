type TContainerProps = {
    children:React.ReactNode
}
 
export const Container: React.FC<TContainerProps> = ( {children} ) => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}