import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import ani1 from '../../assets/aimg1.png'

import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

  return (
    <header className='w-[90%] max-md:w-[100%]  max-md:flex-col-reverse mx-auto  flex items-center justify-around'>

<div className='w-[65%] max-md:w-[100%]  flex flex-col items-start justify-around h-full max-md:h-fit p-8 max-md:p-1 '>
    <div className='flex flex-col justify-around  h-full  '>

    <h3 className='text-[55px] max-md:text-[30px]  font-semibold'>ابحث عن شريك حياتك بأخلاق إسلامية    </h3>
<p className='text-[16px]  pt-2 max-md:text-[14] font-medium'>سواء كنت تبحث عن شريك يتوافق مع قيمك الإسلامية أو تسعى لبناء حياة زوجية مباركة، منصة زفاف توفر لك البيئة المثالية للعثور على الشخص المناسب بطريقة شرعية وآمنة.
سجّل الآن وابدأ رحلتك نحو الزواج المبارك.</p>



<div className="flex mt-4 gap-10 max-md:gap-[5%] space-x-4">

<Link to="/login" className=" button_bg h-[60px] w-[180px] text-center flex items-center justify-center text-white font-medium  px-4 rounded-[15px]">
  {t('Login')}
</Link>

<Link to="/Register" className=" button_bg h-[60px] w-[180px] text-center flex items-center justify-center text-white font-medium  px-4 rounded-[15px]">
  {t('Register')}
</Link>
</div>

</div>




</div>


<div className="animation ">
<img src={ani1} className="imageCard"  alt="" />
{/* <Lottie  className='w-[500px] max-md:w-fit' animationData={ani1} /> */}
</div>






</header>  )
}

export default Header