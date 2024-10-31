import { useState } from "react";
import { Container } from "@mui/material";
import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Contact from "./components/Contact";
import AppFooter from "./components/AppFooter";
import ScrollToTop from "./components/ScrollToTop";
import "./AppStyling.css";

function App() {
  const [language, setLanguage] = useState("UZ"); // Default language is Uzbek

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  return (
    <Container disableGutters maxWidth={false}>
      <div>
        <AppHeader
          language={language}
          onLanguageChange={handleLanguageChange}
        />
        <MainContent language={language} />
        <AboutUs language={language} />
        <Products language={language} />
        <Contact language={language} />
        <AppFooter language={language} />
        <ScrollToTop />
      </div>
    </Container>
  );
}

export default App;
