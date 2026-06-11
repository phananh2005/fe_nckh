import { useState } from "react";
import Size from "../shop/Size.tsx";
import HeartShape from "../shop/HeartShape.tsx";
import { useCart } from "../../context/CartContext.tsx";

type DeltailProps = {
  id: number;
  title: string;
  price: string;
  image: string;
  materials?: string;
  description?: string;
};

export default function Deltail({
  id,
  title,
  price,
  image,
  materials = "",
  description = "",
}: DeltailProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>("M");
  const [favorite, setFavorite] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col w-full h-full justify-between items-center pt-8 px-8 gap-4">
      <div className="flex flex-col w-full h-fit gap-5.5">
        <div className="w-110.75 h-9 font-['Work_Sans'] font-light text-[36px] leading-9">
          {title}
        </div>
        <div className="w-full h-fit font-['Work_Sans'] font-semibold text-[32px] leading-6">
          ${price}
        </div>
      </div>

      <div className="flex flex-col w-full h-fit gap-2">
        <div className="flex flex-col w-full h-fit gap-8">
          <div className="flex items-center gap-3">
            <span
              className="font-['Work_Sans'] font-normal text-base
            md:text-[27px]"
            >
              Materials:
            </span>
            <span
              className="font-['Work_Sans'] font-light text-base
            md:text-[27px]"
            >
              {materials}
            </span>
          </div>
          <div
            className="flex w-fit h-fit gap-4.5 font-['Work_Sans'] font-normal text-base
            md:text-[27px]"
          >
            Description:
          </div>
        </div>

        <div className="flex flex-col w-full h-full gap-2.5">
          <p
            className="font-['Work_Sans'] font-light text-sm leading-6
            md:text-[27px] md:leading-9"
          >
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full h-fit gap-8">
        <div className="flex flex-col w-27.5 h-fit">
          <div
            className="font-['Work_Sans'] font-light text-base
            md:text-[27px]"
          >
            Size
          </div>
          <div className="flex w-full h-fit gap-2">
            <Size
              sizes={["S", "M", "L"]}
              selectedSize={selectedSize}
              onSelectSize={(s) => setSelectedSize(s)}
              className="md:text-[27px] w-[40px] h-[40px]"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full h-fit gap-6">
        <button
          type="button"
          onClick={() =>
            addToCart({
              id,
              name: title,
              price: Number(price),
              image,
              size: selectedSize ?? "M",
              quantity: 1,
            })
          }
          className="flex w-full h-10 gap-1 bg-[#000000] border: 1px solid #FFFFFF text-white justify-center items-center
          md:h-12 md:gap-2 md:text-[27px]"
        >
          Add to cart
        </button>

        <button
          type="button"
          onClick={() => setFavorite((f) => !f)}
          aria-pressed={favorite}
          className="h-9 w-9 flex items-center justify-center"
        >
          <HeartShape state={favorite} className="md:h-[150px] md:w-[150px]" />
        </button>
      </div>
    </div>
  );
}
