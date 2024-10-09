import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import avatar from '../../assets/Avatar zefaaf F3.png'
import husband from '../../assets/Avatar man with background.jpg'
const SuccessStoriesSlider = () => {
  const successStories = [
    {
      image: "https://via.placeholder.com/150",
      husbandImage:husband, // صورة الزوج
      wifeImage: avatar, // صورة الزوجة
      name: "محمد أحمد",
      location: "القاهرة، مصر",
      comment:
        "لقد كانت تجربة رائعة، قدموا لي كل الدعم الذي أحتاجه وكنت سعيداً جداً بالتعامل معهم. هذا الفريق رائع حقاً في تقديم الخدمة والدعم.",
      date: "2024-10-01", // تاريخ رفع التعليق
      time: "12:00 PM", // وقت رفع التعليق
    },
    {
      image: "https://via.placeholder.com/150",
      husbandImage:husband, // صورة الزوج
      wifeImage:avatar, // صورة الزوجة
      name: "محمد أحمد",
      location: "القاهرة، مصر",
      comment:
        "لقد كانت تجربة رائعة، قدموا لي كل الدعم الذي أحتاجه وكنت سعيداً جداً بالتعامل معهم. هذا الفريق رائع حقاً في تقديم الخدمة والدعم.",
      date: "2024-10-01", // تاريخ رفع التعليق
      time: "12:00 PM", // وقت رفع التعليق
    },
    {
      image: "https://via.placeholder.com/150",
      husbandImage:husband, // صورة الزوج
      wifeImage: avatar, // صورة الزوجة
      name: "محمد أحمد",
      location: "القاهرة، مصر",
      comment:
        "لقد كانت تجربة رائعة، قدموا لي كل الدعم الذي أحتاجه وكنت سعيداً جداً بالتعامل معهم. هذا الفريق رائع حقاً في تقديم الخدمة والدعم.",
      date: "2024-10-01", // تاريخ رفع التعليق
      time: "12:00 PM", // وقت رفع التعليق
    },
    {
      image: "https://via.placeholder.com/150",
      husbandImage:husband, // صورة الزوج
      wifeImage: avatar, // صورة الزوجة
      name: "محمد أحمد",
      location: "القاهرة، مصر",
      comment:
        "لقد كانت تجربة رائعة، قدموا لي كل الدعم الذي أحتاجه وكنت سعيداً جداً بالتعامل معهم. هذا الفريق رائع حقاً في تقديم الخدمة والدعم.",
      date: "2024-10-01", // تاريخ رفع التعليق
      time: "12:00 PM", // وقت رفع التعليق
    },
    {
      image: "https://via.placeholder.com/150",
      husbandImage:husband, // صورة الزوج
      wifeImage: avatar, // صورة الزوجة
      name: "محمد أحمد",
      location: "القاهرة، مصر",
      comment:
        "لقد كانت تجربة رائعة، قدموا لي كل الدعم الذي أحتاجه وكنت سعيداً جداً بالتعامل معهم. هذا الفريق رائع حقاً في تقديم الخدمة والدعم.",
      date: "2024-10-01", // تاريخ رفع التعليق
      time: "12:00 PM", // وقت رفع التعليق
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="py-12  bg-[#20234d] mt-[100px]">
      <h2 className="text-center text-3xl font-bold mb-8">قصص النجاح</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation ={false}
        pagination={{ clickable: true }}
        spaceBetween={25}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full max-w-4xl mx-auto"
      >
        {successStories.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#5650ce] max-md:w-[90%] mx-auto p-6 rounded-lg shadow-lg text-center relative">
              <div className="flex w-full  shadow-sm justify-around items-center  ">
              <div className=" flex flex-col w-16 h-16  rounded-full items-center gap-3">
                  <img
                    src={story.husbandImage}
                    alt="زوج"
                    className=" rounded-full"
                  />
                  <p className="text-white">الزوجة</p>
                </div>
                <div className=" flex flex-col w-16 h-16 bg-pink-300 rounded-full items-center gap-3">
                  <img
                    src={story.wifeImage}
                    alt="زوجة"
                    className=" rounded-full"
                  />
                  <p className="text-white">الزوجة</p>
                </div>
              </div>

              <div className="flex items-start text-[12px] mt-12  text-white">
                {story.date} - {story.time}
              </div>
              <h3 className="text-xl font-semibold">{story.name}</h3>
              <p className="text-sm text-white ">{story.location}</p>

              {/* نص التعليق */}
              <p
                className={`text-white text-start transition-all ${
                  expandedIndex === index ? "" : "line-clamp-3"
                }`}
              >
                {story.comment}
              </p>

              {/* زر "عرض المزيد" */}
              {story.comment.length > 100 && (
                <button
                  className="text-white p-2 rounded-md button_bg mt-2"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {expandedIndex === index ? "عرض أقل" : "عرض المزيد"}
                </button>
              )}

              {/* التاريخ والوقت */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessStoriesSlider;
