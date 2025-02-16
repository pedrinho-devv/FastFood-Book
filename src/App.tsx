import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import AboutUs from "./Pages/AboutUs";
import Book from "./Pages/Book";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <>
      <Hero />
      <Routes>
        <Route path="/home" element={<Home />} /> {/* ✅ Corrigido: Tudo minúsculo */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </>
  );
};

export default App;
