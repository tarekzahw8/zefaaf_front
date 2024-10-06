import { Link } from 'react-router-dom';
import ani1 from '../AnimationImage/ImageHomeAnimation.json'
// import "@lottiefiles/lottie-player";
import Lottie from "lottie-react";
import { useTranslation } from 'react-i18next';
import Header from '../Components/home/Header';
import Card from '../Components/home/Card';
import Main from '../Components/home/Main';
import VideoSection from '../Components/home/VideoSection';
import StatisticsSection from '../Components/home/StatisticsSection';
import SuccessStore from '../Components/home/SuccessStories';

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