import { Link } from "@common/ui/Link";
import type { ProductEntity } from "../entity/product.entity";
import { Card, CardBody, CardFooter, CardHeader } from "@common/ui/card";

interface IProductCardProps {
  product: ProductEntity;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const urlBuy = `/product/${product.id}/buy`;
  const urlDetails = `/product/${product.id}/details`;

  return (
    <Card>
      <CardHeader>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover rounded-t-2xl"
        />
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-pink-500 font-bold">${product.price}</p>
          <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
        </div>
      </CardBody>
      <CardFooter>
        <Link variant="second" to={urlBuy}>
          Купить
        </Link>
        <Link variant="fourth" to={urlDetails}>
          Подробней
        </Link>
      </CardFooter>
    </Card>
  );
};
