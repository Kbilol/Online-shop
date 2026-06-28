import { CardBody } from "@common/ui/card";
import type { ProductEntity } from "@product/entity/product.entity";
import { useTranslation } from "react-i18next";

interface IProductImgProps {
  product: ProductEntity;
}

export const ProductBody: React.FC<IProductImgProps> = ({ product }) => {
  const { t } = useTranslation("product");

  return (
    <CardBody>
      <div className="flex items-center justify-between mb-6">
        <span className="text-2xl font-semibold text-green-600">
          ${product.price}
        </span>
        <span className="text-yellow-500 font-medium">
          ⭐ {product.rating}
        </span>
      </div>

      <h1 className="text-black">{t("Welcome")}</h1>
      <h2 className="text-black">{t("productTitle")}</h2>
      <p>{t("description")}</p>

      <div className="mb-6">
        <p className="text-sm text-gray-500">✅ В наличии</p>
        <p className="text-sm text-gray-500">
          🚚 Бесплатная доставка от $50
          {t("productTitle")}
        </p>
      </div>
    </CardBody>
  );
};