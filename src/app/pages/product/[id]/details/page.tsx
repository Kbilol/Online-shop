import { useParams } from "react-router-dom";
import { ProductDetails } from "@product/index";

export default function ProductDetailsPage() {
  const { id } = useParams();
 

  return (
    <main>
      <ProductDetails id = {Number(id)}/>
    </main>
  );
}
