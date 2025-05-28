import { useContext, useState } from "react";
import { AppContext } from "../Store/StateData";
import { Navigate } from "react-router";
import { motion } from "framer-motion";
// import UserSettingSection from "./UserSettingSection";

const Profile = () => {
  const { user, Logout } = useContext(AppContext);
  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const toggleSwitch2 = () => setIsOn2(!isOn2);

  if (!user) {
    return <Navigate to="/Login" />;
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className={` mx-auto w-70% ${user ? "" : ""}`}>
      <div className={`${user ? "w-full" : "w-[80%]"} mx-auto`}>
        {user ? (
          <div className="profile-section p-8 select-none rounded-lg shadow-lg text-white">
            <div className=" bg-[#181a3d] top-0 left-0 fixed flex max-md:w-full max-md:top-10 items-center justify-center w-[90%] h-[150px]">
              <h1 className="text-4xl       font-bold ">الملف الشخصي</h1>
            </div>
            <div className="flex flex-wrap   mt-[170px] justify-between items-start h-full gap-8">
              {/* القسم الأول: البيانات الشخصية */}
              <div className="section w-[30%] max-md:w-full max-lg:w-[48%] space-y-6">
                <h2 className="text-2xl font-bold mb-4">البيانات الشخصية :</h2>
                <div className="card button_bg p-4 flex items-start flex-col justify-around rounded-lg shadow-md text-white min-h-[200px]">
                  <p className="w-full flex items-center  justify-between">
                    <strong>الإسم بالكامل:</strong>
                    <span>{user.name || "محمد محمود"}</span>
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>الجنسية :</strong> {user.nationality || "مصري"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>الأقامه :</strong> {user.nationality || "في بيتنا"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>المدينة :</strong> {user.birth || "قليوب"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>البريد الإلكتروني:</strong> {user.email || "mohmamed@gmail.com"}
                  </p>
                </div>
              </div>

              {/* القسم الثاني: المواصفات الجسدية */}
              <div className="section w-[30%] max-md:w-full max-lg:w-[48%] space-y-6">
                <h2 className="text-2xl font-bold mb-4">المواصفات الجسدية :</h2>
                <div className="card bg-indigo-100 p-4 flex items-start flex-col justify-around rounded-lg shadow-md text-indigo-950 min-h-[200px]">
                  <p className="w-full flex items-center  justify-between">
                    <strong>الطول:</strong> {user.height || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>الوزن:</strong> {user.weight || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>لون البشرة:</strong> {user.weight || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>الحالة الصحية:</strong> {user.weight || "غير محدد"}
                  </p>
                </div>
              </div>

              {/* القسم الثالث: الحالة الاجتماعية */}
              <div className="section w-[30%] max-md:w-full max-lg:w-[48%] space-y-6">
                <h2 className="text-2xl font-bold mb-4">الحالة الاجتماعية :</h2>
                <div className="card bg-indigo-100 p-4 flex items-start flex-col justify-around rounded-lg shadow-md text-indigo-950 min-h-[200px]">
                  <p className="w-full flex items-center  justify-between">
                    <strong>العمر :</strong> {user.maritalStatus || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>الحالة الاجتماعية:</strong>{" "}
                    {user.maritalStatus || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong> نوع الزواج:</strong>{" "}
                    {user.maritalStatus || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>عدد الاطفال :</strong>{" "}
                    {user.maritalStatus || "غير محدد"}
                  </p>
                </div>
              </div>

              {/* القسم الرابع: عن شريك الحياة */}
              <div className="section w-[30%] max-md:w-full max-lg:w-[48%] space-y-6">
                <h2 className="text-2xl font-bold mb-4">عن شريك الحياة :</h2>
                <div className="card bg-indigo-100 p-4 flex items-start flex-col justify-start rounded-lg shadow-md text-indigo-950 min-h-[200px]">
                  <p className="w-full flex items-start   justify-between">
                    {user.partnerPreferences || (
                      <strong>
                        حريص على الصلاة في جماعة، تقي، خلوق، مستقيم على الدين،
                        واع بنفسه وواقعه، أنهى الدراسة الجامعية، لم يسبق له
                        الزواج، يستطيع توفير مسكن خاص، علاقته طيبة مع عائلته،
                        مسؤول، غير مدخن، ولا يسمع الموسيقى.
                      </strong>
                    )}
                  </p>
                </div>
              </div>

              {/* القسم الخامس: الدراسة والعمل */}
              <div className="section w-[30%] max-md:w-full max-lg:w-[48%] space-y-6">
                <h2 className="text-2xl font-bold mb-4">الدراسة والعمل :</h2>
                <div className="card bg-indigo-100 p-4 flex items-start flex-col justify-around rounded-lg shadow-md text-indigo-950 min-h-[200px]">
                  <p className="w-full flex items-center  justify-between">
                    <strong>المستوى الدراسي:</strong>{" "}
                    {user.education || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>الوضع المادي:</strong> {user.job || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>مجال العمل:</strong> {user.job || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>الوظيفة:</strong> {user.job || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>مستوى الدخل الشهري:</strong>{" "}
                    {user.job || "غير محدد"}
                  </p>
                </div>
              </div>

              {/* القسم السادس: عن نفسي */}

              {/* القسم السابع: الإلتزام الديني */}
              <div className="section w-[30%] max-md:w-full max-lg:w-[48%] space-y-6">
                <h2 className="text-2xl font-bold mb-4">الإلتزام الديني :</h2>
                <div className="card bg-indigo-100 p-4 flex items-start flex-col justify-around rounded-lg shadow-md text-indigo-950 min-h-[200px]">
                  <p className="w-full flex items-center  justify-between">
                    <strong>الصلاة :</strong>{" "}
                    {user.religiousCommitment || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>الحجاب :</strong>{" "}
                    {user.religiousCommitment || "غير محدد"}
                  </p>
                  <p className="w-full flex items-center  justify-between">
                    <strong>التدخين :</strong>{" "}
                    {user.religiousCommitment || "غير محدد"}
                  </p>
                </div>
              </div>

              <div className="section w-[100%]  space-y-6">
                <h2 className="text-2xl font-bold mb-4">عن نفسي :</h2>
                <div className="card bg-indigo-100 p-4 flex items-start flex-col justify-start rounded-lg shadow-md text-indigo-950 min-h-[200px]">
                  <p className="w-full flex items-center  justify-between">
                    {user.aboutMe || (
                      <strong>
                        فتاة من شرق الجزائر، من بيئة محافظة، جامعية، حافظة
                        للقرآن، مهتمة بالعلم الشرعي، أسعى أن أكون ملتزمة بديني
                        ما استطعت، أحب القرار بالبيت، لا أحب النكد وأكره الكذب،
                        أحب الحوار وتبادل الآراء.
                      </strong>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <h4 className="text-[31px] font-bold pb-10 pt-10">
              {" "}
              التحكم في الحساب :
            </h4>
            <div className="flex gap-10 max-md:flex-col">
              <div className="w-[50%] max-md:w-full  bg-indigo-100 text-indigo-950 flex items-center px-4 py-3 rounded-xl justify-between">
                <h4 className="text-[18px] font-bold">
                  حاله التواجد (متصل الآن)
                </h4>
                <div
                  className="switch button_bg"
                  data-isOn={isOn}
                  onClick={toggleSwitch}
                >
                  <motion.div className="handle" layout transition={spring} />
                </div>
              </div>

              <div className="w-[50%] max-md:w-full  bg-indigo-100 text-indigo-950 flex items-center px-4 py-3 rounded-xl justify-between">
                <h4 className="text-[18px] font-bold">أظهار الاسم الحقيقي</h4>
                <div
                  className="switch button_bg"
                  data-isOn={isOn2}
                  onClick={toggleSwitch2}
                >
                  <motion.div className="handle" layout transition={spring} />
                </div>
              </div>
            </div>

            {/* أزرار تسجيل الخروج وحذف الحساب */}
            <div className="w-full flex items-center justify-center gap-10 mt-8">
              <button
                className="button_bg py-2 px-4 rounded-[5px]"
                onClick={() => Logout(false)}
              >
                تسجيل الخروج
              </button>
              <button className="bg-red-600 py-2 px-4 rounded-[5px]">
                حذف الحساب
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500">
            يرجى تسجيل الدخول لعرض ملفك الشخصي
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
