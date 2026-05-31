import { products } from "../data/product.data";
import { ProductCard } from "../ui/ProductCard";

interface IProductFilter {
  isDiscount?: boolean;
}

interface IProductTapeProps {
  filter?: IProductFilter;
}

export const ProductTape: React.FC<IProductTapeProps> = ({ filter }) => {
  const filteredProducts = filter?.isDiscount
    ? products.filter((product) => product.discount)
    : products;

  console.log(filteredProducts);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
