import CountUp from "react-countup";
import { motion } from "framer-motion"; // يمكنك تثبيت Framer Motion: npm install framer-motion
import icon1 from '../../assets/stat01.png';
import icon2 from '../../assets/stat02.png';
import icon3 from '../../assets/stat03.png';
import { useContext } from "react";
import { AppContext } from "../../Store/StateData";

const StatisticsSection = () => {
  const cardData = [
    { title: " تواصلات ناجحة", end: 87437  , icon: icon1, },
    { title: "عضو مسجل", end: 130000  , icon: icon2, },
    { title: "عضو نشط", end: 6799 , icon: icon3, },
  ];
  const {user} =useContext(AppContext)

  return (
    <div className="stats-section mt-[100px] w-[100%] flex justify-around items-center space-x-4">
        <div className="w-[80%] mx-auto flex flex-wrap  items-center justify-around ">

      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="card gap-4 flex-wrap flex overflow-hidden items-center shadow-sm max-md:border-2 mb-4 max-md:mb-5 justify-around flex-col p-6 rounded-lg  text-center"
          // whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
        <div  className={` ${user != null ? "w-[200px] h-[200px] max-md:w-[270px] max-md:h-[270px] ": "h-[250px] w-[250px] " }  bg-[#20234d]  rounded-full  gap-4   flex flex-col justify-center items-center`}>
            <img src={card.icon} alt={card.text} className="mb-2 imageCard" />
            <p className="text-center text-[22px] font-bold">{card.text}</p>
          </div>
          <div className="text-[33px] font-bold text-white ">
            <p className="text-center space-x-2 flex items-center justify-center gap-1">
           <CountUp end={card.end} duration={2} />
            </p>
            <p className="max-md:text-[25px]">{card.title}</p>
          </div>
        </motion.div>
      ))}
        </div>

    </div>
  );
};

export default StatisticsSection;
