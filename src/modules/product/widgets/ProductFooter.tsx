import { Button } from "@common/ui/Button";
import { CardFooter } from "@common/ui/card";
import type { ProductEntity } from "@product/entity/product.entity";

interface IProductImgProps {
  product: ProductEntity;
}

export const ProductFooter: React.FC<IProductImgProps> = ({ product }) => {
  console.log(product);

  return (
    <CardFooter>
      {/*ProductFooter*/}
      <div className="flex gap-4">
        <Button variant="primary">Добавить в корзину</Button>
        <Button variant="second">в избранное</Button>
      </div>
      {/*ProductFooter*/}
    </CardFooter>
  );
};
