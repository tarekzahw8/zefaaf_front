import { BsTelegram } from "react-icons/bs";
import shape from "../../assets/f-shape.png";
import icon_n from "../../assets/n-icon.png";
import you from "../../assets/you.png";
import facebook from "../../assets/OIP.jpeg";
import telegram from "../../assets/Telegram_logo.svg.webp";
// import right_shape from '../../assets/right-shape.png'
import ani1 from "../../AnimationImage/image2.json";
import ani3 from "../../AnimationImage/image3.json";
import Lottie from "lottie-react";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();

  return (
    <footer className={`${location.pathname != "/login"? "":"hidden"} mr-[240px]  ${location.pathname != "/Register"? "":"hidden"} footer-section rounded-t-[10px] bg-indigo-950 relative z-[99] overflow-hidden
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

<Link to='https://www.youtube.com/@zefaaf'>
  <img src={you} className="w-10 max-md:w-8 h-8"/>
</Link>
<Link to='https://www.facebook.com/zefaaf.net'>

  <img src={facebook} className="w-10 max-md:w-8 h-8 rounded-full"/>
</Link>
  <Link to='https://x.com/@zefaaf'>
  <img src={telegram} className="w-10 max-md:w-8 h-8"/>
</Link>
</div>
            <div className="text-md  text-end max-md:text-center w-full">
              <span>جميع الحقوق محفوظة © 2024 لمنصة </span>
              <a href="#" className="text-blue-600">
                Zefaaf
              </a>
            </div>
            <div className="footer-social-links flex space-x-4">
              <a href="#" className="text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400">
                <i className="fab fa-dribbble"></i>
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
            <span>{link.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
