import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AccountPage from "./pages/AccountPage";
import BrandPage from "./pages/BrandPage";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import TopsPage from "./pages/TopsPage";
import BarHeader from "./components/BarHeader";
import CollectionsPage from "./pages/CollectionsPage";
import WishListPage from "./pages/WishListPage";

export default function App() {
  return (
    <>
      <BarHeader />
      <main className="min-h-100 bg-white">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/tops" element={<TopsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
