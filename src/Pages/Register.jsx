import FetchInstance from "../config/FetchInstance";
import { toast, ToastContainer } from "react-toastify";
import rigister from "../assets/rigister.png";
const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await FetchInstance.post("URL_ENDPOINT", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // url , data = token , message success login only ===  wait
      //if condition if res==200 or success   === done
      if (res.status === 200) {
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        toast.success("تم تسجيل الدخول بنجاح");
      } else {
        toast.error("كلمه السر او البريد الالكتروني خطا");
      }
    } catch (error) {
      console.error(error);
      toast.error("حدث خطأ اثناء تسجيل الدخول");
    }
  };

  return (
    <header className="w-full  flex items-center LoginPage justify-center  bg-[#20234d]">
      <div className="w-[80%] max-md:w-[90%] max-md:flex-col home_section max-md:px-4 bg-white rounded-[15px] h-fit  relative z-10 mt-[100px] flex items-start mx-auto justify-around">
        <section className="flex max-md:hidden flex-col w-[40%]  items-start ">
          {/* <h3 className="text-center text-[35px] font-medium text-white">
            مرحبا بك في زفاف
          </h3> */}
          <img src={rigister} alt="" className="imageCard" />
        </section>

        <section className="w-[50%] max-md:w-full   text-[#333] bg-neutral-100 p-8 shadow-2xl rounded-lg">
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-4"
            >
              <h2 className="text-center text-gray-700 font-bold mb-10 text-[35px]">
                تسجيل حساب جديد
              </h2>
              <input
                className="p-4 shadow-sm  outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="text"
                name="FullName"
                placeholder="الاسم بالكامل"
                required
              />
              <input
                className="p-4 shadow-sm  outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="text"
                name="age"
                placeholder="العمر"
                required
              />
              <input
                className="p-4 shadow-sm  outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="text"
                name="country"
                placeholder="الدوله"
                required
              />

              <input
                className="p-4 shadow-sm  outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="email"
                name="email"
                placeholder="البريد الالكتروني"
                required
              />
              <input
                className="p-4 shadow-sm outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="password"
                name="password"
                placeholder="كلمة السر"
                required
              />
              <button
                className="p-4 shadow-sm button_bg text-white rounded-[15px] hover:scale-105 duration-500 transition "
                type="submit"
              >
                تسجيل الدخول
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
