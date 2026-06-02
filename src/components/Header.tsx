import NavItem from "./NavItem";

function Header() {
  return (
    <header className="bg-white">
      <nav className="relative flex h-[88px] items-center justify-between px-[52px]">
        <div className="flex items-center gap-[72px]">
          <NavItem title="SHOP" />
          <NavItem title="THE BRAND" />
          <NavItem title="COLLECTIONS" />
        </div>

        <h2 className="absolute left-1/2 -translate-x-1/2 cursor-pointer text-center font-serif text-[22px] text-yellow-600">
          BELLA WANG
        </h2>

        <div className="flex items-center gap-[88px]">
          <NavItem title="SEARCH" />
          <NavItem title="ACCOUNT" />
          <NavItem title="WIST LIST" />
          <NavItem title="CART" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
