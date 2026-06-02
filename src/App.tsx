import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountPage from "./pages/AccountPage";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-100 bg-gray-100">
        <Routes>
          <Route path="/" element={<div>Content</div>} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
