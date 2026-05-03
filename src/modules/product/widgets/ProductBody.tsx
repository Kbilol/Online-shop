import { CardBody } from "@common/ui/card";
import type { ProductEntity } from "@product/entity/product.entity";

interface IProductImgProps {
  product: ProductEntity;
}

export const ProductBody: React.FC<IProductImgProps> = ({ product }) => {
  return (
    <CardBody>
      <div className="flex items-center justify-between mb-6">
        <span className="text-2xl font-semibold text-green-600">
          ${product.price}
        </span>
        <span className="text-yellow-500 font-medium">⭐ {product.rating}</span>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500">✅ в наличии</p>
        <p className="text-sm text-gray-500">🚚 Бесплатная доставка от $50</p>
      </div>
    </CardBody>
  );
};
