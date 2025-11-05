// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../features/Header";
import Footer from "../features/Footer";

export default function MainLayout() {
  return (
    <div className="bg-white-3  space-y-13">
      <Header />
      <main className="container mx-auto px-[clamp(1rem,4vw,4rem)] py-[clamp(1rem,1vw,2rem)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
