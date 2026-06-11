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

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLeftItemClick = (item: string) => {
    if (item === "THE BRAND") {
      navigate("/brand");
    }

    if (item === "SHOP" || item === "COLLECTIONS") {
      ["SHOP", "COLLECTIONS"]
        .filter((i) => i !== item)
        .forEach((i) =>
          document
            .getElementById(`dropdown-menu-md-${i}`)
            ?.classList.add("hidden"),
        );
      const dropdown = document.getElementById(`dropdown-menu-md-${item}`);
      dropdown?.classList.toggle("hidden");
    }

    if (menuOpen) {
      if (item === "THE BRAND") {
        navigate("/brand");
        setMenuOpen(false);
      }
      const toggle = document.getElementById(`dropdown-toggle-${item}`);
      if (toggle) {
        toggle.classList.toggle("rotate-45");
      }
      const dropdown = document.getElementById(`dropdown-menu-${item}`);
      if (dropdown) {
        dropdown.classList.toggle("hidden");
      }
    }
  };

  const handleShopItemClick = (item: string) => {
    if (item === "TOPS") {
      navigate("/tops");
      const dropdown = document.getElementById("dropdown-menu-md-SHOP");
      dropdown?.classList.toggle("hidden");
    }
  };

  const handleCollectionsItemClick = (item: string) => {
    if (item === "SOGNO ESTIVO COLLECTION") {
      navigate("/collections");
      const dropdown = document.getElementById("dropdown-menu-md-COLLECTIONS");
      dropdown?.classList.toggle("hidden");
    }
  };

  const handleRightItemClick = (item: string) => {
    if (item === "ACCOUNT") {
      navigate("/account");
    }
    if (item === "WIST LIST") {
      navigate("/wishlist");
    }
    if (item === "CART") {
      navigate("/cart");
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <nav className="w-full transition-all duration-300 ease-out border-b border-white/10 bg-white/90 backdrop-blur-sm">
        <div
          className="flex items-center justify-between 
          w-full max-w-[1440px] mx-auto py-[20px] gap-3 
          md:px-2"
        >
          <div
            className="hidden 
            md:flex md:flex-nowrap md:justify-between md:items-center md:w-[600px] md:px-[20px]
            "
          >
            {leftItems.map((item) => (
              <li
                key={`${item || "spacer"}-left`}
                className="list-none relative group"
              >
                <button
                  onClick={() => handleLeftItemClick(item)}
                  className="flex-col w-fit h-fit font-['Work_Sans'] font-light text-[15px]
                  lg:text-[20px]"
                  type="button"
                >
                  {item}
                </button>

                {item === "SHOP" ? (
                  <>
                    {/* md: JS click toggle, ẩn ở lg */}
                    <div
                      className="hidden lg:hidden flex w-[300px] h-fit pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[37px] bg-[#FFFFFF] absolute top-full left-0"
                      id={`dropdown-menu-md-${item}`}
                    >
                      {shopDropdown.map((column, columnIndex) => (
                        <ul key={columnIndex} className="space-y-3">
                          {column.map((label) => (
                            <li key={label}>
                              <button
                                onClick={() => handleShopItemClick(label)}
                                className="flex items-center w-fit h-fit rounded-[20px] p-[8px] gap-[4px] font-['Work_Sans'] font-light text-[16px] leading-[24px] transition-colors duration-200 hover:text-stone-900"
                                type="button"
                              >
                                {label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                    {/* lg: pure CSS hover, JS không đụng */}
                    <div
                      className="hidden lg:flex w-[300px] h-fit pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[37px] bg-[#FFFFFF] absolute top-full left-0
                      opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out delay-100"
                    >
                      {shopDropdown.map((column, columnIndex) => (
                        <ul key={columnIndex} className="space-y-3">
                          {column.map((label) => (
                            <li key={label}>
                              <button
                                onClick={() => handleShopItemClick(label)}
                                className="flex items-center w-fit h-fit rounded-[20px] p-[8px] gap-[4px] font-['Work_Sans'] font-light text-[16px] leading-[24px] transition-colors duration-200 hover:text-stone-900"
                                type="button"
                              >
                                {label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </>
                ) : item === "COLLECTIONS" ? (
                  <>
                    {/* md: JS click toggle, ẩn ở lg */}
                    <div
                      className="hidden lg:hidden flex w-[300px] h-fit pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[37px] bg-[#FFFFFF] absolute top-full left-0"
                      id={`dropdown-menu-md-${item}`}
                    >
                      <ul className="space-y-3">
                        {collectionsDropdown.map((label) => (
                          <li key={label}>
                            <button
                              onClick={() => handleCollectionsItemClick(label)}
                              className="flex items-center w-fit h-fit rounded-[20px] p-[8px] gap-[4px] font-['Work_Sans'] font-light text-[16px] leading-[24px] transition-colors duration-200 hover:text-stone-900"
                              type="button"
                            >
                              {label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* lg: pure CSS hover, JS không đụng */}
                    <div
                      className="hidden lg:flex w-[300px] h-fit pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[37px] bg-[#FFFFFF] absolute top-full left-0
                      opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out delay-100"
                    >
                      <ul className="space-y-3">
                        {collectionsDropdown.map((label) => (
                          <li key={label}>
                            <button
                              onClick={() => handleCollectionsItemClick(label)}
                              className="flex items-center w-fit h-fit rounded-[20px] p-[8px] gap-[4px] font-['Work_Sans'] font-light text-[16px] leading-[24px] transition-colors duration-200 hover:text-stone-900"
                              type="button"
                            >
                              {label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </div>

          <div
            className="flex items-center relative
            w-full md:w-auto md:px-[65px]"
          >
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              text-center text-[#D18B13] font-['Yeseva_One'] font-normal text-[25px] leading-none transition hover:opacity-80
              lg:text-[30px]"
            >
              BELLA WANG
            </button>

            <button
              type="button"
              className="rounded border border-[#D18B13] px-3 py-2 text-xl text-[#D18B13] transition hover:bg-[#D18B13]/10
                        ml-auto
                        md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              ☰
            </button>
          </div>

          <div
            className="hidden 
            md:flex md:flex-nowrap md:justify-between md:items-center md:w-[600px] md:px-[20px]
            "
          >
            {rightItems.map((item) => (
              <li
                key={`${item || "spacer"}-right`}
                className="list-none relative group"
              >
                <button
                  onClick={() => handleRightItemClick(item)}
                  className="flex-col w-fit h-fit font-['Work_Sans'] font-light text-[15px] lg:text-[20px]"
                  type="button"
                >
                  {item}
                </button>
              </li>
            ))}
          </div>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-2 border-t border-[#D18B13]/20 bg-white px-4 pb-4 pt-3">
            {leftItems.map((item) => (
              <>
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    handleLeftItemClick(item);
                  }}
                  className="flex justify-between w-full text-left rounded bg-[#F9F7F0] px-3 py-3 text-[16px] font-['Work_Sans'] font-light transition hover:bg-[#F0E8D7]"
                >
                  {item}
                  {item === "SHOP" || item === "COLLECTIONS" ? (
                    <span className="ml-2" id={`dropdown-toggle-${item}`}>
                      +
                    </span>
                  ) : null}
                </button>
                <div
                  className="hidden mt-2 border-t border-[#D18B13]/10 pt-2"
                  id={`dropdown-menu-${item}`}
                >
                  {item === "SHOP"
                    ? shopDropdown.flat().map((label) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => {
                            handleShopItemClick(label);
                            setMenuOpen(false);
                          }}
                          className="w-full text-left rounded px-3 py-2 text-[14px] text-[#4B4B4B] transition hover:bg-[#F0E8D7]"
                        >
                          {label}
                        </button>
                      ))
                    : item === "COLLECTIONS"
                      ? collectionsDropdown.map((label) => (
                          <button
                            key={label}
                            type="button"
                            onClick={() => {
                              handleCollectionsItemClick(label);
                              setMenuOpen(false);
                            }}
                            className="w-full text-left rounded px-3 py-2 text-[14px] text-[#4B4B4B] transition hover:bg-[#F0E8D7]"
                          >
                            {label}
                          </button>
                        ))
                      : null}
                </div>
              </>
            ))}

            {rightItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  handleRightItemClick(item);
                  setMenuOpen(false);
                }}
                className="w-full text-left rounded bg-[#F9F7F0] px-3 py-3 text-[16px] font-['Work_Sans'] font-light transition hover:bg-[#F0E8D7]"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default BarHeader;
