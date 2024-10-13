import { useContext } from "react";
import { AppContext } from "../Store/StateData";
import { Navigate } from "react-router";

const Profile = () => {
  const { user } = useContext(AppContext);
  console.log(user);

  if (!user) {
    return <Navigate to="/Login" />;
  }

  return (
    <div
      className={`mt-[150px] mx-auto w-70% ${
        user != null ? "mr-[250px] max-md:mr-0" : ""
      }`}
    >
      <div className={`${user != null ? "w-full" : "w-[80%]"} mx-auto`}>
        {user ? (
          <div className="profile-section  p-8 rounded-lg shadow-lg text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">
              الملف الشخصي
            </h1>
            <div className="profile-details space-y-6">
              <div className="flex items-center justify-around">
                <div className="flex flex-col">
                  <label className="font-bold">اسم المستخدم:</label>
                  <input
                    disabled
                    type="text"
                    value={user.name}
                    className="mt-2 p-4 border border-gray-300 rounded-lg w-[450px] focus:outline-none focus:ring-2 focus:ring-blue-500  bg-indigo-100 text-indigo-950"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold">البريد الإلكتروني:</label>
                  <input
                    disabled
                    type="email"
                    value={user.email}
                    readOnly
                    className="mt-2 p-4 border border-gray-300 rounded-lg w-[450px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-indigo-950 bg-gray-200"
                  />
                </div>
              </div>
              {/* {user.phone && (
                <div>
                  <label className="font-bold">رقم الهاتف:</label>
                  <input
                  disabled
                    type="text"
                    value={user.phone}
                    readOnly
                    className="mt-2 p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  />
                </div>
              )} */}
              <div className="flex items-center justify-around gap-4">
                <div className="flex flex-col">
                  <label className="font-bold">تاريخ الميلاد:</label>
                  <input
                    disabled
                    value={user.birth} // تأكد من وجود هذا الحقل في كائن المستخدم
                    className="mt-2 p-4 border border-gray-300 rounded-lg w-[450px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-indigo-100 text-indigo-950"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold">النوع :</label>

                  <input
                    disabled
                    value={user.gender} // تأكد من وجود هذا الحقل في كائن المستخدم
                    className="mt-2 p-4 border border-gray-300 rounded-lg w-[450px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-indigo-100 text-indigo-950"
                  />
                </div>
              </div>
              <div className="flex items-center justify-around  gap-4">
                <div className="flex flex-col">
                  <label className="font-bold">كلمة المرور:</label>
                  <input
                    disabled
                    type="password"
                    value={user.password || "*********"} // تأكد من وجود هذا الحقل في كائن المستخدم
                    className="mt-2 p-4 border border-gray-300 rounded-lg w-[450px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-indigo-100 text-indigo-950"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-bold">النوع :</label>

                  <input
                    disabled
                    value={user.gender} // تأكد من وجود هذا الحقل في كائن المستخدم
                    className="mt-2 p-4 border border-gray-300 rounded-lg w-[450px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-indigo-100 text-indigo-950"
                  />
                </div>
              </div>
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
