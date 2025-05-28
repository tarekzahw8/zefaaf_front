import { useContext } from 'react';
import icon1 from '../../assets/icon01.png';
import icon2 from '../../assets/icon02.png';
import icon3 from '../../assets/icon03.png';
import icon4 from '../../assets/icon04.png';
import { AppContext } from '../../Store/StateData';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Card = () => {
  const { t } = useTranslation();
  const { user } = useContext(AppContext);
  const items = [
    { id: 1, icon: icon1, text: "أخبرنا من أنت!" , description : "شاركنا بعض التفاصيل عن نفسك حتى نتعرف عليك بشكل أفضل. أخبرنا باسمك، هواياتك، أو أي شيء يعبر عن شخصيتك الفريدة." },
    { id: 2, icon: icon2, text: "ابحث عن الشخص المناسب" },
    { id: 3, icon: icon4, text:"ابدأ البحث عن شريك الحياة" },
  ];

  return (
    <div className="w-full mt-[100px] max-md:mt-[10px]">
      <div className="w-[90%]   flex-wrap mx-auto flex gap-4 items-start justify-around">
        {items.map(item => (
          <div key={item.id} className={`BoxCard ${user != null ?"w-[320px] h-[300px] py-4": "h-[400px] w-[290px]"}  shadow rounded-[25px]  gap-4  max-md:w-full flex flex-col justify-around items-center`}>
            <img src={item.icon} alt={item.text} className="mb-2" />
            <p className="text-center text-[22px] font-bold">{item.text}</p>
            {user != null ? (
            ""
          ) : (
            <div className="flex mt-4 gap-10 max-md:gap-[5%] space-x-4">

              <Link
                to="/Register"
                className=" button_bg h-[60px] w-[180px] text-center flex items-center justify-center text-white font-medium  px-4 rounded-[15px]"
              >
                {t("Register")}
              </Link>
            </div>
          )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
