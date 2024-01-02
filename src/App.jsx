import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Link } from "react-router-dom";
import Menu from "./pages/menu.jsx";
import Header from "./pages/header.jsx";
import Home from "./pages/home.jsx";
import Tecket from "./pages/tecket.jsx";
import "./App.css";
import Barre from "./pages/head Bar.jsx"
import About from "./pages/about.jsx"
import Contact from "./pages/contactUS.jsx"
import Info from "./pages/info.jsx"
import Login from "./pages/login.jsx"
// import About from "../src/";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Barre></Barre>
      <Header exact></Header>
      <Routes>
        {/* <Route path="/H" element={<Header />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/info" element={<Info />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tecket" element={<Tecket />} />
      </Routes>
    </>
  );
}

export default App;
