type SizeProps = {
  sizes?: string[];
  selectedSize?: string;
  onSelectSize?: (size: string) => void;
  className?: string;
};

const defaultSizes = ["S", "M", "L"];

export default function Size({
  sizes = defaultSizes,
  selectedSize,
  onSelectSize,
  className = "",
}: SizeProps) {
  return (
    <div className="flex items-center justify-center gap-[8px]">
      <div className="flex items-center justify-center gap-[8px]">
        {sizes.map((size) => {
          const isActive = selectedSize === size;

          return (
            <button
              key={size}
              type="button"
              onClick={() => onSelectSize?.(size)}
              className={`flex h-[30px] w-[30px] items-center justify-center border-[1px] bg-white font-['Work_Sans'] text-[15px] font-normal leading-none transition-colors duration-200 ${
                isActive
                  ? "border-[#8A8A8A] text-[#1A1A1A]"
                  : "border-[#D0D0D0] text-[#1A1A1A]"
              } ${className}`}
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
