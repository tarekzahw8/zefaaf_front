import { motion } from "framer-motion"; // يمكنك تثبيت Framer Motion: npm install framer-motion
import done from '../../assets/done-v-svgrepo-com.svg';
import gold from "../../assets/Golden.png";
import diamond from "../../assets/diamond.svg";
import sliver from "../../assets/silver-medal-svgrepo-com.svg";
import Trial from "../../assets/free-trial-svgrepo-com.svg";
import { useContext } from "react";
import { AppContext } from "../../Store/StateData";

const CardPurchaseAll = () => {
  const bouquetData = [
    {
      title: "باقة بلاتنيوم",
      logo: diamond,
      price: "500 EGP",
      details: [
        "نمنحك 7 أرقام هواتف لعرائس من اختيارك",
        "إمكانية الوصول إلى الأحداث المميزة",
        "دعم مخصص لمدة شهر"
      ],
    },
    {
      title: "باقه ترحيبية",
      logo: Trial,
      price: "300 EGP",
      details: [
        "نمنحك 7 أرقام هواتف لعرائس من اختيارك",
        "دعم فني لمدة أسبوع",
        "إمكانية تجربة مميزات محدودة"
      ],
    },
    {
      title: "باقة فضية",
      logo: sliver,
      price: "500 EGP",
      details: [
        "نمنحك 7 أرقام هواتف لعرائس من اختيارك",
        "إمكانية الوصول إلى الأحداث",
        "دعم فني لمدة أسبوعين"
      ],
    },
    {
      title: "باقة ذهبية",
      logo: gold,
      price: "1000 EGP",
      details: [
        "نمنحك 7 أرقام هواتف لعرائس من اختيارك",
        "إمكانية الوصول إلى الأحداث المميزة",
        "دعم مخصص لمدة شهر",
        "خصم 10% على الفعاليات"
      ],
    },
  ];
  const {user} =useContext(AppContext)

  return (
    <div className={`bouquet-section mt-[100px] ${user != null  ?  "":  "" } w-[100%] flex justify-around items-center`}>
      <div className={`${user != null  ?  "  w-[100%] ":  "w-[85%]" }  mx-auto flex flex-wrap items-center justify-around gap-8`}>
        {bouquetData.map((bouquet, index) => (
          <motion.div
            key={index}
            className="bouquet-card text-white bg-gradient-to-r from-[#5650ce] to-[#6610f2] shadow-lg w-[300px] mb-6 rounded-lg p-4 flex flex-col justify-between items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-full flex justify-center mb-4">
              <img src={bouquet.logo} className="w-16 h-16" alt={bouquet.title} />
            </div>
            <h4 className="text-[22px] font-bold button_bg text-white py-2 px-6 rounded-md w-full text-center mb-4">
              {bouquet.title}
            </h4>

            <p className="text-lg text-start w-full font-bold mb-2">أهم المميزات:</p>
            <div className="text-start space-y-2 w-full ">
              {bouquet.details.map((feature, idx) => (
                <p key={idx} className="flex items-start gap-2">
                  <img src={done} className="w-5" alt="feature" />
                  {feature}
                </p>
              ))}
            </div>
<div className="flex relative items-end gap-2">

            <p className="text-[#f7f7f7] font-bold text-[24px] mt-4">{bouquet.price} </p>
            <span className="text-white"> / شهر </span>
</div>
            <button className="mt-6 button_bg  z-20 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg transition-colors">
              اشترِ الآن
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardPurchaseAll;
