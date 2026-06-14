import { Grid } from "@common/ui/grid";
import { products } from "../data/product.data";
import { ProductCard } from "../ui/ProductCard";

interface IProductFilter {
  isDiscount?: boolean;
}

interface IProductTapeProps {
  filter?: IProductFilter;
}

export const ProductTape: React.FC<IProductTapeProps> = ({ filter }) => {
  const filteredProduct = filter?.isDiscount
    ? products.filter((product) => product.discount)
    : products;
  return (
    <Grid cols={3} as="section" md={2} lg={3} gap={4}>
      {filteredProduct.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};
