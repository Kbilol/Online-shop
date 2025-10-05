import type { ProductEntity } from "@product/entity/product.entity";
import { ProductService } from "@product/service/product.service";
import { useEffect, useState } from "react";



export const useGetProduct = (id : number) => {
 const [product, setProduct] = useState<ProductEntity | null>(null);
 const [loading,setLoading] = useState<boolean>(false);
 const [error,setError] = useState<string | null>(null);


    useEffect(() => {

    try {
        setLoading(true);
        const foundProduct = ProductService.detailsProduct(id);
        setProduct(foundProduct);
    } catch { 
      setError('Не нашли продукт')
    }finally {
        setLoading(false)
    }
  }, [id]);

  
    return {
        data:product,
        loading:loading,
        error:error
    }
}