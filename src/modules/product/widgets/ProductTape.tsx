import { products } from "../data/product.data"
import { ProductCard } from "../ui/ProductCard"


export const ProductTape: React.FC = () => {
    return(
        <section>
            
        

            {
                products.map(
                    product =>
                    <ProductCard key={product.id} product={product} />
                )
            }
        </section>
    )
}