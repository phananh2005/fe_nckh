import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountPage from "./pages/AccountPage";
import BrandPage from "./pages/BrandPage";
import MainPage from "./pages/MainPage";


export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-100 bg-white">
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/brand" element={<BrandPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
