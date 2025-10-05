import { products } from "@product/data/product.data";
import type { ProductEntity } from "@product/entity/product.entity";


export class ProductService {
    public static detailsProduct(id: number): ProductEntity | null  {
        return products.find(product => product.id === id) || null;
    }
}