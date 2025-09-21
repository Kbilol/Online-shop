import type { ProductEntity } from "../../product.entity"

interface IProductCardProps {
    product: ProductEntity;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt="Картинка продукта" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
        </div>
    )
}