import { getProducts } from "@/library/api";
import Card from "../Card";

export default async function NewArivalsProduct() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-stretch mb-10">
      {products.slice(0, 4).map((product) => (
        <div key={product.id} className="w-full h-full  flex">
          <Card products={product} />
        </div>
      ))}
    </div>
  );
}
