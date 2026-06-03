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
  return (
    <header>
      <nav className="flex justify-between items-center w-[1440px] h-[110px] pt-[60px] pb-[40px]">
        <ul className="flex justify-between items-center w-[600px] px-[48px]">
          {leftItems.map((item) => (
            <li key={`${item || "spacer"}-left`} className="relative group">
              <button
                className="border-0 bg-transparent p-0 text-[13px] uppercase tracking-[0.04em] text-stone-600 transition-colors duration-200 hover:text-stone-900"
                type="button"
              >
                {item}
              </button>

              {item === "SHOP" ? (
                <div className="pointer-events-none absolute left-0 top-full z-20 pt-5 opacity-0 translate-y-2 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0">
                  <div className="min-w-[320px] rounded-[18px] border border-stone-200 bg-white/95 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                      {shopDropdown.map((column, columnIndex) => (
                        <ul key={columnIndex} className="space-y-3">
                          {column.map((label) => (
                            <li key={label}>
                              <button
                                className="w-full text-left border-0 bg-transparent p-0 text-[12px] tracking-[0.08em] uppercase text-stone-500 transition-colors duration-200 hover:text-stone-900"
                                type="button"
                              >
                                {label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              ) : item === "COLLECTIONS" ? (
                <div className="pointer-events-none absolute left-0 top-full z-20 pt-5 opacity-0 translate-y-2 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0">
                  <div className="min-w-[300px] rounded-[18px] border border-stone-200 bg-white/95 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                    <ul className="space-y-3">
                      {collectionsDropdown.map((label) => (
                        <li key={label}>
                          <button
                            className="w-full text-left border-0 bg-transparent p-0 text-[12px] tracking-[0.08em] uppercase text-stone-500 transition-colors duration-200 hover:text-stone-900"
                            type="button"
                          >
                            {label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </li>
          ))}
        </ul>

        <button
          className="flex flex-1 h-[36px] px-[48px] gap-[10px] items-center text-yellow-400"
          type="button"
          aria-label="Bella Wang home"
        >
          BELLA WANG
        </button>

        <ul className="flex justify-between items-center w-[600px] px-[48px]">
          {rightItems.map((item) => (
            <li key={item}>
              <button
                className="border-0 bg-transparent p-0 text-[13px] uppercase tracking-[0.04em] text-stone-600 transition-colors duration-200 hover:text-stone-900"
                type="button"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default BarHeader;
