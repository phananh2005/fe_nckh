type SizeProps = {
  sizes?: string[];
  selectedSize?: string;
  onSelectSize?: (size: string) => void;
};

const defaultSizes = ["S", "M", "L"];

export default function Size({
  sizes = defaultSizes,
  selectedSize,
  onSelectSize,
}: SizeProps) {
  return (
    <div className="flex items-center justify-center w-full bg-[#D9D9D9] py-[32px] px-[24px]">
      <div className="flex items-center justify-center gap-[36px]">
        {sizes.map((size) => {
          const isActive = selectedSize === size;

          return (
            <button
              key={size}
              type="button"
              onClick={() => onSelectSize?.(size)}
              className={`flex items-center justify-center w-[120px] h-[120px] border-[3px] bg-white font-['Work_Sans'] text-[44px] leading-none transition-colors duration-200 ${
                isActive
                  ? "border-[#5F5F5F] text-[#1A1A1A]"
                  : "border-[#8A8A8A] text-[#1A1A1A]"
              }`}
              aria-pressed={isActive}
              aria-label={`Select size ${size}`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
