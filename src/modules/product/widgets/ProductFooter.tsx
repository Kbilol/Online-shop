import { Button } from "@common/ui/Button";
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
            <Button variant="primary">
              Добавить в корзину
            </Button>
            <Button variant="second">
              в избранное
            </Button>
          </div>{
          /*ProductFooter*/}
        </>
      

      
      
    )
}