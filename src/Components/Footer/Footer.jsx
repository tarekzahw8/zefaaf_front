import { BsTelegram, BsYoutube } from "react-icons/bs";
import shape from "../../assets/f-shape.png";
import icon_n from "../../assets/n-icon.png";
// import right_shape from '../../assets/right-shape.png'
import ani1 from "../../AnimationImage/image2.json";
import ani3 from "../../AnimationImage/image3.json";
import Lottie from "lottie-react";
import { Link, useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { AppContext } from "../../Store/StateData";
import { FaFacebook, FaTelegram } from "react-icons/fa";
const Footer = () => {
  const location = useLocation();
// const {user}= useContext(AppContext)
  return (
    <footer className={`${location.pathname != "/login"? "":"hidden"} ${location.pathname != "/profile"? "":"hidden"} ${location.pathname != "/message"? "":"hidden"}  ${location.pathname != "/Register"? "":"hidden"} footer-section rounded-t-[10px] bg-indigo-950 relative z-[99] overflow-hidden
     bg-transparent text-white pt-16`}>
      {/* Shapes */}
      <img className="absolute z-[-1] top-0 left-0" src={shape} alt="Shape" />
      <div className=" absolute w-full z-[-1] flex-row-reverse overflow-hidden flex items-center justify-between">
        <Lottie
          className="w-full opacity-10 max-md:w-fit"
          animationData={ani1}
        />

        <Lottie
          className="w-full opacity-10 max-md:w-fit"
          animationData={ani3}
        />
      </div>

      {/* Newsletter Section */}
      <div className="newslater-section ">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-1/2 md:w-3/4">
              <div className="newslater-container pt-[100px] p-8 rounded-lg text-center">
                <div className="newslater-wrapper">
                  <div className="icon flex   w-full items-center justify-center z-[9998] relative mb-4">
                    <div className="w-[150px] rounded-full flex items-center justify-center button_bg h-[150px]">
                      <img
                        className="animate-bounce"
                        src={icon_n}
                        alt="Newsletter Icon "
                      />
                    </div>
                  </div>
                  <p className="text-lg mb-4">
                    اشترك لتلقي بريد إلكتروني شهريًا بأحدث الأخبار!{" "}
                  </p>
                  <form onClick={(e)=>e.preventDefault()} className="newslater-form flex justify-center">
                    <input
                      className="p-3 rounded-r-lg outline-none pt-4 text-[#333] font-bold w-3/4 md:w-full"
                      type="text"
                      placeholder="اكتب بريدك الالكتروني"
                    />
                    <button
                      type="submit"
                      className="button_bg flex items-center justify-center text-white  w-[100px] rounded-l-lg"
                    >
                      <BsTelegram className="w-[20px] h-[20px]" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Links */}
      <div className="w-[90%]  mx-auto px-4">
        <div className="footer-links py-8">
          <div className="flex justify-center">
            <div className="w-full lg:w-11/12">
              <hr className="border-gray-700" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
            <FooterLinkSection
              title="معلوماتنا"
              links={[
                { text: "نبذه عنا", href: "/About" },
                { text: "تواصل معنا", href: "/Contact" },
                { text: "آراء العملاء", href: "/Feedback" },
                { text: "قصص النجاح", href: "/SuccessStories" },
                { text: "رخصة العمل", href: "/" },
              ]}
            />
            <FooterLinkSection
              title="حسابي"
              links={[
                { text: "إدارة الحساب", href: "/account" },
                { text: "نصائح الأمان", href: "/privacy" },
                { text: "التحقق من الحساب", href: "/verified" },
                { text: "الأمان والحماية", href: "/secure" },
                { text: "مستوى العضوية", href: "/levelPackage" },
              ]}
            />
            <FooterLinkSection
              title="مركز المساعدة"
              links={[
                { text: "مركز المساعدة", href: "/Help" },
                { text: "الأسئلة الشائعة", href: "/question" },
                { text: "دليل البداية السريع", href: "/startedFast" },
                { text: "الدروس التعليمية", href: "/onlineSession" },
                { text: "مدونة الشركاء", href: "/blog" },
              ]}
            />
            <FooterLinkSection
              title="قانوني"
              links={[
                { text: "سياسة الخصوصية", href: "/privacy" },
                { text: "اتفاقيات المستخدم النهائي", href: "/" },
                { text: "سياسة الاسترجاع", href: "/" },
                { text: "سياسة ملفات تعريف الارتباط", href: "/" },
                { text: "الإبلاغ عن إساءة", href: "/" },
              ]}
            />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-wrapper py-4">
          <div className="flex justify-center">
            <div className="w-full  lg:w-11/12">
              <hr className="border-gray-700" />
            </div>
          </div>
          <div className="flex max-md:flex-col gap-4 items-center justify-around  w-full py-4">
          <div className="flex items-center justify-around gap-4">
      {/* YouTube Button */}
      <button className="button_bg w-[50px] flex items-center justify-center h-[50px] rounded-full">
        <Link to="https://www.youtube.com/@zefaaf" className="flex items-center justify-center ">
          <BsYoutube className="w-6 h-6" />
        </Link>
      </button>

      {/* Facebook Button */}
      <button className="button_bg w-[50px] flex items-center justify-center h-[50px] rounded-full">
        <Link to="https://www.facebook.com/zefaaf.net" className="flex items-center justify-center">
          <FaFacebook />
        </Link>
      </button>

      {/* Telegram Button */}
      <button className="button_bg w-[50px] flex items-center justify-center h-[50px] rounded-full">
        <Link to="https://x.com/@zefaaf" className="flex items-center justify-center">
          <FaTelegram />
        </Link>
      </button>
    </div>
            <div className="text-md  text-end max-md:text-center w-full">
              <span>جميع الحقوق محفوظة © 2024 لمنصة </span>
              <a href="#" className="text-blue-600">
                Zefaaf
              </a>
            </div>

          </div>
        </div>
      </div>



    </footer>
  );
};

// Component for Footer Link Section
// eslint-disable-next-line react/prop-types
const FooterLinkSection = ({ title, links }) => (
  <div className="link-wrapper">
    <h4 className="text-xl font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.href}
            className="flex items-center space-x-2 text-gray-400 hover:text-white hover:-translate-x-4 transition duration-150"
          >
            <i className="fas fa-angle-double-right"></i>
            <span className="flex items-center gap-3">{link.text}

            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
