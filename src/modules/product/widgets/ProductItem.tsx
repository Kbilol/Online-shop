
import type { ProductEntity } from "@product/entity/product.entity";
import { ProductHeader } from "./ProductHeader";
import { ProductBody } from "./ProductBody";
import { ProductFooter } from "./ProductFooter";

interface IProductItemProps{
  product:ProductEntity;
}

export const ProductItem:React.FC<IProductItemProps> = ({product}) => {
    return(
        
        
               
        <div className="flex flex-col p-8">

          <ProductHeader product = {product} />
          <ProductBody product = {product} />
          <ProductFooter product = {product} />

        </div>

        
       
      

      
      
    )
}