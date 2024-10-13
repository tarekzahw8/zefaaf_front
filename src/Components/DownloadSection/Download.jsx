import mobile from "../../assets/mobile.png";
import DownloadGoogle from "../../assets/google-play-badge-logo-svgrepo-com.svg";
import DownloadAppStore from "../../assets/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import { Link } from "react-router-dom";
const Download = () => {
  return (
    <div className="w-full  bg-[#20234d] py-2 ">

      <section className="flex items-center mb-10 justify-around max-md:flex-col  rounded-[25px] w-[90%] px-4 mx-auto">
        <div className="w-[50%] max-md:w-full flex flex-col gap-5  justify-between h-full ">
          <p className="text-[19px] text-[#6610f2]">تطبيق زفاف</p>
          <h3 className="text-[26px] font-bold">
            لمساعدتك على البحث عن نصفك الآخر بطريقة جادة و سهلة و بخصوصية عالية
          </h3>

          <ul>
            <li>أكثر من 9 مليون مشترك</li>
            <li>تمتع بميزة الإشعارات الفورية</li>
            <li>طريقة سهلة وآمنة للتواصل المباشر</li>
          </ul>
          <p>تطبيقنا من أعلى التطبيقات تقييمًا و أكثرها شعبية
          </p>
<div className="flex gap-4 ">
<button className="">
    <Link to='https://play.google.com/store/apps/details?id=com.dreamsoft.zefaaf'>
    <img src={DownloadGoogle}   className="w-[150px]" alt="" />
    </Link>
</button>
<button>
    <Link to='https://apps.apple.com/us/app/%D9%85%D9%86%D8%B5%D8%A9-%D8%B2%D9%81%D8%A7%D9%81/id1550582488'>
    <img src={DownloadAppStore}  className="w-[150px] "  alt="" />
    </Link>
</button>
</div>

        </div>

        <div className=" flex items-start  justify-start  w-[50%] max-md:w-full">
          <img src={mobile} className="w-fit rounded-xl  h-[450px]" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Download;
