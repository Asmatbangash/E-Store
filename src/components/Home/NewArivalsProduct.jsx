import Card from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NewArivalsProduct() {
  const products = [
    {
      id: 1,
      image: "/handsFree.webp",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
    {
      id: 2,
      image: "/smartWatch.webp",
      title: "Latest Smartwatch 2024",
      description:
        "Track your health and fitness with the newest smartwatch featuring AI-powered monitoring.",
      link: "#",
    },
    {
      id: 3,
      image: "/laptop.webp",
      title: "Ultra Thin Laptop",
      description:
        "A high-performance laptop with ultra-thin design, perfect for work and entertainment.",
      link: "#",
    },
    {
      id: 4,
      image: "/headphones.webp",
      title: "Wireless Noise Cancelling Headphones",
      description:
        "Experience immersive sound with active noise cancellation for clear audio anywhere.",
      link: "#",
    },
    {
      id: 5,
      image: "/camera.webp",
      title: "4K Action Camera",
      description:
        "Capture stunning 4K videos and photos with waterproof action camera for adventures.",
      link: "#",
    },
    {
      id: 6,
      image: "/gamingConsole.webp",
      title: "Next Gen Gaming Console",
      description:
        "Enjoy next-generation gaming with ultra-fast load times and realistic graphics.",
      link: "#",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-10">
      {products.splice(0, 6).map((product) => (
        <div key={product.id} className="w-full max-w-xs aspect-square flex">
          <Card products={product} />
        </div>
      ))}
    </div>
  );
}
