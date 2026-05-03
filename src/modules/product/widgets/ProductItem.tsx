import type { ProductEntity } from "@product/entity/product.entity";
import { ProductHeader } from "./ProductHeader";
import { ProductBody } from "./ProductBody";
import { ProductFooter } from "./ProductFooter";
import { Card } from "@common/ui/card";

interface IProductItemProps {
  product: ProductEntity;
}

export const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
  return (
    <Card variant="elevated">
      <ProductHeader product={product} />
      <ProductBody product={product} />
      <ProductFooter product={product} />
    </Card>
  );
};
