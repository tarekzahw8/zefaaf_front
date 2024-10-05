import { BsTelegram } from 'react-icons/bs';
import shape from '../../assets/f-shape.png'
import icon_n from '../../assets/n-icon.png'
import right_shape from '../../assets/right-shape.png'
import ani1 from '../../assets/image2.json'
import ani3 from '../../assets/image3.json'

import Lottie from 'lottie-react';
const Footer = () => {
  return (
    <footer className="footer-section rounded-t-[10px] relative z-[99] overflow-hidden bg-transparent text-white pt-16">
      {/* Shapes */}
      <img
        className="absolute z-[-1] top-0 left-0"
        src={shape}
        alt="Shape"
      />
      <div className=' absolute w-full z-[-1] flex-row-reverse overflow-hidden flex items-center justify-between'>

              <Lottie className="w-full opacity-10 max-md:w-fit" animationData={ani1} />

              <Lottie className="w-full opacity-10 max-md:w-fit" animationData={ani3} />

      </div>

      {/* Newsletter Section */}
      <div className="newslater-section ">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-1/2 md:w-3/4">
              <div className="newslater-container pt-[100px] p-8 rounded-lg text-center">
                <div className="newslater-wrapper">
                  <div className="icon flex   w-full items-center justify-center z-[9998] relative mb-4">
                    <div className='w-[150px] rounded-full flex items-center justify-center button_bg h-[150px]'>

                    <img
                     className='animate-bounce'
                      src={icon_n}
                      alt="Newsletter Icon "
                      />
                      </div>
                  </div>
                  <p className="text-lg mb-4">
                  اشترك لتلقي بريد إلكتروني شهريًا بأحدث الأخبار!                  </p>
                  <form className="newslater-form flex justify-center">
                    <input
                      className="p-3 rounded-r-lg outline-none pt-4 text-[#333] font-bold w-3/4 md:w-full"
                      type="text"
                      placeholder="اكتب بريدك الالكتروني"
                    />
                    <button
                      type="submit"
                      className="button_bg flex items-center justify-center text-white  w-[100px] rounded-l-lg"
                    >
                        <BsTelegram className='w-[20px] h-[20px]'/>
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
    { text: "نبذه عنا", href: "#" },
    { text: "تواصل معنا", href: "#" },
    { text: "آراء العملاء", href: "#" },
    { text: "قصص النجاح", href: "#" },
    { text: "رخصة العمل", href: "#" },
  ]}
/>
<FooterLinkSection
  title="حسابي"
  links={[
    { text: "إدارة الحساب", href: "#" },
    { text: "نصائح الأمان", href: "#" },
    { text: "التحقق من الحساب", href: "#" },
    { text: "الأمان والحماية", href: "#" },
    { text: "مستوى العضوية", href: "#" },
  ]}
/>
<FooterLinkSection
  title="مركز المساعدة"
  links={[
    { text: "مركز المساعدة", href: "#" },
    { text: "الأسئلة الشائعة", href: "#" },
    { text: "دليل البداية السريع", href: "#" },
    { text: "الدروس التعليمية", href: "#" },
    { text: "مدونة الشركاء", href: "#" },
  ]}
/>
<FooterLinkSection
  title="قانوني"
  links={[
    { text: "سياسة الخصوصية", href: "#" },
    { text: "اتفاقيات المستخدم النهائي", href: "#" },
    { text: "سياسة الاسترجاع", href: "#" },
    { text: "سياسة ملفات تعريف الارتباط", href: "#" },
    { text: "الإبلاغ عن إساءة", href: "#" },
  ]}
/>

          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-wrapper py-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-11/12">
              <hr className="border-gray-700" />
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div className="text-sm text-center w-full">
              <span>جميع الحقوق محفوظة © 2024  لمنصة </span>
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
const FooterLinkSection = ({ title, links }) => (
  <div className="link-wrapper">
    <h4 className="text-xl font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
          >
            <i className="fas fa-angle-double-right"></i>
            <span>{link.text}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
