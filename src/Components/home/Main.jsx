import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import ani1 from "../../AnimationImage/image1.json";
import { useContext } from "react";
import { AppContext } from "../../Store/StateData";

const Main = () => {
  const { t } = useTranslation();
const {user} = useContext(AppContext)
  return (
    <div className="mt-[100px] w-full">
      <div className="w-[80%]  max-md:w-[98%] max-md:gap-[30px] flex mx-auto max-md:flex-col items-center  justify-between  ">
        <div className="w-[50%] max-md:w-full flex flex-col items-start justify-around gap-5">
          <p className="text-violet-600 text-[22px] font-medium">
            قابل أشخاص جدد اليوم!
          </p>
          <h3 className="text-[45px] max-md:text-[35px] font-semibold">
            منصة تعزز القيم الإسلامية
          </h3>
          <p className="text-white text-[16px] max-md:text-[14px]  ">
            في عصرنا الحديث، أصبحت منصات التعارف جزءًا مهمًا من الحياة
            الاجتماعية، حيث تسهم في توصيل الأفراد الذين يتشاركون القيم والمبادئ.
            "زفاف" هو تطبيق مصمم خصيصًا لمساعدة العزاب في العثور على شريك حياة
            يناسب تطلعاتهم ضمن إطار قيمنا الإسلامية. إذا كنت تبحث عن وسيلة بسيطة
            وآمنة للتعرف على الفردي، فإن "زفاف" هو الخيار الأمثل.
            <p></p>
            يوفر لك التطبيق ميزات مجانية تتيح لك استكشاف ملفات تعريف العزاب
            الذين يعيشون بالقرب منك، والتواصل معهم، ومقابلتهم بطريقة محترمة، مما
            يساعدك في رحلتك نحو بناء علاقة مبنية على الحب والاحترام. مع "زفاف"،
            ستحصل على تجربة مستخدم مميزة تتيح لك التواصل مع آلاف العزاب، مما
            يسهل عليك العثور على الشريك المثالي في بيئة آمنة ومريحة.
          </p>
          {/* <img src={} alt="" /> */}

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
        <div className="w-[50%] max-md:w-full mx-auto pr-16 max-md:pr-0 flex items-center  justify-end">
          <Lottie
            className="w-full max-md:w-fit imageCard"
            animationData={ani1}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
