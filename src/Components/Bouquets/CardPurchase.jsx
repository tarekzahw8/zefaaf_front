import { useContext } from 'react';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import { AppContext } from '../../Store/StateData';

const CardPurchase = () => {
  const items = [
    { id: 1, icon: icon1, text: "رسائل غير محدودة"  , description :" إرسال واستقبال الرسائل بلا حدود" },
    { id: 2, icon: icon2, text: "شارة VIP" ,description :" إرسال واستقبال الرسائل بلا حدود"},
    { id: 3, icon: icon3, text: "مكالمات غير محدودة",description :" إرسال واستقبال الرسائل بلا حدود"  },
    { id: 4, icon: icon4, text: "الحصول علي المزيد  ", description :" إرسال واستقبال الرسائل بلا حدود"},
  ];
  const {user} =useContext(AppContext)

  return (
    <div className="w-full mt-[100px] max-md:mt-[10px]">
      <div className={`${user != null ? " justify-start gap-8  w-[80%]": "justify-center  w-[80%]"}   flex-wrap mx-auto flex  items-center `}>
        {items.map(item => (
          <div key={item.id} className="    shadow rounded-[25px]  gap-4 w-[200px] flex-wrap  py-4 max-md:w-full flex flex-col justify-center items-center">
            <img src={item.icon} alt={item.text} className="mb-2" />
            <p className="text-center text-[22px] font-bold">{item.text}</p>
            <span className="text-center text-[18px] font-medium">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPurchase;
