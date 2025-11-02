import type { ProductEntity } from "@product/entity/product.entity";

interface IProductImgProps{
  product:ProductEntity;
}

export const ProductFooter:React.FC<IProductImgProps> = ({product}) => {


    console.log(product)

    return(

          
        <>
        {/*ProductFooter*/}
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition w-full">
              Добавить в корзину
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 px-4 rounded-xl transition w-full">
              в избранное
            </button>
          </div>{
          /*ProductFooter*/}
        </>
      

      
      
    )
}