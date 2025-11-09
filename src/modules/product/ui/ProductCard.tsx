import { Link } from "react-router-dom";
import type { ProductEntity } from "../entity/product.entity";


interface IProductCardProps {
  product: ProductEntity;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const urlBuy = `/product/${product.id}/buy`;
  const urlDetails = `/product/${product.id}/details`;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover rounded-t-2xl"
      />
      <div className="p-4">
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
      </div>
      <div>
    <Link to = {urlBuy} >Купить</Link>
    <Link to = {urlDetails}>Подробней</Link>
      </div>
      
    </div>
  );
};
