import React from "react";

function Hero() {
  return (
    <div className=" min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10">
        {/* Image */}
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="E-Store"
          className="w-full h-100 max-w-sm lg:max-w-md rounded-2xl shadow-xl transform hover:scale-105 transition duration-500"
        />

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            Welcome to <span className="text-[#FF3700]">E-Store</span>
          </h1>
          <p className="py-6 text-gray-600 max-w-md mx-auto lg:mx-0">
            Discover the best collection of trendy products at unbeatable
            prices. Shop with confidence and enjoy a seamless online shopping
            experience. Fast delivery, secure payments, and top-notch customer
            support.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="btn bg-[#FF3700] text-white px-6 shadow-md hover:scale-105 transition duration-300">
              Shop Now
            </button>
            <button className="btn btn-outline px-6 shadow-sm hover:scale-105 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
