import { useGetProduct } from "@product/hooks/getProduct.hook";

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
        <section className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/*ProductImage*/}
        <div className="flex justify-center items-center bg-gray-100 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl object-contain max-h-[400px]"
          />
        </div>
        {/*ProductImage*/}

        {/*ProductItem product={product}*/}
        <div className="flex flex-col p-8">
          {/*ProductHeader title-{product.title} description={product.description}*/}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>
         {/*ProductHeader*/}
          {/*ProductBody price={product.price} rating-{product.rating}*/}
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
         {/*ProductBody*/}
          

          {/*ProductFooter*/}
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition w-full">
              Добавить в корзину
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 px-4 rounded-xl transition w-full">
              в избранное
            </button>
          </div>{/*ProductFooter*/}

        </div>
        {/*ProductItem product={product}*/}
      </div>
      
    </section>
    )
}