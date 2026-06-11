import Product from "../components/shop/Product.tsx";
import beltImg from "../assets/belt.png";
import glassImg from "../assets/glass.png";
import glass1 from "../assets/glass1.png";
import minibag from "../assets/minibag.png";
import wallet from "../assets/wallet.png";
import hero from "../assets/hero.png";
import Pagination from "../components/Pagination.tsx";

export default function TopsPage() {
  return (
    <>
      <main className="flex flex-col w-full h-fit gap-8 py-2">
        <div
          className="flex justify-center font-['Work_Sans'] font-normal 
        text-[25px]
        sm:text-[28px]/[43.2px]
        md:text-[32px]/[48px]
        lg:text-[28px]/[43.2px]"
        >
          TOPS
        </div>
        {groupProducts(
          [
            beltImg,
            glassImg,
            glass1,
            minibag,
            wallet,
            hero,
            beltImg,
            glassImg,
            glass1,
            minibag,
            wallet,
            hero,
          ],
          [
            "Belt",
            "Glass",
            "Glass 1",
            "Minibag",
            "Wallet",
            "Hero",
            "Belt (Black)",
            "Sunglasses",
            "Glass 1 (Blue)",
            "Mini Bag (New)",
            "Leather Wallet",
            "Hero XL",
          ],
          [
            "29.99",
            "19.99",
            "24.99",
            "39.99",
            "49.99",
            "59.99",
            "34.99",
            "21.99",
            "26.99",
            "42.99",
            "54.99",
            "69.99",
          ],
        )}

        <div className="flex justify-center mt-8">
          <Pagination />
        </div>
      </main>
    </>
  );
}

function groupProducts(images: string[], titles: string[], prices: string[]) {
  return (
    <>
      <div
        className="flex flex-wrap justify-center gap-8 pr-1 pl-1
      sm:pr-3 sm:pl-3
      md:pr-6 md:pl-6"
      >
        {images.map((image, index) => (
          <Product
            key={index}
            id={index + 1}
            image={image}
            title={titles[index]}
            price={prices[index]}
          />
        ))}
      </div>
    </>
  );
}
