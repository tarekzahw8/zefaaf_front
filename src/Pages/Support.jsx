// import { useContext } from "react";
// import { AppContext } from "../Store/StateData";
import { SiGmail, SiTelegram } from "react-icons/si";
import { Link } from "react-router-dom";

const Support = () => {
  // const { user } = useContext(AppContext);

  return (
    <div className={` pt-[100px] mb-10 mr-3 mx-auto w-[90%] px-4`}>
      <h3 className="w-full text-center text-4xl font-bold text-gray-50">
        الدعم التقني
      </h3>

      {/* قسم الأسئلة الشائعة */}
      <div className="mt-6 text-lg">
        <h4 className="text-3xl text-gray-50 font-bold mb-4">الأسئلة الشائعة</h4>
        <ul className="list-disc text-gray-200 mb-6 pl-5">
          <li className="mb-4">
            <strong>كيف يمكنني تحديث معلومات حسابي؟</strong>
            <p>يمكنك تحديث معلومات حسابك من خلال الذهاب إلى صفحة إعدادات الحساب ثم النقر على تعديل المعلومات.</p>
          </li>
          <li className="mb-4">
            <strong>نسيت كلمة المرور، ماذا أفعل؟</strong>
            <p>اضغط على نسيت كلمة المرور في صفحة تسجيل الدخول، وسيتم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.</p>
          </li>
          {/* <li className="mb-4">
            <strong>كيف أستطيع إلغاء اشتراكي؟</strong>
            <p>يمكنك إلغاء اشتراكك عن طريق الانتقال إلى صفحة "إدارة الاشتراك" ضمن إعدادات الحساب.</p>
          </li> */}
        </ul>

        {/* طرق التواصل */}
        <h4 className="text-3xl text-gray-50 font-bold mb-4">طرق التواصل</h4>
        <p className="mb-4 text-gray-200">
          إذا لم تتمكن من حل المشكلة باستخدام الأسئلة الشائعة، يمكنك التواصل مع فريق الدعم الفني لدينا عبر إحدى الطرق التالية:
        </p>

        <p className="pt-4 text-gray-200">
          <strong>الدردشة المباشرة:</strong> تواصل مع أحد وكلائنا مباشرة من خلال النقر على صفحة وكلاء زفاف.
        </p>

        <div className="flex mt-4 items-start flex-col gap-3 mb-4 text-gray-200">
          <p><strong>البريد الإلكتروني:</strong> أرسل لنا استفساراتك أو مشاكل التقنية عبر البريد الإلكتروني:</p>
          <Link to="mailto:Support@zefaaf.net" className="flex items-center gap-3 cursor-pointer">
            <SiGmail className="text-red-800 bg-white rounded-full text-xl p-1" />
            <span>Support@zefaaf.net</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 cursor-pointer text-gray-200">
          <SiTelegram className="text-blue-500 text-2xl " />
          <Link to="https://t.me/zefaaf" className="flex items-center">
            <span className="cursor-pointer">https://t.me/zefaaf</span>
          </Link>
        </div>

        <p className="mt-6 text-gray-200">
          <strong>ساعات العمل:</strong><br />
          الأحد - الخميس: 9:00 صباحًا - 6:00 مساءً<br />
          الجمعة والسبت: مغلق
        </p>
      </div>
    </div>
  );
};

export default Support;
