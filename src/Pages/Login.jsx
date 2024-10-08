import FetchInstance from "../config/FetchInstance";
import { toast, ToastContainer } from "react-toastify";
import login from "../assets/bride-groom-getting-married.png";
import { useContext, useState } from "react";
import { AppContext } from "../Store/StateData";

const Login = () => {
  const { setUser, setToken } = useContext(AppContext);
  const [message, setMessage] = useState("");
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
      const { token, userData } = res.data;

      if (res.status === 200) {
        setUser(userData);
        setToken(token);
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(userData));
        toast.success("تم تسجيل الدخول بنجاح");
        setUser(true);
      } else {
        toast.error("كلمه السر او البريد الالكتروني خطا");
        setUser(false);
        setMessage(res.message);
      }
    } catch (error) {
      console.error(error);
      setUser(false);

      toast.error("حدث خطأ اثناء تسجيل الدخول");
    }
  };

  return (
    <header className="w-full  flex items-center  justify-center  bg-[#20234d]">
      <div className="w-[80%] max-md:w-[95%] max-md:px-4 home_section bg-white rounded-[15px] h-fit   relative z-10 mt-[100px] flex items-start mx-auto justify-around">
        <section className="flex max-md:hidden flex-col w-[40%]  h-full  items-start ">
          {/* <h3 className="text-center text-[35px] font-medium text-white">مرحبا بك في زفاف</h3> */}
          <img src={login} alt="" className="imageCard rounded " />
        </section>

        <section className="w-[50%] max-md:w-full   text-[#333] bg-neutral-100 p-8 shadow-2xl rounded-lg">
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="text-center text-gray-700 font-bold mb-10 text-[35px]">
                تسجيل الدخول
              </h2>

              <input
                className="p-4  outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="email"
                name="email"
                placeholder="البريد الالكتروني"
                required
              />
              {message}
              <input
                className="p-4 outline-none border font-medium border-gray-300 rounded-[15px] focus:border-blue-500"
                type="password"
                name="password"
                placeholder="كلمة السر"
                required
              />
              {message}
              <button
                className="p-4 button_bg text-white rounded-[15px] hover:scale-105 duration-500 transition "
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

export default Login;
