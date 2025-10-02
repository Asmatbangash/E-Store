import { getProducts } from "@/library/api";
import React from "react";

async function ProductDetail({ params }) {
  const product = await getProducts(params.product_id);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        {/* Left: Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full max-w-md object-cover transform transition duration-300 hover:scale-105"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            {/* Price */}
            <p className="text-2xl font-semibold text-indigo-600 mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-gray-700 mt-4">{product.description}</p>

            {/*  Selector */}
            <div className="flex items-center mt-6">
              <button className="px-3 py-1 bg-gray-200 rounded-l-lg hover:bg-gray-300">
                -
              </button>
              <span className="px-4 py-1 bg-gray-100">{}</span>
              <button className="px-3 py-1 bg-gray-200 rounded-r-lg hover:bg-gray-300">
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
              Add to Cart
            </button>
            <button className="flex-1 bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
