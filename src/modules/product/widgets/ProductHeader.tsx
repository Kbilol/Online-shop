
import type { ProductEntity } from "@product/entity/product.entity";

interface IProductImgProps{
  product:ProductEntity;
}

export const ProductHeader:React.FC<IProductImgProps> = ({product}) => {
    return(

          
        <>
        {/*ProductHeader title-{product.title} description={product.description}*/}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>
         {/*ProductHeader*/}
         </>
      

      
      
    )
}