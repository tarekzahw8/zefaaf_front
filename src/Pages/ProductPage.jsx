import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import rectangle from "../assets/08.jpg";
import { CgShoppingCart } from "react-icons/cg";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const products = [
    {
      id: 1,
      name: "Mirrored Swim Goggle",
      price: 100,
      image: rectangle,
      review: 4.5,
    },
    {
      id: 2,
      name: "Butterfly Rings",
      price: 200,
      image: rectangle,
      review: 3,
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
  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <div className="text-center mt-20">Loading...</div>;
  }
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
  return (
    <div className="container mt-[100px] mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* صورة المنتج */}
        <div className="product-image flex justify-center">
          <img src={product.image} alt={product.name} className="w-full max-w-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300" />
        </div>

        {/* تفاصيل المنتج */}
        <div className="product-details flex  flex-col items-start justify-between h-full space-y-4 text-white">
          <h1 className="text-3xl font-bold ">{product.name}</h1>
          <div className="flex items-center">
          <p className="text-yellow-400 text-xl  mb-2">
              {renderStars(product.review)}{" "}
              <span className="text-gray-400">| 229 review</span>{" "}
            </p>
          </div>
          <p>Order 2, get 15% off</p>
          <p>Order 2, get 15% off</p>
          <p className="text-white text-2xl font-semibold">السعر: ${product.price}</p>
          <p className="text-gray-400">تفاصيل المنتج: وصف المنتج الكامل هنا...</p>
<div className="flex  gap-3 ">
          <img src={product.image} alt={product.name} className="w-20 max-w-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300" />
          <img src={product.image} alt={product.name} className="w-20 max-w-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300" />
          <img src={product.image} alt={product.name} className="w-20 max-w-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300" />
</div>

          <button className="button_bg text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors flex items-center">
            <CgShoppingCart className="mr-2" />
            إضافة إلى السلة
          </button>
        </div>
      </div>

      {/* قسم الريفيوهات */}
      <div className="reviews-section mt-12">
        <h2 className="text-2xl font-bold mb-6">آراء العملاء</h2>
        <div className="bg-gray-100 p-4 rounded-lg space-y-4">
          <p className="text-gray-600">هنا يتم عرض تقييمات وآراء العملاء...</p>
        </div>
      </div>

      {/* إضافة تقييم */}
      <div className="add-review-section mt-12">
        <h2 className="text-2xl font-bold mb-4">إضافة تقييم</h2>
        <textarea placeholder="أضف رأيك هنا" className="border border-gray-300 p-3 w-full rounded-lg mb-4"></textarea>
        <button className="button_bg text-white py-2 px-6 rounded hover:bg-green-600 transition-colors">إرسال</button>
      </div>

      {/* منتجات مقترحة */}
      <div className="suggested-products mt-12">
        <h2 className="text-2xl font-bold mb-4">منتجات مقترحة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.slice(0, 4).map((suggestedProduct) => (
            <div key={suggestedProduct.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img src={suggestedProduct.image} alt={suggestedProduct.name} className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{suggestedProduct.name}</h3>
              <p className="text-gray-600">السعر: ${suggestedProduct.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
