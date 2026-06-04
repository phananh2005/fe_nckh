import Product from "../components/shop/Product.tsx";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

export default function CollectionsPage() {
  return (
    <>
      <main className="flex flex-col w-full h-fit gap-[32px] py-[32px]">
        <div className="flex justify-center font-['Work_Sans'] font-normal text-[28px]/[43.2px]">
          SOGNO ESTIVO COLLECTION
        </div>
        {groupProducts(
          [
            image,
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
          ],
          [
            "Everyday Tote",
            "Minimal Glass",
            "Arc Glass",
            "City Bag",
            "Classic Wallet",
            "Modern Frame",
            "Travel Pouch",
            "Soft Wallet",
            "Signature Pack",
          ],
          [
            "24.99",
            "19.99",
            "22.99",
            "34.99",
            "29.99",
            "26.99",
            "31.99",
            "27.99",
            "39.99",
          ],
        )}
      </main>
    </>
  );
}

function groupProducts(images: string[], titles: string[], prices: string[]) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-[32px]">
        {images.map((image, index) => (
          <Product
            key={index}
            image={image}
            title={titles[index]}
            price={prices[index]}
            width={600}
            height={1200}
          />
        ))}
      </div>
    </>
  );
}
