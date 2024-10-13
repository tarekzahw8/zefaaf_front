import { useState } from "react";
import FetchInstance from "../config/FetchInstance";
import { toast, ToastContainer } from "react-toastify";
import rigister from "../assets/rigister.png";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Register = () => {
  const [startDate, setStartDate] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.get("name")) {
      newErrors.name = "الاسم مطلوب";
    } else if (formData.get("name").length < 8) {
      newErrors.name = "الاسم يجب أن تكون على الأقل 8 أحرف";
    } else if (formData.get("name").length > 15) {
      newErrors.name = " الاسم لايجب ان يكون اكثر من 15 حرف";
    }
    if (!formData.get("email")) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.get("email"))
    ) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }
    // if (!formData.get("password")) {
    //   newErrors.password = "كلمة السر مطلوبة";
    // } else if (formData.get("password").length < 8) {
    //   newErrors.password = "كلمة السر يجب أن تكون على الأقل 8 أحرف";
    // }else if((formData.get("password").length > 8)){
    //   newErrors.password = "كلمة السر يجب أن تكون على الأقل 8 أحرف";

    // }

    if (!startDate) {
      newErrors.birth = "تاريخ الميلاد مطلوب";
    }

    if (!formData.get("gender")) {
      newErrors.gender = "يرجى اختيار الجنس";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    if (startDate) {
      const formattedDate = format(startDate, "dd/MM/yyyy");
      formData.append("birth", formattedDate);
    }

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await FetchInstance.post("/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        navigate("/verify", { state: { email: res.data.data.email } });
        toast.success("تم التسجيل بنجاح، يرجى التحقق من البريد الإلكتروني.");
      } else {
        toast.error("كلمه السر او البريد الالكتروني خطأ");
      }
    } catch (error) {
      console.error(error);
      toast.error("حدث خطأ اثناء التسجيل");
    }
  };

  return (
    <header className="w-full flex items-center LoginPage justify-center bg-[#20234d]">
      <div className="w-[80%] max-md:w-[98%] max-md:flex-col home_section max-md:px-4 bg-white rounded-[15px] h-fit relative z-10 mt-[100px] flex items-start mx-auto justify-around">
        <section className="flex max-md:hidden flex-col w-[40%] items-start ">
          <img src={rigister} alt="" className="imageCard" />
        </section>

        <section className="w-[50%] max-md:w-full text-[#333] bg-neutral-100 p-8 max-md:p-4 shadow-2xl rounded-lg">
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-4"
            >
              <h2 className="text-center text-gray-700 font-bold mb-10 text-[35px]">
                تسجيل حساب جديد
              </h2>

              <div className="flex items-center gap-3 justify-between w-full">
                <input
                  className="p-4 shadow-sm w-full outline-none border font-medium text-[18px] border-gray-300 rounded-[15px] focus:border-blue-500"
                  type="text"
                  name="name"
                  placeholder="الاسم باكامل"
                />
              </div>
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}

              <div className="flex items-center gap-3 justify-between w-full">
                <div className="flex flex-col">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="p-4 shadow-sm bg-gray-50 text-[18px] text-gray-700 outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500 focus:bg-white focus:text-gray-900"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="تاريخ الميلاد"
                  />
                  {errors.birth && (
                    <span className="text-red-500 mt-1">{errors.birth}</span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <select
                    className="p-4 shadow-sm w-full bg-gray-50 text-gray-700 outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                    name="gender"
                  >
                    <option value="" disabled selected>
                      اختر الجنس
                    </option>
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                  </select>
                  {errors.gender && (
                    <span className="text-red-500 mt-1">{errors.gender}</span>
                  )}
                </div>
              </div>

              <input
                className="p-4 shadow-sm outline-none text-[18px] border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="email"
                name="email"
                placeholder="البريد الالكتروني"
              />
              {errors.email && (
                <span className="text-red-500 mt-1">{errors.email}</span>
              )}

              <input
                className="p-4 shadow-sm outline-none border text-[18px] font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="password"
                name="password"
                placeholder="كلمة السر"
              />
              {errors.password && (
                <span className="text-red-500 ">{errors.password}</span>
              )}

              <button
                className="p-4 shadow-sm button_bg text-[18px] text-white rounded-[15px] hover:scale-105 duration-500 transition"
                type="submit"
              >
                تسجيل حساب
              </button>
            </form>
          </div>
        </section>
      </div>

      <ToastContainer />
    </header>
  );
};

export default Register;
