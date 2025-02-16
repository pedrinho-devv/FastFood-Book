import { Route, Routes } from "react-router-dom"
import Home from "../src/Pages/Home"
import Menu from "../src/Pages/Menu"
import AboutUs from "../src/Pages/AboutUs"
import Book from "../src/Pages/Book"
import Main from "./Componets/Main"



const App =() => {
  return(
    <>
    <Main/>
    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/Menu" element={<Menu />} />
    <Route path="/About" element={<AboutUs />} />
    <Route path="/Book" element={<Book />} />
    </Routes>
    </>
  )
}

export default App