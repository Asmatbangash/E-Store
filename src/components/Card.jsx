import React from "react";
import Image from "next/image";

function Card({ products }) {
  return (
    <div className="flex flex-col justify-between w-full h-[500px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-transform hover:scale-105 duration-300">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={products.image}
          alt={products.title}
          width={400}
          height={400}
          className="w-full h-60 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h5 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
          {products.title}
        </h5>

        {/* Description */}
        <p
          className="mb-6 text-base text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: products.description }}
        ></p>

        {/* Buy Now Button */}
        <a
          href={products.link}
          className="mt-auto inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-[#FF3700] rounded-lg hover:bg-[#FF3700] focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 transition-all duration-300"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default Card;
