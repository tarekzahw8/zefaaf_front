import {  useEffect, useState } from "react";
// import { AppContext } from "./Store/StateData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import {  BiArrowToTop } from "react-icons/bi";
import Footer from "./Components/Footer/Footer";
import SuccessStories from "./Components/home/SuccessStories";
import About from "./Pages/About";
import { ToastContainer } from "react-toastify";
const App = () => {
  // const { data } = useContext(AppContext);
  const [view, setView] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScrollTop = () => {
    if (window.scrollY > 100) {
      setView(true);
    } else {
      setView(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [view]);
  return (
    <BrowserRouter>
      <div
        onClick={scrollToTop}
        className={` ${
          view ? "fixed" : "hidden"
        } z-[99999] animate-bounce  w-[45px] cursor-pointer h-[45px] bottom-[30px]  text-center flex items-center justify-center right-7 button_bg rounded-[5px]  `}
      >
        {" "}
        <BiArrowToTop className="w-[25px] h-[25px]" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SuccessStories" element={<SuccessStories />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <ToastContainer/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
