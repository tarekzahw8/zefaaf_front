import { useContext, useEffect, useState } from "react";
import rectangle from "../assets/08.jpg";
import { FaBars, FaTable } from "react-icons/fa";
import { AppContext } from "../Store/StateData";
import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";

const Shop = () => {
    const { cart, setCart ,data} = useContext(AppContext);

  // قائمة المنتجات المبدئية
  const allProducts = [
    {
      id: 1,
      name: "Butterfly Rings",
      price: 100,
      image: rectangle,
      review: 4.5,
    },
    {
      id: 2,
      name: "Butterfly Rings",
      price: 200,
      image: rectangle,
      review: 5,
    },
    {
      id: 3,
      name: "Butterfly Rings",
      price: 150,
      image: rectangle,
      review: 5,
    },
    {
      id: 4,
      name: "Butterfly Rings",
      price: 150,
      image: rectangle,
      review: 4,
    },
    {
      id: 5,
      name: "Product 3",
      price: 150,
      image: rectangle,
      review: 2.5,
    },
    {
      id: 6,
      name: "Product 4",
      price: 300,
      image: rectangle,
      review: 3.5,
    },
    {
      id: 7,
      name: "Product 5",
      price: 350,
      image: rectangle,
      review: 4.5,
    },
    {
      id: 8,
      name: "Product 6",
      price: 400,
      image: rectangle,
      review: 2,
    },
    {
      id: 9,
      name: "Product 7",
      price: 100,
      image: rectangle,
      review: 5,
    },
    {
      id: 10,
      name: "Product 8",
      price: 250,
      image: rectangle,
      review: 4,
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [layout, setLayout] = useState("grid"); // grid أو list
  const [priceFilter, setPriceFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // فلترة المنتجات حسب البحث والسعر
  const filteredProducts = allProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => {
      if (priceFilter === "") return true;
      if (priceFilter === "low") return product.price < 150;
      if (priceFilter === "high") return product.price >= 150;
      return true;
    });

  // حساب عدد الصفحات
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, [setCart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push("★");
      } else if (i - rating < 1 && rating % 1 !== 0) {
        stars.push("☆");
      } else {
        stars.push("☆");
      }
    }
    return stars.join("");
  };
  const totalItems = cart.reduce((total, product) => total + product.count, 0);

  return (
    <div className="">
      <div className="header_image h-[350px] flex items-center gap-10 mb-10 flex-col justify-center">
        <h1 className="text-center text-[35px]">مرحبا بك في متجر زفاف</h1>
        <h2 className="text-center text-[25px]">المنتجات</h2>
      </div>

      {/* البحث */}
      <div className="flex justify-between mx-auto w-[80%] mb-4 gap-4">
        <div className="flex gap-4 items-center ">
          <input
            type="text"
            placeholder="ابحث عن المنتج"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 text-gray-600 rounded w-[250px]"
          />
          <select
            onChange={(e) => setPriceFilter(e.target.value)}
            className="border py-2   rounded text-gray-600"
          >
            <option value="">فلترة حسب السعر</option>
            <option value="low">أقل من 150</option>
            <option value="high">أعلى من 150</option>
          </select>
        </div>
        <div className="flex gap-5">
          <button
            className="button_bg text-white py-2 px-4 rounded"
            onClick={() => setLayout(layout === "grid" ? "list" : "grid")}
          >
            {layout === "grid" ? <FaBars /> : <FaTable />}
          </button>
          <Link
            to="/Cart"
            className="button_bg relative flex items-center justify-center text-white py-2 px-4 rounded"
          >
            <div className="absolute top-[-5px]   rounded-full button_bg right-[-5px] flex items-center justify-center">

            <p className=" text-center w-[20px]  text-sm h-[20px]   ">

            {totalItems}
            </p>
            </div>
            <CgShoppingCart />
          </Link>
        </div>
      </div>

      {/* عرض المنتجات */}
      <div
        className={`flex w-[80%] mx-auto justify-start gap-10 mb-10 ${
          layout === "grid" ? "flex-wrap" : "flex-col  "
        }`}
      >
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className={`bg-[#20234d] pb-3   rounded-[10px] flex ${
              layout === "grid"
                ? "flex-col flex-wrap  max-md:w-[45%] max-sm:w-full max-lg:w-[30%] w-[240px]"
                : "flex-row w-full h-[160px]"
            } items-center justify-around  transition-transform duration-300 hover:shadow-lg hover:scale-105`}
          >
            <div className="justify-around h-fit relative  flex items-center flex-col">
              <img
                src={product.image}
                alt={product.name}
                className={`${
                  layout === "grid" ? "w-full " : "h-[130px] "
                }  object-cover mb-4 rounded`}
              />
              <div className="  w-[60px] h-[60px] rounded-full absolute button_bg flex mb-4 bottom-[-20px] right-2 items-center justify-center ">
                <p className="text-gray-300   font-bold text-[19px]  ">
                  ${product.price}
                </p>
              </div>
            </div>
            <h3 className="text-white mb-2 pt-[30px] text-[1.3rem] font-medium">
              {product.name}
            </h3>
            <p className="text-yellow-400  mb-2">
              {renderStars(product.review)}{" "}
              <span className="text-white">| 229 review</span>{" "}
            </p>
            <button
              className="button_bg text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <Link to={`/product/${product.id}`} className="mt-2 text-blue-400">
      عرض التفاصيل
    </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mb-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="button_bg text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          السابق
        </button>
        <p className="text-white">
          صفحة {currentPage} من {totalPages}
        </p>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="button_bg text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default Shop;
