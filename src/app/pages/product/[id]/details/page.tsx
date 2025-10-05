import { useParams } from "react-router-dom";
import { products } from "../../../../../modules/product/data/product.data";
import { useCallback, useEffect, useState } from "react";
import type { ProductEntity } from "../../../../../modules/product/product.entity";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductEntity | null>(null);

  const findProduct = useCallback((id:number) =>  {
    return products.find((product) => product.id === id) || null;
  },[])

  useEffect(() => {
    const foundProduct = findProduct(Number(id));
    setProduct(foundProduct);
  }, [findProduct,id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">❌ Product not found</p>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        
        <div className="flex justify-center items-center bg-gray-100 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl object-contain max-h-[400px]"
          />
        </div>

        
        <div className="flex flex-col p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-semibold text-green-600">
              ${product.price}
            </span>
            <span className="text-yellow-500 font-medium">
              ⭐ {product.rating}
            </span>
          </div>

          
          <div className="mb-6">
            <p className="text-sm text-gray-500">✅ в наличии</p>
            <p className="text-sm text-gray-500">🚚 Бесплатная доставка от $50</p>
          </div>

          
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition w-full">
              Добавить в корзину
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 px-4 rounded-xl transition w-full">
              в избранное
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
