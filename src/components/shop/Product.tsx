import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeartShape from "./HeartShape.tsx";

type ProductProps = {
  id: number;
  title?: string;
  price?: string;
  image?: string;
  stateHeart?: boolean;
};

export default function Product({
  id,
  title = "Sản phẩm mẫu",
  price = "₫100.000",
  image,
  stateHeart = false,
}: ProductProps) {
  const [isHeartActive, setIsHeartActive] = useState(stateHeart);
  const navigate = useNavigate();

  const handleHeartClick = () => {
    setIsHeartActive((current) => !current);
  };

  const handleProductClick = () => {
    navigate("/item-detail", {
      state: {
        id,
        title,
        price,
        image,
      },
    });
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleProductClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleProductClick();
      }}
      className="cursor-pointer flex flex-col bg-white transition-all duration-300 ease-out
      w-[145px] p-1 gap-1
      sm:w-[170px] sm:p-2
      md:w-[235px] md:p-2
      lg:w-[300px] lg:p-3"
    >
      <img src={image} alt={title} className="w-full h-50 md:h-80" />
      <div className="flex w-full h-fit justify-between">
        <div className="flex flex-col w-9/10 h-fit">
          <div
            className="h-10 font-['Work_Sans'] font-normal text-[20px]/[20px] mt-2 truncate
            sm:font-normal sm:text-[22px]/[22px]
            md:font-normal md:text-[32px]/[32px]
            lg:font-normal lg:text-[40px]/[40px]"
          >
            {title}
          </div>
          <div
            className="flex w-fit h-[16px] font-['Work_Sans'] font-light text-[20px]/[30px]
            sm:font-light sm:text-[22px]/[33px]
            md:font-light md:text-[32px]/[48px]
            lg:font-light lg:text-[40px]/[60px]"
          >
            {`$ ${price}`}
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleHeartClick();
          }}
          aria-pressed={isHeartActive}
          className="mt-[0px] ml-2
          md:ml-0"
        >
          <HeartShape
            state={isHeartActive}
            className="w-[20px] h-[20px] md:w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
          />
        </button>
      </div>
    </div>
  );
}
