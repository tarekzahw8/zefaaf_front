import React from "react";

const VideoSection = () => {
  return (
    <div className="w-[100%] mx-auto rounded-[25px] flex items-center justify-center bgVideo max-md:p-0 max-md:px-2  mt-[150px] max-md:mt-[60px] bg-white">
      <div className="w-[80%] max-md:w-full mx-auto py-4 flex items-center justify-center max-md:h-[350px] h-[500px] ">
      <iframe
        className="w-full h-full mt-2 rounded-[25px] "

        src="https://www.youtube.com/embed/HJZnUmdL_8w?si=AT2Yub1fHFiXq6NY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        refererpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>{" "}
</div>
    </div>
  );
};

export default VideoSection;
