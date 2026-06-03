import React from "react";

interface ProductCardProps {
  title?: string;
  price?: string;
}

const HeartIcon: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 20.35L10.55 19.03C5.4 14.36 2 11.27 2 7.5C2 4.41 4.42 2 7.5 2C9.24 2 10.91 2.81 12 4.09C13.09 2.81 14.76 2 16.5 2C19.58 2 22 4.41 22 7.5C22 11.27 18.6 14.36 13.45 19.04L12 20.35Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const FashionFigure: React.FC = () => {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-t-[2px] bg-[linear-gradient(180deg,#1d1b17_0%,#16140f_45%,#e6d8cb_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-[26%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,247,238,0.45)_75%,rgba(255,247,238,0.75)_100%)]" />

      <div className="absolute top-[10%] h-[72%] w-[56%]">
        <div className="absolute left-1/2 top-[3%] h-[12%] w-[12%] -translate-x-1/2 rounded-full bg-[#b07b57] shadow-[0_0_0_2px_rgba(0,0,0,0.03)]" />
        <div className="absolute left-1/2 top-[10%] h-[8%] w-[22%] -translate-x-1/2 rounded-full bg-[#6a4127] blur-[0.2px]" />
        <div className="absolute left-1/2 top-[15%] h-[9%] w-[34%] -translate-x-1/2 rounded-[999px] bg-[#1e1b18]" />
        <div className="absolute left-1/2 top-[16%] h-[6%] w-[28%] -translate-x-1/2 rounded-[999px] border border-[#e2cfbd] bg-transparent" />
        <div className="absolute left-1/2 top-[22%] h-[11%] w-[13%] -translate-x-1/2 rounded-full bg-[#d9aa7d]" />
        <div className="absolute left-1/2 top-[25%] h-[3%] w-[26%] -translate-x-1/2 rounded-full bg-[#f0d5c1]" />
        <div className="absolute left-[19%] top-[20%] h-[24%] w-[10%] -rotate-[14deg] rounded-full bg-[#e3b187]" />
        <div className="absolute right-[19%] top-[20%] h-[24%] w-[10%] rotate-[14deg] rounded-full bg-[#e3b187]" />
        <div className="absolute left-[29%] top-[12%] h-[12%] w-[8%] rotate-[-22deg] rounded-full bg-[#f0c49b]" />
        <div className="absolute right-[29%] top-[12%] h-[12%] w-[8%] rotate-[22deg] rounded-full bg-[#f0c49b]" />

        <div className="absolute left-1/2 top-[34%] h-[36%] w-[38%] -translate-x-1/2 rounded-t-[32%] rounded-b-[10%] bg-[#14110f] shadow-[0_22px_40px_rgba(0,0,0,0.16)]" />
        <div className="absolute left-1/2 top-[35.5%] h-[11%] w-[36%] -translate-x-1/2 rounded-b-[80%] bg-[#efe0d2]" />
        <div className="absolute left-1/2 top-[44%] h-[30%] w-[18%] -translate-x-1/2 rounded-b-[24%] bg-[#11100e]" />
        <div className="absolute left-[38%] top-[39%] h-[31%] w-[10%] -rotate-[2deg] rounded-full bg-[#11100e]" />
        <div className="absolute right-[38%] top-[39%] h-[31%] w-[10%] rotate-[2deg] rounded-full bg-[#11100e]" />
        <div className="absolute left-1/2 top-[63%] h-[24%] w-[44%] -translate-x-1/2 rounded-b-[6px] bg-[#11100e]" />
        <div className="absolute left-1/2 top-[80%] h-[7%] w-[18%] -translate-x-1/2 rounded-[999px] bg-[#11100e] blur-[1px]" />
      </div>
    </div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({
  title = "Beaded tube top",
  price = "$ 170",
}) => {
  return (
    <article className="w-full max-w-[207px] bg-white text-stone-900">
      <div className="relative aspect-[207/295] overflow-hidden bg-stone-200">
        <FashionFigure />
      </div>

      <div className="flex items-start justify-between gap-3 px-1 pt-3">
        <h3 className="text-[20px] leading-[1.1] tracking-[-0.02em] text-stone-900">
          {title}
        </h3>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="mt-1 shrink-0 text-stone-900 transition-colors hover:text-stone-600"
        >
          <HeartIcon />
        </button>
      </div>

      <p className="px-1 pt-3 text-[18px] leading-none text-stone-500">
        {price}
      </p>
    </article>
  );
};

export default ProductCard;
