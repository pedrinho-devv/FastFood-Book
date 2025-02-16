import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import AboutUs from "./Pages/AboutUs";
import Book from "./Pages/Book";
import Main from "./Components/Main"; // ✅ Corrigido o erro de digitação

const App = () => {
  return (
    <>
      <Main />
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
