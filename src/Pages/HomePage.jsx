// import "@lottiefiles/lottie-player";
import { useContext } from 'react';
import Header from '../Components/home/Header';
import Card from '../Components/home/Card';
import Main from '../Components/home/Main';
import VideoSection from '../Components/home/VideoSection';
import StatisticsSection from '../Components/home/StatisticsSection';
import SuccessStore from '../Components/home/SuccessStories';
import { AppContext } from '../Store/StateData';
import { motion } from 'framer-motion'; // استيراد framer-motion
import SliderNawJoin from '../Ui/SliderNawJoin';
import Download from '../Components/DownloadSection/Download';

const HomePage = () => {
  const { user } = useContext(AppContext);

  // إعداد الرسوم المتحركة لكل قسم
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // البداية: شفافية 0 وتحريك للأسفل
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }, // التحول إلى الشفافية الكاملة وتحريك للأعلى
    },
  };

  return (
    <div className={`${user != null ? "mr-[240px] max-md:mr-0" : ""}`}>
      <section className="flex w-full items-center home_section justify-around">
        <Header />
      </section>

      <motion.div
        initial="hidden" // إعدادات البداية للرسوم المتحركة
        whileInView="visible" // عند عرض العنصر على الشاشة
        variants={sectionVariants} // تطبيق المتغيرات المحددة
        viewport={{ once: true, amount: 0.2 }} // يعرض الرسوم مرة واحدة عند 20% من ظهور العنصر
      >
        <section className="relative">
          <Card />
        </section>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <section className="relative">
          <Main />
        </section>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <section>

          <VideoSection />
        </section>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <section className='mt-10' >
          <SliderNawJoin />
        </section>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <section>
          <SuccessStore />
        </section>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <section>
          <StatisticsSection />
        </section>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <section>
          <Download />
        </section>
      </motion.div>
    </div>
  );
};

export default HomePage;
