
// SVG Icon (Example)
const ComingSoonSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="150"
    height="150"
    fill="currentColor"
    className="text-[white] mx-auto mb-4"
  >
    <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="4" fill="none" />
    <path d="M32 10v22l16 10" stroke="white" strokeWidth="4" fill="none" />
  </svg>
);

const Consultations = () => {
  return (
    <div className="flex  flex-col items-center justify-center min-h-screen mx-auto w-full    ">
      {/* SVG Illustration */}
      <div className=' flex items-center justify-center flex-col gap-4 '>

      <ComingSoonSVG />

      {/* Text */}
      <h2 className="text-3xl font-bold text-gray-50 mb-4">
        انتظرونا قريبًا
      </h2>
      <p className="text-lg text-gray-200 max-md:w-[90%]">
        نعمل حالياً على إعداد المحتوى الخاص بالصفحة. تابعونا قريبًا للحصول على المزيد من التحديثات.
      </p>
    </div>
      </div>
  );
};

export default Consultations;
