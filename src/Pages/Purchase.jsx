import { useContext } from "react";
import CardPurchase from "../Components/Bouquets/CardPurchase";
import CardPurchaseAll from "../Components/Bouquets/CardPurchaseAll";
import { AppContext } from "../Store/StateData";

const Bouquets = () => {
  const {user }= useContext(AppContext)
  return (
    <div className={`mt-[150px] ${user != null ? "mr-[130px] max-md:mr-0": ""} mx-auto flex items-center justify-around flex-col cardPurchase`}>
      <div className="text-center">
        <p className="text-[18px] text-[#5650ce]">قم بترقية ملفك الشخصي</p>
        <h3 className="text-[65px] font-medium">خطة العضوية المميزة</h3>
        <p className="text-[18px] ">استفد من زفاف بأقصى قدر ممكن لك!</p>

      </div>
<div className={`${user != null ?  "mr-[130px] max-md:mr-0": ""}`}>

        <CardPurchase />
</div>
<div className="w-full  ">

        <CardPurchaseAll />
</div>

    </div>
  );
};

export default Bouquets;
