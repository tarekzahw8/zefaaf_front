import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("./Pages/HomePage"));
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const SuccessStories = lazy(() => import("./Components/home/SuccessStories"));
const Blog = lazy(() => import("./Pages/Blog"));
const Profile = lazy(() => import("./Pages/Profile")); // إضافة صفحة الملف الشخصي
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
import { BiArrowToTop } from "react-icons/bi";
const Footer = lazy(() => import("./Components/Footer/Footer"));
const About = lazy(() => import("./Pages/About"));
import { ToastContainer } from "react-toastify";
const BlogPosts = lazy(() => import("./Components/blog/BlogPosts"));
const ERRORPage = lazy(() => import("./Pages/ERRORPage"));
import { BounceLoader } from "react-spinners";
const Privacy = lazy(() => import("./Pages/Privacy"));
const Conditions = lazy(() => import("./Pages/Conditions"));
const Bouquets = lazy(() => import("./Pages/Purchase"));
const Shop = lazy(() => import("./Pages/Shop"));
const Cart = lazy(() => import("./Pages/Cart"));
const ProductPage = lazy(() => import("./Pages/ProductPage"));
import { AppContext } from "./Store/StateData";
import VerifyEmail from "./Pages/VerifyEmail";
import Support from "./Pages/support";
const SideNavbar = lazy(() => import("./Components/Navbar/SliderNavbar"));

const App = () => {
  const { user } = useContext(AppContext);
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
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[100vh]">
            <BounceLoader color="#ffffff" size={200} />
          </div>
        }
      >
        <div
          onClick={scrollToTop}
          className={`${
            view ? "fixed" : "hidden"
          } z-[99999] animate-bounce ${
            user != null ? "mr-[240px] max-md:mr-0" : ""
          }  w-[45px] cursor-pointer h-[45px] bottom-[30px] text-center flex items-center justify-center right-7 button_bg rounded-[5px]`}
        >
          <BiArrowToTop className="w-[25px] h-[25px]" />
        </div>

        {user != null ? <SideNavbar /> : <Navbar />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/Register"
            element={user != null ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/Login"
            element={user != null ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/profile"
            // element={
            //   user != null ? <Profile /> :
            //  <Navigate to="/Login" />}
            element={<Profile/>}
          />
          <Route path="/SuccessStories" element={<SuccessStories />} />
          <Route path="/about" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/Bouquets" element={<Bouquets />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/Support" element={<Support />} />

          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/Blog/:id" element={<BlogPosts />} />
          <Route path="*" element={<ERRORPage />} />
        </Routes>

        <ToastContainer />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
