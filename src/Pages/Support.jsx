import { useContext } from "react";
import { AppContext } from "../Store/StateData";
import { SiGmail, SiTelegram } from "react-icons/si";
import { Link } from "react-router-dom";

const Support = () => {
  const { user } = useContext(AppContext);

  return (
    <div className={`${user ? "mr-[280px] max-md:mr-0" : ""} pt-[100px] mb-10 px-4`}>
      <h3 className="w-full text-center text-4xl font-bold text-gray-50">
        الدعم التقني
      </h3>

      <div className="mt-6 text-lg">
        <p className="mb-4 text-gray-200">
          للتواصل مع فريق الدعم التقني، يرجى التواصل على:
        </p>

        <div className="flex items-center space-x-2 mb-4 text-gray-200 gap-3">
          <SiGmail className="text-red-800  bg-white rounded-full text-xl p-1" />
          <Link to="mailto:Support@zefaaf.net">
          <span>Support@zefaaf.net</span>
          </Link>
        </div>
        <div className="flex items-center space-x-2 text-gray-200 gap-3">
          <SiTelegram className="text-blue-500 text-2xl" />
        <Link to="https://t.me/zefaaf">
          <span>
          https://t.me/zefaaf

          </span>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
