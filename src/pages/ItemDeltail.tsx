import Detail from "../components/item/Deltail";
import ImageDetail from "../components/item/ImageDeltail";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
export default function ItemDeltail() {
  return (
    <main>
      <div className="flex w-full h-fit gap-[32px] justify-center">
        <ImageDetail images={[image1, image2, image3]} />
        <Detail
          title="Everyday Tote"
          price="24.99"
          materials="Canvas, Leather"
          description="The Everyday Tote is a versatile and stylish bag designed for daily use. Made from durable canvas with leather accents, it offers ample space for your essentials while maintaining a sleek and modern look."
        />
      </div>
    </main>
  );
}
