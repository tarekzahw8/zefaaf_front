import FetchInstance from "../config/FetchInstance";
import { toast, ToastContainer } from "react-toastify";
import login from "../assets/bride-groom-getting-married.png";
import { useContext, useState } from "react";
import { AppContext } from "../Store/StateData";
import { useNavigate } from "react-router";

const Login = () => {
  const { setUser, setToken } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // دالة التحقق من صحة النموذج
  const validateForm = (formData) => {
    const newErrors = {};

    // التحقق من البريد الإلكتروني
    if (!formData.get("email")) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.get("email"))
    ) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }

    // التحقق من كلمة السر
    if (!formData.get("password")) {
      newErrors.password = "كلمة السر مطلوبة";
    } else if (formData.get("password").length < 8) {
      newErrors.password = "كلمة السر يجب أن تكون على الأقل 8 أحرف";
    }

    return newErrors;
  };
  const navigate = useNavigate();

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    // التحقق من صحة النموذج
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // إرسال الطلب إلى الخادم
      const response = await FetchInstance.post("/api/login", formData);

      if (response && response.data) {
        const { status, data, token, message } = response.data;

        if (status === 200) {
          // تخزين بيانات المستخدم والتوكن في التخزين المحلي
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("token", JSON.stringify(token));

          // تحديث الحالة
          setUser(data);
          setToken(token);

          toast.success("تم تسجيل الدخول بنجاح");

          navigate("/");
        } else if (message === "Your email is not verified.") {
          toast.warn("الرجاء التحقق من حسابك");
          navigate("/verify");
        }
        else if (status == 429){
toast.error("حاول مرة أخرى بعد قليل");
        }
        else {
          toast.error("حدث خطأ أثناء تسجيل الدخول");
        }
      } else {
        toast.error("رد غير متوقع من الخادم");
      }
    } catch (error) {
      toast.error("حدث خطأ في الاتصال بالخادم");
      console.error("Login error: ", error);
    }
  };

  return (
    <header className="w-full flex items-center justify-center bg-[#20234d]">
      <div className="w-[80%] max-md:w-[95%] max-md:px-4 home_section bg-white rounded-[15px] h-fit relative z-10 mt-[100px] flex items-start mx-auto justify-around">
        <section className="flex max-md:hidden flex-col w-[40%] h-full items-start">
          <img src={login} alt="" className="imageCard rounded" />
        </section>

        <section className="w-[50%] max-md:w-full text-[#333] bg-neutral-100 p-8 shadow-2xl rounded-lg">
          <div>
            <div className="flex flex-col gap-4">
              <h2 className="text-center text-gray-700 font-bold mb-10 text-[35px]">
                تسجيل الدخول
              </h2>
              <input
                className="p-4 outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="البريد الإلكتروني"
                required
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}

              <input
                className="p-4 outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="كلمة السر"
                required
              />
              {errors.password && (
                <span className="text-red-500">{errors.password}</span>
              )}

              <button
                className="p-4 button_bg text-white rounded-[15px] hover:scale-105 duration-500 transition"
                onClick={handleLogin}
                type="button"
              >
                تسجيل الدخول
              </button>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Login;
