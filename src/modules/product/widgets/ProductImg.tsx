import type { ProductEntity } from "@product/entity/product.entity";

interface IProductImgProps{
  product:ProductEntity;
}

export const ProductImg:React.FC<IProductImgProps> = ({product}) => {
    return(

          
        <div className="flex justify-center items-center bg-gray-100 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl object-contain max-h-[400px]"/>
        </div>
      

      
      
    )
}