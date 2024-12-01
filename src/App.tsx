import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ErrorPage from "./Pages/Error";
import { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import GalleryPage from "./Pages/GalleryPage/index";
import CommissionPage from "./Pages/CommissionPage/index";
import QnAPage from "./Pages/QnAPage/index";
import Footer from "./Components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.setAttribute("data-bs-theme", darkMode ? "light" : "dark");
  };

  const NavBarSettings = {
    setDarkMode: toggleDarkMode,
    currentMode: darkMode ? "Dark" : "Light",
  };

  return (
    <>
      <NavigationBar settings={NavBarSettings}></NavigationBar>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="commission" element={<CommissionPage />} />
        <Route path="qna" element={<QnAPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
