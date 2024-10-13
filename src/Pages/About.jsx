import { Link } from 'react-router-dom'
import imageSection from '../assets/illutration.png'
import square from '../assets/square-svgrepo-com.svg'
import groom from '../assets/ZEFAAF AVATAR NEW .png'
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';
import ani1 from '../AnimationImage/image1.json'
import { useContext } from 'react';
import { AppContext } from '../Store/StateData';

const About = () => {
  const { t } = useTranslation();
const {user} =useContext(AppContext)
  return (
    <div className={`mt-[150px] w-full `}>
        <div className={ ` relative ${user != null ? "  max-md:mr-0 w-[79%] mx-auto mr-[280px]": " w-[80%]"} mb-16 max-md:w-[98%] max-md:gap-[30px] flex mx-auto max-md:flex-col items-center justify-between `}>
<div className='w-[50%]  max-md:w-full max-md:px-2 flex flex-col items-start justify-around gap-5'>
<h3 className='text-[45px] max-md:text-[35px] font-semibold'> من نحن ؟ </h3>

<div className='absolute  flex  w-full bottom-0 left-0' >

<img src={square} className='text-white square w-8 h-8 fill-teal-100 stroke-white' alt="" />
</div>
<p className='text-white text-[16px] max-md:text-[14px]  '
>
✽ فكرة منصة زفاف 💡
جاءت ابتداءً لجبر خواطر المسلمين حول العالم،
ثم لنشر العفة بين الباحثين عن الزواج الشرعي.

✽ ما الذي يميز منصة زفاف؟
زفاف منصة تتمتع بالأمان والسرية،
والانضباط بالضوابط الإسلامية والشرعية،
وهي للباحثين عن الزواج الاسلامي بشتى بقاع الأرض،
مقرها الرسمي هولندا - لاهاي - أوروبا
ومتواجدون بقوة في دول الخليج،
كما أصبحت المنصة تغطي جميع دول العالم بفضل الله،
وشعارنا جميعاً خطط لزواجك بأخلاق إسلامية.

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
<div className='w-[50%] max-md:w-full flex items-center justify-end max-md:justify-center '>
<Lottie className="w-full max-md:w-fit" animationData={ani1} />
</div>
        </div>

        <section className={`${user != null ? "  max-md:mr-0 w-[79%] max-md:w-[100%] mx-auto mr-[270px] rounded-[25px]": " w-[80%]"} py-12 bg-[#5650ce]`}>
      <div className={`container ${user != null ?  "w-[100%] ": "w-[80%]" }  max-md:w-full mx-auto px-4`}>
        <h2 className="text-4xl font-bold text-center mb-8">خدماتنا</h2>

        <div className="bg-[#6610f2] flex items-center w-full  bg_image  justify-center p-8 rounded-lg shadow-lg">
            <div className='w-[50%] max-md:w-full'>

          <ul className="list-disc  mb-6 text-lg text-white">
            <li className="mb-2">التعارف وفق المبادئ والأخلاق الإسلامية.</li>
            <li className="mb-2">الزواج الشرعي المبني على كتاب الله وسنة رسوله ﷺ.</li>
            <li className="mb-2">تقديم الاستشارات والنصائح الفقهية والاجتماعية.</li>
            <li className="mb-2">تأهيل الأسرة قبل الزواج وبعده لضمان الاستقرار.</li>
          </ul>
          <p className="text-xl font-semibold max-md:text-start max-md:text-[18px] text-center mb-4">
            زفاف منصة إسلامية شرعية يشرف عليها نخبة من العلماء والدعاة الموثوق بهم، وتهدف إلى تسهيل الزواج الشرعي وفق الضوابط الإسلامية.
          </p>
          <p className="text-lg text-white mb-4">
            جميع بيانات الأعضاء تخضع للتدقيق لضمان المصداقية والأمان في مجتمع زفاف.
          </p>
          <h3 className="text-2xl font-bold mb-4">دور الهيئة الشرعية لمنصة زفاف:</h3>
          <ul className="list-disc  text-lg text-white">
            <li className="mb-2">تقديم محتوى هادف ونافع لجميع الأعضاء.</li>
            <li className="mb-2">بث محاضرات ودورات علمية للزوجين.</li>
            <li className="mb-2">ضمان بيئة آمنة لجميع المستخدمين.</li>
            <li className="mb-2">التعامل الحازم مع المخالفين والمتلاعبين.</li>
          </ul>
          </div>

          <div className='w-[50%] max-md:hidden'>
    <img src={groom} className='w-full h-full' alt="" />
</div>
        </div>



      </div>
    </section>




    <div className={`max-w-4xl mt-10 mx-auto p-8 bg-white text-[#5650ce] shadow-lg rounded-t-lg ${user != null ? "  max-md:mr-1 w-[79%] max-md:w-[98%] mx-auto mr-[350px] rounded-[25px]": " w-[80%]"}`}>
      <h1 className="text-3xl font-bold text-center mb-6">منصة زفاف</h1>

      <p className="text-lg mb-4">
        تسعى لتوفير بيئة مجتمعية صالحة قائمة على البحث عن شريك الحياة بأخلاق إسلامية.
        كما نسعى جاهدين لترجمة التكنولوجيا العصرية والحلول البرمجية من خلال ربط
        المستخدمين فيما بينهم وتقديم كل سُبل الدعم لهم لتحقيق حلمهم ومرادهم الشرعي في إيجاد زوج المستقبل.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">سياسة وتوجهات منصة زفاف</h2>

      <ul className="list-disc  mb-6">
        <li>نتبع السياسة الشرعية في كل تعاملاتنا ولا نسمح بأية تجاوزات أخلاقية أو دينية.</li>
        <li>جميع القائمين على منصة زفاف مسلمون وملتزمون بتطبيق أحكام الشريعة في تعاملاتهم.</li>
        <li>إتاحة التسجيل على منصة زفاف مجانًا للجميع.</li>
        <li>
          لا مجال على منصة زفاف للتعارف أو الصداقة أو زواج المتعة أو الزواج المؤقت أو الزواج العرفي،
          أو تحت أي مسمى من المسميات الباطلة.
        </li>
      </ul>

      <p className="text-lg mb-4">
        منصة زفــاف تتمنى للجميع حظاً وافراً في إيجاد نصفه الآخر، كما نرجوا من الله العلي القدير أن
        يوفق الجميع لما يُحب ويرضى وأن يكتب لهم السعادة في الدارين إنه ولي ذلك والقادر عليه.
      </p>

      <p className="text-lg text-center font-semibold">والله ولي التوفيـــق</p>
    </div>
        </div>
  )
}

export default About