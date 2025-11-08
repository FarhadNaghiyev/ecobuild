import { Routes, Route } from "react-router-dom";
import HomePage from "./page";
import ContactPage from "./contact/page";
import ServicesPage from "./services/page";
import MainLayout from "./_layout";
import ProjectsPage from "./projects/page";
import NotFound from "./not-found";
import AboutPage from "./about/page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/jobs" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
