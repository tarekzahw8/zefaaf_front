import { useContext } from 'react';
import icon1 from '../../assets/icon01.png';
import icon2 from '../../assets/icon02.png';
import icon3 from '../../assets/icon03.png';
import icon4 from '../../assets/icon04.png';
import { AppContext } from '../../Store/StateData';

const Card = () => {
  const items = [
    { id: 1, icon: icon1, text: 'امان 100%' },
    { id: 2, icon: icon2, text: 'أكثر خصوصية ' },
    { id: 3, icon: icon3, text: ' حمايه  100%'  },
    { id: 4, icon: icon4, text: 'المطابقة الذكية' },
  ];
  const {user}=useContext(AppContext)

  return (
    <div className="w-full mt-[100px] max-md:mt-[10px]">
      <div className="w-[80%]   flex-wrap mx-auto flex gap-8 items-center justify-around">
        {items.map(item => (
          <div key={item.id} className={`BoxCard ${user != null ?"w-[190px] h-fit py-4": "h-[200px] w-[230px]"}  shadow rounded-[25px]  gap-4  max-md:w-full flex flex-col justify-center items-center`}>
            <img src={item.icon} alt={item.text} className="mb-2" />
            <p className="text-center text-[22px] font-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
