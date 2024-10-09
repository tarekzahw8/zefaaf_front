import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import rectangle from "../assets/08.jpg";
import { CgShoppingCart } from "react-icons/cg";
import { AppContext } from "../Store/StateData";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [layout, setLayout] = useState("grid");

  const { cart, setCart } = useContext(AppContext);

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

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "أحمد علي",
      image: rectangle,
      reviewText: "منتج رائع والجودة ممتازة!",
      rating: 5,
    },
    {
      id: 2,
      name: "سارة محمود",
      image: rectangle,
      reviewText: "الخدمة سريعة والمنتج جيد جداً.",
      rating: 4,
    },
  ]);

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
  const [newReview, setNewReview] = useState({
    name: "",
    reviewText: "",
    rating: 0,
  });

  const products = [
    {
      id: 1,
      name: "Butterfly Rings",
      price: 100,
      image: rectangle,
      review: 4.5,
      colors: ["#FF5733", "#33FF57", "#3357FF"], // إضافة ألوان المنتج
    },
    {
      id: 2,
      name: "Butterfly Rings",
      price: 200,
      image: rectangle,
      review: 3,
      colors: ["#FF5733", "#FFC300", "#DAF7A6"],
    },
    // إضافة بقية المنتجات هنا...
  ];

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  const handleInputChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitReview = () => {
    if (newReview.name && newReview.reviewText) {
      setReviews([
        ...reviews,
        {
          id: reviews.length + 1,
          name: newReview.name,
          image: rectangle, // صورة افتراضية للعميل
          reviewText: newReview.reviewText,
          rating: newReview.rating,
        },
      ]);
      setNewReview({ name: "", reviewText: "", rating: 0 }); // إعادة تعيين النموذج
    }
  };

  if (!product) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="container mt-[100px] mx-auto p-6">
      {/* تفاصيل المنتج */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="product-image flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>

        <div className="product-details flex flex-col items-start space-y-4 text-white">
          <h1 className="text-3xl font-bold ">{product.name}</h1>
          <p className="text-white text-2xl font-semibold">
            السعر: ${product.price}
          </p>
          <p className="text-white">التقييم: {product.review} / 5</p>

          {/* سليدر للألوان المتاحة */}
          <div className="flex space-x-2">
            <h3 className="text-xl font-semibold">الألوان المتاحة:</h3>
            {product.colors.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className="w-8 h-8 rounded-full border"
              ></div>
            ))}
          </div>

          <button className="button_bg text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors flex items-center">
            <CgShoppingCart className="mr-2" />
            إضافة إلى السلة
          </button>
        </div>
      </div>

      {/* قسم الريفيوهات */}
      <div className="reviews-section  w-[90%] mx mt-12">
        <h2 className="text-2xl font-bold mb-6">آراء العملاء</h2>
        <div className="bg-gray-100 p-4 rounded-lg space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">{review.name}</h3>
                <p className="text-gray-600">{review.reviewText}</p>
                <div className="flex items-center">
                  {/* <
                    name={`rate${review.id}`}
                    starCount={5}
                    value={review.rating}
                    editing={false}
                  /> */}
                  <span className="ml-2 text-sm text-gray-500">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* إضافة تقييم */}
      <div className="add-review-section text-gray-400 mt-12">
        <h2 className="text-2xl font-bold mb-4">إضافة تقييم</h2>
        <input
          type="text"
          name="name"
          placeholder="اسمك"
          value={newReview.name}
          onChange={handleInputChange}
          className="border border-gray-300 p-3 w-full rounded-lg mb-4"
        />
        <textarea
          name="reviewText"
          placeholder="أضف رأيك هنا"
          value={newReview.reviewText}
          onChange={handleInputChange}
          className="border border-gray-300 p-3 w-full rounded-lg mb-4"
        ></textarea>
        <input
          type="number"
          name="rating"
          placeholder="التقييم من 5"
          value={newReview.rating}
          onChange={handleInputChange}
          className="border border-gray-300 p-3 w-full rounded-lg mb-4"
        />
        <button
          onClick={handleSubmitReview}
          className="button_bg text-white py-2 px-6 rounded hover:bg-green-600 transition-colors"
        >
          إرسال
        </button>
      </div>

      {/* منتجات مقترحة */}
      <div
        className={`flex w-[80%] mx-auto justify-start gap-10 mb-10 ${
          layout === "grid" ? "flex-wrap" : "flex-col  "
        }`}
      >
        {products.map((product) => (
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
    </div>
  );
};

export default ProductPage;
