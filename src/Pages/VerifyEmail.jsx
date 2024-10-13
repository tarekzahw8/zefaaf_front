import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import FetchInstance from "../config/FetchInstance";
import { toast, ToastContainer } from "react-toastify";
import { AppContext } from "../Store/StateData";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(location.state?.email || "");
  const [timer, setTimer] = useState(600); // 10 دقائق = 600 ثانية
  const [canResend, setCanResend] = useState(false);
  const { setUser, setToken } = useContext(AppContext);

  useEffect(() => {
    // كل ثانية يتم تقليل الوقت
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId); // تنظيف المؤقت عند انتهاء الاستخدام
    } else {
      setCanResend(true); // تم انتهاء المؤقت
    }
  }, [timer]);

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await FetchInstance.post("/api/get-token", { email, otp });

      if (res.data.status === 200) {
        toast.success("تم التحقق بنجاح!");
 localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setUser(res.data.data);
        setToken(res.data.token);
        navigate("/");
      } else {
        toast.error("الرمز غير صحيح أو انتهت صلاحيته.");
      }
    } catch (error) {
      console.log(error);
      toast.error("حدث خطأ أثناء التحقق.");
    }
  };

  const handleResend = async () => {
    try {
      const res = await FetchInstance.post("/api/resend-otp", { email });
      if (res.data.status === 200) {
        toast.success("تم إرسال رمز جديد!");
        setTimer(600); // إعادة تعيين المؤقت إلى 10 دقائق
        setCanResend(false); // إيقاف إمكانية إعادة الإرسال حتى ينتهي المؤقت
      } else {
        toast.error("حدث خطأ أثناء إرسال الرمز.");
      }
    } catch (error) {
      console.log(error);
      toast.error("حدث خطأ أثناء إعادة إرسال الرمز.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-[#20234d]">
      <div className="w-[80%] max-md:w-[95%] max-md:px-4 home_section bg-white rounded-[15px] h-fit relative z-10 mt-[100px] flex items-start mx-auto justify-around">
        <section className="w-[50%] max-md:w-full text-[#333] bg-neutral-100 p-8 shadow-2xl rounded-lg">
          <h2 className="text-center text-gray-700 font-bold mb-10 text-[35px]">
            تأكيد البريد الإلكتروني
          </h2>
          <form onSubmit={handleVerify} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني"
              className="p-4 shadow-sm outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
              required
            />
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="رمز التحقق (OTP)"
              className="p-4 shadow-sm outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
              required
            />
            <button
              className="p-4 shadow-sm button_bg text-white rounded-[15px] hover:scale-105 duration-500 transition"
              type="submit"
              disabled={timer === 0 && !canResend} // تعطيل الزر إذا انتهى الوقت والرمز يحتاج إلى إعادة إرسال
            >
              تحقق
            </button>
          </form>

          {/* عرض المؤقت */}
          <div className="mt-4 text-center text-gray-600">
            {canResend ? (
              <button
                onClick={handleResend}
                className="text-blue-500 cur underline hover:text-blue-700"
              >
                إعادة إرسال الرمز
              </button>
            ) : (
              <p                 onClick={handleResend}
>
                يرجى الانتظار {Math.floor(timer / 60)}:
                {("0" + (timer % 60)).slice(-2)} لإعادة إرسال الرمز
              </p>
            )}
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VerifyEmail;
