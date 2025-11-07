// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../features/Header";
import Footer from "../features/Footer";
import MobileSidebar from "../features/Header/MobileSidebar";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
export default function MainLayout() {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.07, // scroll yavaşlık ve yumuşaklık oranı (0.05–0.1 arası smooth olur)
        renderByPixels: true,
      });

      return () => scrollbar.destroy();
    }
  }, []);
  return (
    <div
      className="bg-white-3 flex flex-col gap-13"
      ref={scrollRef}
      style={{ height: "100vh", overflow: "hidden" }}>
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
