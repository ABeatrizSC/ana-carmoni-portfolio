import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { ProjectsPage } from "./projects";
import { ScrollToTop } from "../components";

export function Pages() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}