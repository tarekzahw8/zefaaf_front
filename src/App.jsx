import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./Pages/HomePage";
import "./App.css";
const HomePage = lazy(()=> import('./Pages/HomePage'));
const Register = lazy(()=> import('./Pages/Register'));
const Login = lazy(()=> import('./Pages/Login'));
const SuccessStories = lazy(()=> import('./Components/home/SuccessStories'));
const Blog = lazy(()=> import('./Pages/Blog'));
import Navbar from "./Components/Navbar/Navbar";
import {  BiArrowToTop } from "react-icons/bi";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import { ToastContainer } from "react-toastify";
import BlogPosts from "./Components/blog/BlogPosts";
import ERRORPage from "./Pages/ERRORPage";
import { BounceLoader } from "react-spinners";
import Privacy from "./Pages/privacy";
import Conditions from "./Pages/conditions.JSX";
import Bouquets from "./Pages/Purchase";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
// import { AppContext } from "./Store/StateData";
const App = () => {
  // const { user } = useContext(AppContext);
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
<Suspense fallback={<div className="flex items-center justify-center h-[100vh]"><BounceLoader color="#ffffff"   size={200} />  </div>}>
      <div
        onClick={scrollToTop}
        className={` ${
          view ? "fixed" : "hidden"
        } z-[99999] animate-bounce  w-[45px] cursor-pointer h-[45px] bottom-[30px]  text-center flex items-center justify-center right-7 button_bg rounded-[5px]  `}
      >
        {" "}
        <BiArrowToTop className="w-[25px] h-[25px]" />
      </div>
<Navbar/>
      <Routes>
{/* here change view  login ? true: false  */}

          <Route path="/" element={<HomePage/>} />
        <Route path="/Register" element={ <Register />} />
        <Route path="/SuccessStories" element={<SuccessStories />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/Bouquets" element={<Bouquets />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Blog/:id" element={<BlogPosts />} />
        <Route path="*" element={<ERRORPage />} />
      </Routes>
      <ToastContainer/>
      <Footer/>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
