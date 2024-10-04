import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo1 from '../../assets/Logo.png';
// import Therapist from "../assets/assets/Therapist icon.svg";
// import Download from "../assets/assets/Download.svg";
import { FaGlobe } from "react-icons/fa"; // استيراد أيقونة الكون

const NavBarSpecialist = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [appLink, setAppLink] = useState("");

  useEffect(() => {
    // Function to check if the user is on an Apple device
    const isAppleDevice = () => {
      return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    // Update the link based on the device
    if (isAppleDevice()) {
      setAppLink("https://apps.apple.com/sa/app/تطبيق-لثغة-للأخصائيين/id6502221627?platform=iphone");
    } else {
      setAppLink("https://play.google.com/store/apps/details?id=com.bod.specialistLothgha");
    }
  }, []);

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang); // تغيير اللغة في i18n
    setIsOpen(false); // غلق القائمة المنسدلة بعد الاختيار
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="fixed flex flex-row justify-between mx-auto items-center p-2 sm:w-[1120px] sm:mx-auto top-0 sm:top-[16px] sm:rounded-81xl backdrop-filter:[blur] box-border text-base z-[999] border-solid w-full h-[70px] flex-shrink-0 rounded-[100px] border-[2px] bg-[rgba(255,_255,_255,_0.75)] backdrop-filter "
    >
      <div className="px-3">
        <img src={logo1} alt="Logo" />
      </div>
      {isMobile && (
        <button
          className="sm:hidden mr-3 text-[#35356A] text-[16px] font-medium not-italic leading-[normal]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line fill="#35356A" x1="18" y1="6" x2="6" y2="18" />
              <line fill="#35356A" x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
              <path fill="#35356A" fillRule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-8 4a1 1 0 100-2H2a1 1 0 100 2h8zm9 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-9 5a1 1 0 100-2H2a1 1 0 100 2h8z" />
            </svg>
          )}
        </button>
      )}

      <div className={`flex gap-6 ${isMobile ? "hidden" : "block"}`}>
        <Link
          className="text-[rgba(53,53,106,0.50)] hover:text-[#7f41ff] transition-all  text-right text-[16px] font-semibold not-italic leading-[normal]"
          to={`https://lothgha.com/?lang=${i18n.language}`}
        >
          {t("home")}
        </Link>

        <Link className="text-[rgba(53,53,106,0.50)] hover:text-[#7f41ff]  transition-all text-right text-[16px] font-semibold not-italic leading-[normal]"
          to={`https://lothgha.com/?lang=${i18n.language}`}         >
          {t("aboutUs")}
        </Link>
        <Link className="text-[rgba(53,53,106,0.50)] hover:text-[#7f41ff]  transition-all text-right text-[16px] font-semibold not-italic leading-[normal]" to={`https://lothgha.com/blog?lang=${i18n.language}`}>
          {t("blog")}
        </Link>

        {location.pathname === `/Register/${i18n.language}` ? (
          <Link className="text-[#35356A]  transition-all text-right text-[16px] font-semibold not-italic leading-[normal]" to="/login">
            {t("login")}
          </Link>
        ) : (
          <Link className="text-[#35356A]  transition-all text-right text-[16px] font-semibold not-italic leading-[normal]" to={i18n.language === "ar" ? "/Register/ar" : "/Register/en"}>
            {t("joinUs")}
          </Link>
        )}
      </div>

      <div className="gap-3 items-center hidden sm:flex">
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-center w-full px-1 py-1 text-sm font-medium text-gray-700 bg-white text-center border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaGlobe />
            {/* <span className="ml-2">{i18n.language === "en" ? "English" : "العربية"}</span> عرض اللغة الحالية */}
          </button>

          {isOpen && (
            <ul className="absolute right-0 z-10 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
              <li onClick={() => selectLanguage("en")} className="py-1 cursor-pointer">
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
              </li>
              <li onClick={() => selectLanguage("ar")} className="py-1 cursor-pointer">
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">العربية</a>
              </li>
            </ul>
          )}
        </div>

        <a href={`https://lothgha.com/specialists?lang=${i18n.language}`}>
          <button className="font-['IBM_Plex_Sans_Arabic'] flex items-center justify-center gap-2 relative w-[138px] h-[50px] flex-shrink-0 rounded-[42px] bg-[#E4EDF3] text-[#35356A] text-right text-[16px] font-medium not-italic leading-[normal]">
            <span className="w-[7px] h-[7px] flex-shrink-0 rounded-[7px] bg-[#00E7CC] absolute top-0 right-1"></span>
            {t("specialists")}
            {/* <img src={Therapist} alt="Therapist icon" /> */}
          </button>
        </a>
        <a href={appLink}>
          <button className="flex gap-2 w-[141px] h-[50px] p-[13px] justify-center items-center flex-shrink-0 rounded-[42px] bg-[#7F41FF] text-[#FFF] text-right text-[16px] font-medium font-['IBM Plex Sans Arabic']">
            {t("comingSoon")}
            {/* <img src={Download} alt="Download icon" /> */}
          </button>
        </a>
      </div>

    </div>
  );
};

export default NavBarSpecialist;
