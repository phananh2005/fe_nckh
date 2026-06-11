import Product from "../components/shop/Product.tsx";
import image9 from "../assets/image9.png";
import minibag2 from "../assets/minibag2.png";
import wallet1 from "../assets/wallet1.png";
import wallet2 from "../assets/wallet2.png";
import glass2 from "../assets/glass2.png";
import glass3 from "../assets/glass3.png";
import hero from "../assets/hero.png";
import beltImg from "../assets/belt.png";
import image from "../assets/image.png";

export default function WishListPage() {
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
          WISH LIST
        </div>
        {groupProducts(
          [
            image9,
            minibag2,
            wallet1,
            wallet2,
            glass2,
            glass3,
            hero,
            beltImg,
            image,
          ],
          [
            "Wishlist Bag",
            "Mini Bag Pro",
            "Wallet One",
            "Wallet Two",
            "Glass Two",
            "Glass Three",
            "Hero Favorite",
            "Belt Classic",
            "Daily Pick",
          ],
          [
            "41.99",
            "36.99",
            "28.99",
            "32.99",
            "21.99",
            "23.99",
            "59.99",
            "29.99",
            "25.99",
          ],
        )}
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
            stateHeart={true}
          />
        ))}
      </div>
    </>
  );
}
