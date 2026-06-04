import BarHeader from "../components/BarHeader.tsx";
import Footer from "../components/Footer.tsx";
import ProductCard from "../components/shop/ProductCard.tsx";
import Pagination from "../components/shop/Pagination.tsx";

function Shop() {
  return (
    <>
      <header className="relative z-10">
        <BarHeader />
      </header>
      <main className="min-h-screen bg-stone-50 text-stone-900">
        <section className="mx-auto flex max-w-[1440px] justify-start px-[8px] py-6 sm:px-6 lg:px-10">
          <ProductCard />
        </section>
        <Pagination />
        <Footer />
      </main>
    </>
  );
}

export default Shop;
