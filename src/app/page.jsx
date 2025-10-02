import FeaturedProduct from "@/components/Home/FeaturedProduct";
import Hero from "@/components/Home/Hero";
import NewArivalsProduct from "@/components/Home/NewArivalsProduct";

export default function Home() {
  return (
    <main className="px-4 md:px-8 lg:px-20">
      <Hero />
      {/* Products Section */}
      <section className="mt-12 px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-start text-gray-800 dark:text-white mb-10">
          New <span className="text-[#FF3700]">Arrivals</span>
        </h2>
        <NewArivalsProduct />
      </section>
      <section className="mt-12 px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-start text-gray-800 dark:text-white mb-10">
          Featured <span className="text-[#FF3700]">Product</span>
        </h2>
        <FeaturedProduct />
      </section>
    </main>
  );
}
