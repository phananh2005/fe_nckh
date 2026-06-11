import { useLocation } from "react-router-dom";
import Detail from "../components/item/Deltail";
import ImageDetail from "../components/item/ImageDeltail";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

type ItemDetailState = {
  id?: number;
  title?: string;
  price?: string;
  image?: string;
};

export default function ItemDeltail() {
  const location = useLocation();
  const state = location.state as ItemDetailState | null;

  const product = {
    id: state?.id ?? 1,
    title: state?.title ?? "Everyday Tote",
    price: state?.price ?? "24.99",
    image: state?.image ?? image1,
    materials: "Canvas, Leather",
    description:
      "The Everyday Tote is a versatile and stylish bag designed for daily use. Made from durable canvas with leather accents, it offers ample space for your essentials while maintaining a sleek and modern look.",
    images: [
      state?.image ?? image1,
      state?.image ?? image2,
      state?.image ?? image3,
    ],
  };

  return (
    <main>
      <div
        className="flex flex-col w-full h-fit gap-8 justify-center items-center
        md:flex-row"
      >
        <ImageDetail images={product.images} />
        <Detail
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          materials={product.materials}
          description={product.description}
        />
      </div>
    </main>
  );
}
