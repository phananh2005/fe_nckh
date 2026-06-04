import { useState } from "react";
import HeartShape from "./HeartShape.tsx";

type ProductProps = {
  title?: string;
  price?: string;
  image?: string;
  stateHeart?: boolean;
  width?: number;
  height?: number;
};

export default function Product({
  title = "Sản phẩm mẫu",
  price = "₫100.000",
  image,
  stateHeart = false,
  width = 400,
  height = 1000,
}: ProductProps) {
  const [isHeartActive, setIsHeartActive] = useState(stateHeart);

  const handleHeartClick = () => {
    setIsHeartActive((current) => !current);
  };

  return (
    <div
      className={`flex flex-col w-[${width}px] h-[${height}px] p-1 gap-[4px] bg-white transition-all duration-300 ease-out`}
    >
      <img src={image} alt={title} className="w-full h-[888px]" />
      <div className="flex w-full h-fit justify-between">
        <div className="flex flex-col w-full h-fit">
          <div className="flex w-full h-[64px] font-['Work_Sans'] font-normal text-[28px]/[32px]">
            {title}
          </div>
          <div className="flex w-full h-[28px] gap-[16px] font-['Work_Sans'] font-light text-2xl leading-7">
            {`$ ${price}`}
          </div>
        </div>
        <button
          type="button"
          onClick={handleHeartClick}
          aria-pressed={isHeartActive}
        >
          <HeartShape state={isHeartActive} />
        </button>
      </div>
    </div>
  );
}
