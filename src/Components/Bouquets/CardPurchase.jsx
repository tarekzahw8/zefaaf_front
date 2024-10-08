import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

const CardPurchase = () => {
  const items = [
    { id: 1, icon: icon1, text: "رسائل غير محدودة"  , description :" إرسال واستقبال الرسائل بلا حدود" },
    { id: 2, icon: icon2, text: "شارة VIP" ,description :" إرسال واستقبال الرسائل بلا حدود"},
    { id: 3, icon: icon3, text: "مكالمات غير محدودة",description :" إرسال واستقبال الرسائل بلا حدود"  },
    { id: 4, icon: icon4, text: "الحصول علي المزيد من الرسائل", description :" إرسال واستقبال الرسائل بلا حدود"},
  ];

  return (
    <div className="w-full mt-[100px] max-md:mt-[10px]">
      <div className="w-[80%]   flex-wrap mx-auto flex gap-8 items-center justify-around">
        {items.map(item => (
          <div key={item.id} className="    shadow rounded-[25px]  gap-4 w-fit  py-4 max-md:w-full flex flex-col justify-center items-center">
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
