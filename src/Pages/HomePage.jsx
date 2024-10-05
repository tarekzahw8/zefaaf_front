import { Link } from 'react-router-dom';
import ani1 from '../assets/ImageHomeAnimation.json'
// import "@lottiefiles/lottie-player";
import Lottie from "lottie-react";
import { useTranslation } from 'react-i18next';
import Header from '../Component/home/Header';
import Card from '../Component/home/Card';
import Main from '../Component/home/Main';
import VideoSection from '../Component/home/VideoSection';
import StatisticsSection from '../Component/home/StatisticsSection';
import SuccessStore from '../Component/home/SuccessStories';

const HomePage = () => {



  const { t, i18n } = useTranslation();

  return (
<div>

<section className="flex w-full items-center home_section     justify-around">
<Header/>
</section>
<section className='relative' >

<Card/>
</section>
<section className=' relative'>

<Main/>
</section>
<section className=''>

<VideoSection/>
</section>
<section className=''>

<SuccessStore/>
</section>
<section className=''>

<StatisticsSection/>
</section>
</div>
)
}

export default HomePage