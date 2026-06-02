import NavItem  from "./NavItem";
function Header(){
    return (
        <header>
            <nav className="flex justify-between gap-8 p-4">
                <NavItem title="Product"/>
                <NavItem title="Shop"/>
                <h2 className="text-3xl text-yellow-600 font-serif cursor-pointer">HELLO WORLD</h2>
                <NavItem title="Pricing"/>
                <NavItem title="Blog"/>
                <NavItem title="Account"/>
            </nav>
        </header>
    );
}
export default Header;