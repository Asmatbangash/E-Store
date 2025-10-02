import Card from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturedProduct() {
  const products = [
    {
      id: 1,
      image: "/handsFree.webp",
      title: "Noteworthy Technology Acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      price: 49.99,
      link: "#",
    },
    {
      id: 2,
      image: "/smartWatch.webp",
      title: "Latest Smartwatch 2024",
      description:
        "Track your health and fitness with the newest smartwatch featuring AI-powered monitoring.",
      price: 199.99,
      link: "#",
    },
    {
      id: 3,
      image: "/laptop.webp",
      title: "Ultra Thin Laptop",
      description:
        "A high-performance laptop with ultra-thin design, perfect for work and entertainment.",
      price: 999.99,
      link: "#",
    },
    {
      id: 4,
      image: "/headphones.webp",
      title: "Wireless Noise Cancelling Headphones",
      description:
        "Experience immersive sound with active noise cancellation for clear audio anywhere.",
      price: 149.99,
      link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-stretch mb-10">
      {products.slice(0, 4).map((product) => (
        <div key={product.id} className="w-full h-full max-w-xs flex">
          <Card products={product} />
        </div>
      ))}
    </div>
  );
}
