import { useGetProduct } from "@product/hooks/getProduct.hook";
import { ProductImg } from "./ProductImg";
import { ProductItem } from "./ProductItem";


interface IProductDetailsProms {
  id:number
}

export const ProductDetails: React.FC<IProductDetailsProms> = ({id}) => {
  const{ data: product,loading,error } = useGetProduct(id);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading</p>
      </div>
    );
  }
  

  if (error || !product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">❌ Product not found</p>
      </div>
    );
  }
    return(
        <section className="min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
       <ProductImg product = {product} />
       <ProductItem product = {product} />

        
      </div>
      
    </section>
    )
}