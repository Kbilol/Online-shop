import { Link } from "@common/ui/Link";
import type { ProductEntity } from "../entity/product.entity";
import { Card, CardBody, CardFooter, CardHeader } from "@common/ui/card";
import { useTranslation } from "react-i18next";

interface IProductCardProps {
  product: ProductEntity;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { t } = useTranslation("product");

  const urlBuy = `/product/${product.id}/buy`;
  const urlDetails = `/product/${product.id}/details`;

  return (
    <Card>
      <CardHeader>
        <img
          src={product.image}
          alt={t(product.title)}
          className="h-48 w-full object-cover rounded-t-2xl"
        />
      </CardHeader>

      <CardBody>
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {t(product.title)}
        </h3>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {t(product.description)}
        </p>

        <div className="flex items-center justify-between mt-3">
          <p className="text-pink-500 font-bold">${product.price}</p>
          <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
        </div>
      </CardBody>

      <CardFooter>
        <Link variant="second" to={urlBuy}>
          {t("buy")}
        </Link>

        <Link variant="fourth" to={urlDetails}>
          {t("details")}
        </Link>
      </CardFooter>
    </Card>
  );
};