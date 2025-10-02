import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ products }) {
  return (
    <div className="flex flex-col w-full h-full bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-transform hover:scale-105 duration-300">
      <div className="flex-shrink-0">
        <Link href={"/store/product_detail/" + products.id}>
          <Image
            src={products.image}
            alt={products.title}
            width={400}
            height={400}
            className="w-full h-60 object-contain"
          />
        </Link>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="mb-2 text-lg md:text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
          {products.title}
        </h5>
        <p
          className="mb-3 text-sm md:text-base text-gray-700 dark:text-gray-300 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: products.description }}
        ></p>
        <span className="mb-4 text-lg md:text-xl font-bold text-[#FF3700] dark:text-green-400">
          ${products.price}
        </span>
        <div className="mt-auto">
          <a
            href={products.link}
            className="block w-full text-center px-5 py-3 text-sm md:text-base font-medium text-white bg-[#FF3700] rounded-lg hover:bg-[#e62f00] focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 transition-all duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
