import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/HJZnUmdL_8w?si=AT2Yub1fHFiXq6NY",
    },
  ];

  return (
    <div className="w-full mx-auto rounded-[25px] flex flex-col items-center justify-center bgVideo bg-white mt-[150px] max-md:mt-[60px]">
      <h2 className="text-[56px] max-md:text-[36px] text-[#20234d] mt-4 font-bold mb-4">
        آراء العلماء
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="w-full"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="h-[500px] max-md:h-[300px] w-full flex items-center justify-center">
              <iframe
                className="w-full h-full mt-2 rounded-[25px]"
                src={video.src}
                title={`YouTube video player ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSection;
