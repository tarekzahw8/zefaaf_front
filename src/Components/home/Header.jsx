import { Link } from "react-router-dom";
import ani1 from "../../assets/aimg1.png";

import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppContext } from "../../Store/StateData";

const Header = () => {
  const { t } = useTranslation();
  const { user } = useContext(AppContext);
  return (
    <header className="w-[90%] max-md:w-[100%] max-lg:flex-col-reverse mx-auto  flex items-center justify-around">
      <div className="w-[65%] max-lg:w-[100%]  flex flex-col items-start justify-around h-full max-md:h-fit p-8 max-md:p-1 ">
        <div className="flex flex-col justify-around  h-full  ">
          <h3
            className={`${
              user != null ? "text-[42px]" : "text-[55px]"
            } max-md:text-[30px]  font-semibold`}
          >
            ابحث عن شريك حياتك بأخلاق إسلامية
          </h3>
          <p className="text-[16px]  pt-2 max-md:text-[14] font-medium">

          فكرة منصة زفاف جاءت ابتداءً لجبر خواطر المسلمين،
ثم لنشر العفة بين الباحثين عن الزواج في كل دول العالم.

فإذا كنت تبحث عن شريك يتوافق مع قيمك الإسلامية،
أو تسعى لبناء أسرة سعيدة مستقرة وحياة زوجية،
فإن منصة زفاف توفر لك البيئة الآمنة والمثالية،
للعثور على الشريك المناسب بطريقة آمنة وشرعية.

      </p>
      {user != null ?"" :       <p className="text-[16px]  pt-2 max-md:text-[14] font-medium">
    سجّل الآن حسابك وابدأ رحلتك نحو الزواج المبارك.
</p>}

          {user != null ? (
            ""
          ) : (
            <div className="flex mt-4 gap-10 max-md:gap-[5%] space-x-4">
              <Link
                to="/login"
                className=" button_bg h-[60px] w-[180px] text-center flex items-center justify-center text-white font-medium  px-4 rounded-[15px]"
              >
                {t("Login")}
              </Link>

              <Link
                to="/Register"
                className=" button_bg h-[60px] w-[180px] text-center flex items-center justify-center text-white font-medium  px-4 rounded-[15px]"
              >
                {t("Register")}
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="animation ">
        <img src={ani1} className="imageCard" alt="" />
        {/* <Lottie  className='w-[500px] max-md:w-fit' animationData={ani1} /> */}
      </div>
    </header>
  );
};

export default Header;
