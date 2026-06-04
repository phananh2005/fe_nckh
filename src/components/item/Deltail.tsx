import { useState } from "react";
import Size from "../shop/Size.tsx";
import HeartShape from "../shop/HeartShape.tsx";

type DeltailProps = {
  title: string;
  price: string;
  materials?: string;
  description?: string;
};

export default function Deltail({
  title,
  price,
  materials = "",
  description = "",
}: DeltailProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>("M");
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="top-[193px] left-[769px] w-[507px] h-[511px] flex flex-col justify-between pt-8 px-8">
      <div className="flex flex-col w-full h-fit gap-[22px]">
        <div className="w-[443px] h-[36px] font-['Work_Sans'] font-light text-[36px] leading-[36px]">
          {title}
        </div>
        <div className="w-full h-fit font-['Work_Sans'] font-semibold text-[32px] leading-[24px]">
          ${price}
        </div>
      </div>

      <div className="flex flex-col w-full h-[160px] gap-[8px]">
        <div className="flex flex-col w-full h-fit gap-[32px]">
          <div className="flex items-center gap-[12px]">
            <span className="font-['Work_Sans'] font-normal text-base">
              Materials:
            </span>
            <span className="font-['Work_Sans'] font-light text-base">
              {materials}
            </span>
          </div>
          <div className="flex w-fit h-fit gap-[18px] font-['Work_Sans'] font-normal text-base">
            Description:
          </div>
        </div>

        <div className="flex flex-col w-full h-full gap-[10px]">
          <p className="font-['Work_Sans'] font-light text-sm leading-6">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full h-fit gap-[32px]">
        <div className="flex flex-col w-[110px] h-fit">
          <div className="font-['Work_Sans'] font-light text-base">Size</div>
          <div className="flex w-full h-fit gap-[8px]">
            <Size
              sizes={["S", "M", "L"]}
              selectedSize={selectedSize}
              onSelectSize={(s) => setSelectedSize(s)}
            />
          </div>
        </div>
      </div>

      <div className="flex w-full h-fit gap-[24px]">
        <button className="flex w-full h-[40px] gap-[4px] bg-[#000000] border: 1px solid #FFFFFF text-white justify-center items-center">
          Add to card
        </button>

        <button
          type="button"
          onClick={() => setFavorite((f) => !f)}
          aria-pressed={favorite}
          className="h-[36px] w-[36px] flex items-center justify-center"
        >
          <HeartShape state={favorite} />
        </button>
      </div>
    </div>
  );
}
