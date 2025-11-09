import { products } from "../data/product.data"
import { ProductCard } from "../ui/ProductCard"


export const ProductTape: React.FC = () => {
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                products.map(
                    product =>
                    <ProductCard key={product.id} product={product} />
                )
            }
        </section>
    )
}