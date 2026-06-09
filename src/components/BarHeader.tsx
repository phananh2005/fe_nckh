import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const leftItems: string[] = ["SHOP", "THE BRAND", "COLLECTIONS"];
const rightItems: string[] = ["SEARCH", "ACCOUNT", "WIST LIST", "CART"];
const shopDropdown: string[][] = [
  ["ALL ITEMS", "NEW ARRIVALS", "ACCESSORIES"],
  ["TOPS", "BOTTOMS", "DRESS"],
];
const collectionsDropdown: string[] = [
  "SOGNO ESTIVO COLLECTION",
  "FIRST SNOW - HOLIDAY 2025",
];

function BarHeader() {
  const navigate = useNavigate();
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShopItemClick = (item: string) => {
    if (item === "TOPS") {
      navigate("/tops");
    }
  };

  const handleCollectionsItemClick = (item: string) => {
    if (item === "SOGNO ESTIVO COLLECTION") {
      navigate("/collections");
    }
  };

  const handleLeftItemClick = (item: string) => {
    if (item === "THE BRAND") {
      navigate("/brand");
    }
  };

  const handleRightItemClick = (item: string) => {
    if (item === "WIST LIST") {
      navigate("/wishlist");
    }
    if (item === "CART") {
      navigate("/cart");
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <nav className="w-full h-[110px] transition-all duration-300 ease-out border-b border-white/10">
        <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto h-full py-[20px] px-4 md:px-8">
          <ul className="flex justify-between items-center w-[600px] px-[40px]">
            {leftItems.map((item) => (
              <li key={`${item || "spacer"}-left`} className="relative group">
                <button
                  onClick={() => handleLeftItemClick(item)}
                  className="flex-col w-fit h-fit font-['Work_Sans'] font-light text-[16px]"
                  type="button"
                >
                  {item}
                </button>

                {item === "SHOP" ? (
                  <div
                    className="flex w-[300px] h-fit pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[37px] bg-[#FFFFFF]
                  absolute top-full left-0 opacity-0 pointer-events-none
                  group-hover:opacity-100 group-hover:pointer-events-auto
                  transition-all duration-300 ease-out delay-100"
                  >
                    {shopDropdown.map((column, columnIndex) => (
                      <ul key={columnIndex} className="space-y-3">
                        {column.map((label) => (
                          <li key={label}>
                            <button
                              onClick={() => handleShopItemClick(label)}
                              className="flex items-center w-fit h-fit rounded-[20px] p-[8px] gap-[4px]
                                          font-['Work_Sans'] font-light text-[16px] leading-[24px] 
                                          transition-colors duration-200 hover:text-stone-900"
                              type="button"
                            >
                              {label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                ) : item === "COLLECTIONS" ? (
                  <div
                    className="flex w-[300px] h-fi pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[37px] bg-[#FFFFFF]
                  absolute top-full left-0 opacity-0 pointer-events-none 
                  group-hover:opacity-100 group-hover:pointer-events-auto
                  transition-all duration-300 ease-out delay-100"
                  >
                    <ul className="space-y-3">
                      {collectionsDropdown.map((label) => (
                        <li key={label}>
                          <button
                            onClick={() => handleCollectionsItemClick(label)}
                            className="flex items-center w-fit h-fit rounded-[20px] p-[8px] gap-[4px]
                                          font-['Work_Sans'] font-light text-[16px] leading-[24px] 
                                          transition-colors duration-200 hover:text-stone-900"
                            type="button"
                          >
                            {label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center flex-1 h-[36px] pr-[48px] pl-[48px] gap-[10px] text-[#D18B13] font-['Yeseva_One'] font-normal text-[28px] leading-none text-center">
            BELLA WANG
          </div>

          <ul className="flex justify-between items-center w-[600px] px-[40px]">
            {rightItems.map((item) => (
              <li key={`${item || "spacer"}-right`} className="relative group">
                <button
                  onClick={() => handleRightItemClick(item)}
                  className="flex-col w-fit h-fit font-['Work_Sans'] font-light text-[16px]"
                  type="button"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default BarHeader;
