import { useContext, useEffect } from "react";
import { AppContext } from "../Store/StateData";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import { div } from "framer-motion/client";
import { BiArrowBack } from "react-icons/bi";

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();
console.log(cart)
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

  const removeFromCart = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const clearAll = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);
  return (
    <div className="cart-page mb-16">
      <div className="header_image h-[250px] flex items-center gap-10 mb-10 flex-col justify-center">
        <h1 className="text-center text-[35px]">سلة التسوق</h1>
      </div>

      <div className="flex flex-col gap-4 w-[80%] mx-auto mb-10">
      <h1 className="text-center text-[35px]">أكمال عمليه الشراء </h1>

        {cart.length > 0 ? (
          cart.map((product) => (
            <div
              key={product.id}
              className="bg-[#20234d] p-4 rounded-[10px] flex items-center justify-between w-full hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[80px] h-[80px] object-cover rounded"
                />
                <div>
                  <h3 className="text-white text-[1.2rem]">{product.name}</h3>
                  عدد القطع:
                  {product.count}
                  <p className="text-gray-300">
                    ${(product.price * product.count).toFixed(2)}
                  </p>{" "}
                  {/* عرض السعر الإجمالي للمنتج */}
                </div>
              </div>
              <button
                className="button_bg text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
                onClick={() => removeFromCart(product.id)}
              >
                إزالة
              </button>
            </div>
          ))
        ) : (
            <div className="flex items-center justify-center flex-col gap-4">

          <p className="text-white text-center text-bold text-[35px]">السلة فارغة.</p>
          <button
          onClick={() => navigate("/Shop")} // استخدام navigate للعودة إلى المتجر
          className="button_bg flex items-center gap-2 text-white py-2 px-6 rounded hover:bg-green-600 transition-colors duration-300"
          >
          العودة إلى المتجر
            <BiArrowBack/>
        </button>
            </div>
        )}
      </div>

      {/* المجموع الكلي */}
{cart.length > 0 &&(

      <div className={` justify-between items-center w-[80%] mx-auto flex`}>
        <h2 className="text-white text-[1.5rem]">
          المجموع الكلي: ${totalPrice.toFixed(2)} {/* عرض المجموع الكلي */}
        </h2>
        <button className="button_bg text-white py-2 px-6 rounded hover:bg-green-600 transition-colors duration-300">
          إتمام الطلب
        </button>
        <div className="flex gap-3">

        <button
          onClick={clearAll}
          className="button_bg text-white py-2 px-6 rounded hover:bg-green-600 transition-colors duration-300"
          >
          حذف الكل{" "}
        </button>
        <button
          onClick={() => navigate("/Shop")} // استخدام navigate للعودة إلى المتجر
          className="button_bg text-white py-2 px-6 rounded hover:bg-green-600 transition-colors duration-300"
          >
          العودة إلى المتجر
        </button>
            </div>
      </div>
)}
    </div>
  );
};

export default Cart;
