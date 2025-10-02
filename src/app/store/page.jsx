import Card from "@/components/Card";
import { getCatagories, getProducts } from "@/library/api";
import React from "react";

async function page() {
  return (
    <main className="px-4 md:px-8 lg:px-25 flex gap-6 my-10 max-sm:flex-col">
      <div className="w-1/5 max-sm:w-full">
        <CatagoriesListing />
      </div>
      <div className="w-4/5 max-sm:w-full">
        <ProductListing />
      </div>
    </main>
  );
}

export default page;

const CatagoriesListing = async () => {
  const data = await getCatagories();

  return (
    <ul className="space-y-2">
      {data.map((category, index) => (
        <li key={index} className="p-2 border rounded hover:bg-gray-100">
          {category}
        </li>
      ))}
    </ul>
  );
};

const ProductListing = async () => {
  const data = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch mb-10">
      {data.map((product) => (
        <div
          key={product.id}
          className="w-full h-full flex justify-center items-center"
        >
          <Card products={product} />
        </div>
      ))}
    </div>
  );
};
