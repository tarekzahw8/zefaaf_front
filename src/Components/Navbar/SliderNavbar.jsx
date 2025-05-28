import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Store/StateData";
import { BiArrowBack, BiLogOut, BiMenu } from "react-icons/bi";
import { GiAges } from "react-icons/gi";
import { BsFillPersonFill, BsGenderMale } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import logo from "../../assets/Logo.png";
import { IoFemale } from "react-icons/io5";

const SideNavbar = () => {
  const { user, Logout, isOpen, setIsOpen } = useContext(AppContext);
  const location = useLocation();
  const [navbarScroll, setNavbarScroll] = useState("");
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div className="w-full h-full">
      {/* Menu Icon */}

      <div
        className={`${navbarScroll} ${
          isOpen ? "max-md:hidden" : "max-md:flex fixed top-0 left-0 right-0"
        } hidden w-full z-[999999] max-md:items-center py-2 max-md:justify-around`}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <p></p>
        ) : (
          <div className="w-[100%] flex items-center justify-between px-4 ">
            <img src={logo} className="w-[70px] h-full transform" alt="Logo" />
            <BiMenu className="text-white bg-[#6610f2]  p-2 text-[40px] rounded-xl cursor-pointer" />
          </div>
        )}
      </div>
      {/* Side Navbar */}
      <div
        className={`fixed top-0 rounded-tl-[15px] right-0 h-full overflow-hidden z-[99999] ${
          isOpen ? "w-64 max-md:w-full" : " "
        } bg-[#5650ce] text-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex items-center w-[90%] rounded-[15px] mx-auto h-fit mt-4 justify-center bg-[#181a3da9] shadow-lg">
            <div
              className="fixed top-3 z-[999999] left-2 p-4"
              onClick={toggleSidebar}
            >
              {isOpen ? (
                <CgClose className="text-white max-md:block hidden text-xl cursor-pointer" />
              ) : (
                <BiMenu className="text-white text-3xl cursor-pointer" />
              )}
            </div>
            {user && (
              <div className="h-full w-full flex flex-col items-center p-4">
                <div className="relative w-[70px] flex items-center flex-col justify-center ">
                  <img
                    src={user.image}
                    alt="Profile"
                    className="h-[60px] w-[60px] rounded-full border-2 border-white"
                  />
                  <div
                    className={`absolute top-0 right-2 w-3 h-3 rounded-full ${
                      user.isOnline ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </div>
                <h3 className="w-full text-center font-bold text-lg mt-2">
                  {user.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="flex gap-1 items-center">
                  <BsFillPersonFill className="bg-[#5650ce] rounded" />

                    <p className="text-sm text-gray-300">
                      {user.age || "30"} سنة
                    </p>
                  </span>
                  <span className="flex gap-1 items-center">
                    {user.gender === "male" ? (
                      <BsGenderMale className="bg-[#5650ce] rounded p-1" />
                    ) : (
                      <IoFemale className="bg-[#f383f3] rounded p-1" />
                    )}{" "}
                    <p className="text-sm text-gray-300">
                      {user.gender === "male" ? "ذكر" : "انثي"}
                    </p>
                  </span>
                </div>
                <div className="flex items-center justify-around w-full mt-4">
                  <Link to="/profile">
                    <p className="text-sm flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer">
                      <CiSettings /> الاعدادات
                    </p>
                  </Link>
                  <p
                    onClick={() => Logout(false)}
                    className="text-sm flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer"
                  >
                    <BiLogOut /> تسجيل الخروج
                  </p>
                </div>
              </div>
            )}
          </div>

          <hr className="w-[90%] mx-auto mt-4 bg-white" />

          {/* Scrollable Content */}
          <div className="h-full mt-4 flex flex-col scroll-container overflow-y-auto">
            <ul className="flex flex-col w-full px-4 h-full gap-2">
              {[
                "/",
                "/search",
                "/Blog",
                "/Bouquets",
                "/Shop",
                "/SuccessStories",
                "/Consultations",
                "/Agents",
                "/message",
                "/Support",
                "/Sharia",
                "/about",
                "/profile",
              ].map((path, index) => (
                <li key={index} className="relative">
                  <Link
                    to={path}
                    className={`relative flex items-center LinkSidebar h-12 rounded-[10px] px-2 ${
                      location.pathname === path
                        ? "text-[#181a3da9]"
                        : "text-white"
                    }`}
                  >
                    <span
                      className={`absolute w-full justify-between inset-0 flex items-center px-2 transition-transform duration-300 ease-in-out rounded-[10px] ${
                        location.pathname === path
                          ? "bg-white text-[#181a3d] font-bold transform"
                          : "bg-transparent hover:text-[#d0d1d1]"
                      }`}
                    >
                      {path === "/" && "الصفحه الرئيسية"}
                      {path === "/Blog" && "المقالات"}
                      {path === "/search" && "ابحث عن نصفك الاخر"}
                      {path === "/Bouquets" && "الباقات"}
                      {path === "/Shop" && "متجر زفاف"}
                      {path === "/Support" && "الدعم التقني"}
                      {path === "/Consultations" && "استشارات زفاف"}
                      {path === "/Sharia" && "الهيئه الشرعيه"}
                      {path === "/Agents" && "وكلاء زفاف "}
                      {path === "/message" && "المحادثات"}
                      {path === "/SuccessStories" && "قصص النجاح"}
                      {path === "/about" && "حول"}
                      {path === "/profile" && user && "الإعدادات"}
                      <BiArrowBack className="icon" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
