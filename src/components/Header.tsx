import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-white">
      <nav className="relative flex h-22 items-center justify-between px-13">
        <div className="flex items-center gap-18">
          <NavItem title="SHOP" />
          <NavItem title="THE BRAND" />
          <NavItem title="COLLECTIONS" />
        </div>

        <button className="absolute left-1/2 -translate-x-1/2 cursor-pointer text-center font-serif text-[22px] text-yellow-600"
          onClick={()=> navigate("/")}
        >
          <h1>BELLA WANG</h1>
        </button>

        <div className="flex items-center gap-22">
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
