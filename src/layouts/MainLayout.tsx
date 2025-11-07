// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../features/Header";
import Footer from "../features/Footer";
import MobileSidebar from "../features/Header/MobileSidebar";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function MainLayout() {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  return (
    <div className="bg-white-3  space-y-13 ">
      <Header />

      {!isOpen ? (
        <div>
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      ) : (
        <MobileSidebar open={isOpen} />
      )}
    </div>
  );
}
