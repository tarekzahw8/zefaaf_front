import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState, memo } from "react";
import rectangle from "../assets/08.jpg";
import { CgShoppingCart } from "react-icons/cg";
import { AppContext } from "../Store/StateData";
import { MdReviews } from "react-icons/md";

const products = [
  {
    id: 1,
    name: "Butterfly Rings",
    price: 100,
    image: rectangle,
    review: 4.5,
    colors: ["#FF5733", "#33FF57", "#3357FF"],
  },
  {
    id: 2,
    name: "Butterfly Rings",
    price: 200,
    image: rectangle,
    review: 3,
    colors: ["#FF5733", "#FFC300", "#DAF7A6"],
  },
  // باقي المنتجات...
];

const renderStars = (rating) => {
  return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
};

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart, user } = useContext(AppContext);
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
  const [newReview, setNewReview] = useState({
    name: "",
    reviewText: "",
    rating: 0,
  });

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

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

  const handleInputChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitReview = () => {
    if (newReview.name && newReview.reviewText) {
      setReviews((prevReviews) => [
        ...prevReviews,
        {
          id: prevReviews.length + 1,
          name: newReview.name,
          image: rectangle,
          reviewText: newReview.reviewText,
          rating: newReview.rating,
        },
      ]);
      setNewReview({ name: "", reviewText: "", rating: 0 });
    }
  };

  if (!product) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div
      className={`container ${
        user ? "" : ""
      } mt-[100px] mx-auto p-6`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="product-image flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-lg rounded-lg shadow-lg transition-transform transform  duration-300"
          />
        </div>

        <div className="product-details flex flex-col items-start space-y-4 text-white">
          <h1 className="text-3xl font-bold ">{product.name}</h1>
          <p className="text-white text-2xl font-semibold">
            السعر: ${product.price}
          </p>
          <p className="text-white">التقييم: {product.review} / 5</p>{" "}
          <p className="text-white text-2xl font-semibold">
            السعر: ${product.price}
          </p>
          <p className="text-white">التقييم: {product.review} / 5</p>{" "}
          <p className="text-white text-2xl font-semibold">
            السعر: ${product.price}
          </p>
          <p className="text-white">التقييم: {product.review} / 5</p>
          <div className="flex space-x-2  flex-col ">
            <h3 className="text-xl font-semibold">الألوان المتاحة:</h3>
            <div className="flex items-center gap-4">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className="w-8 h-8  rounded-full border"
                ></div>
              ))}
            </div>
          </div>
          <button
            className="button_bg text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors flex items-center"
            onClick={() => addToCart(product)}
          >
            <CgShoppingCart className="mr-2" />
            إضافة إلى السلة
          </button>
        </div>
      </div>

      {/* قسم الريفيوهات */}
      <div className="reviews-section w-[90%] mx mt-12">
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
                <h3 className="font-bold text-indigo-950">{review.name}</h3>
                <p className="text-gray-600">{review.reviewText}</p>
                <div className="flex items-center">
                  <span className="ml-2 flex items-center gap-2 font-bold text-gray-500">
                    {review.rating} /5{" "}
                    <MdReviews className="w-4 h-4 text-yellow-400" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* إضافة تقييم */}
      <div className="add-review-section flex flex-col text-gray-400 mt-12">
        <h2 className="text-2xl font-bold mb-4">إضافة تقييم</h2>
        <input
          type="text"
          name="name"
          placeholder="اسمك"
          value={newReview.name}
          onChange={handleInputChange}
          className="border border-gray-300 p-3 w-[80%] rounded-lg mb-4"
        />
        <textarea
          name="reviewText"
          placeholder="أضف رأيك هنا"
          value={newReview.reviewText}
          onChange={handleInputChange}
          className="border border-gray-300 p-3 w-[80%] rounded-lg mb-4"
        ></textarea>
        <input
          type="number"
          name="rating"
          placeholder="التقييم من 5"
          max={5}
          min={1}
          value={newReview.rating}
          onChange={handleInputChange}
          className="border border-gray-300 p-3 w-[80%] rounded-lg mb-4"
        />
        <button
          onClick={handleSubmitReview}
          className="button_bg text-white py-4 w-[20%] mb-4 px-6 rounded hover:bg-green-600 transition-colors"
        >
          إرسال
        </button>
      </div>
    </div>
  );
};

export default memo(ProductPage);
