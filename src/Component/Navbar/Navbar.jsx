import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarScroll, setNavbarScroll] = useState("");
  const location = useLocation();
  const handleScroll = () => {
    if (window.scrollY > 5) {
      setNavbarScroll("bg-[#5650ce]");
    } else {
      setNavbarScroll("bg-transparent");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarScroll]);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`Navbar ${navbarScroll} max-md:bg-[#5650ce] shadow-lg z-[99119]  text-white p-4 transition-colors duration-300  fixed top-0 left-0 right-0  ${
        isMenuOpen ? "h-[100vh] overflow-scroll" : ""
      } flex items-center `}
    >
      <div
        className={`w-full  ${
          isMenuOpen
            ? " h-full  flex-col flex justify-start items-center"
            : "flex justify-between  items-center"
        }  px-4 mx-auto`}
      >
        <div className="max-md:hidden  ">
          <img src={logo} className="w-[70px] h-full transform" alt="Logo" />
        </div>

        <div className="flex md:hidden items-center justify-between w-full">
          <div className=" flex items-center justify-between w-full">
            <img src={logo} className="w-[70px] h-full transform" alt="Logo" />

            <button
              onClick={toggleMenu}
              className="text-white md:hidden text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Links - Hidden on small screens */}
        <div
          className={`  md:flex md:flex-row     font-medium text-[18px]
          ${
            isMenuOpen
              ? "flex flex-col  items-start gap-2 mt-[30px ]   w-full "
              : "hidden  gap-4"
          } `}
        >
          <div className="relative group"></div>

          <Link
            to="/"
            className={` max-md:w-full NavLink ${
              location.pathname === "/" ? "active" : ""
            }  max-md:hover:bg-[#262950] max-md:py-4 max-md:px-2 rounded-xl max-md:mt-10`}
          >
{t('Home')}
     </Link>
          <Link
            to="/package"
            className={` max-md:w-full NavLink ${
              location.pathname === "/package" ? "active" : ""
            }  max-md:hover:bg-[#262950] max-md:py-4 max-md:px-2 rounded-xl max-md:mt-10`}
          >
الباقات
     </Link>

          {/* <div className="relative group">

            <div className="absolute top-5 z-[99999] w-[200px] hidden group-hover:flex flex-col bg-[#6610f2] text-black mt-2 p-2 rounded shadow-lg">
              <Link
                to="/service1"
                className="p-2 hover:bg-[#262950]  font-medium  text-white"
              >
                {" "}
                باقه برميوم
              </Link>
              <Link
                to="/service2"
                className="p-2 hover:bg-[#262950] font-medium  text-white"
              >
                {" "}
                باقه دهبي
              </Link>
              <Link
                to="/service3"
                className="p-2 hover:bg-[#262950] font-medium  text-white"
              >
                {" "}
                باقه فضي{" "}
              </Link>
            </div>
          </div> */}
          {/* <Link to="/premium" className={` max-md:w-full NavLink ${location.pathname === '/premium'? "active": "" }  max-md:hover:bg-[#262950] max-md:py-4 max-md:px-2 rounded-xl max-md:mt-10`}>الباقات</Link> */}
          <Link
            to="/SuccessStories"
            className={` max-md:w-full NavLink ${
              location.pathname === "/SuccessStories" ? "active" : ""
            }  max-md:hover:bg-[#262950] max-md:py-4 max-md:px-2 rounded-xl max-md:mt-10`}
          >
            قصص النجاح
          </Link>
          <Link
            to="/articles"
            className={` max-md:w-full NavLink ${
              location.pathname === "/articles" ? "active" : ""
            }  max-md:hover:bg-[#262950] max-md:py-4 max-md:px-2 rounded-xl max-md:mt-10`}
          >
            المقالات
          </Link>
          <Link
            to="/marriage"
            className={` max-md:w-full NavLink ${
              location.pathname === "/marriage" ? "active" : ""
            }  max-md:hover:bg-[#262950] max-md:py-4 max-md:px-2 rounded-xl max-md:mt-10`}
          >
            الزواج في ضوء السنه
          </Link>
          <Link
            to="/about"
            className={` max-md:w-full NavLink ${
              location.pathname === "/about" ? "active" : ""
            }  max-md:hover:bg-[#262950] max-md:py-4 max-md:px-2 rounded-xl max-md:mt-10`}
          >
            {t("About")}
          </Link>
        </div>

        {/* Buttons */}
        <div
          className={` md:flex md:flex-row items-center space-x-0 md:space-x-4 ${
            isMenuOpen ? "flex pt-10 w-full   gap-4" : "hidden"
          } md:flex`}
        >
          <select className="text-white  hidden outline-none bg-transparent">
            <option
              className="text-gray-300"
              onClick={() => changeLanguage("ar")}
              value=""
            >
              AR
            </option>
            <option
              className="text-gray-300"
              onClick={() => changeLanguage("em")}
              value=""
            >
              EN
            </option>
          </select>

          <Link
            to="/login"
            className="button_bg h-[40px] flex items-center text-white font-medium px-4 rounded-[15px]"
          >
            {t("Login")}
          </Link>

          <Link
            to="/Register"
            className="button_bg h-[40px] text-white font-medium flex items-center px-4 rounded-[15px]"
          >
            {t("Register")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
