import { useContext } from "react"
import CardPurchase from "../Components/Bouquets/CardPurchase"
import CardPurchaseAll from "../Components/Bouquets/CardPurchaseAll"
import { AppContext } from "../Store/StateData"


const Bouquets = () => {
  const {user} =useContext(AppContext)

  return (
    <div className={`mt-[150px] w-full ${user != null ? "mr-[240px]  max-md:mr-0":""}`}>
        <div className={`text-center ${user != null ? "ml-[240px]  max-md:ml-0":""}`}>

<p className="text-[18px] text-[#5650ce]">قم بترقية ملفك الشخصي</p>
<h3 className="text-[65px] max-md:text-[45px] text-center   font-medium">خطة العضوية المميزة</h3>
<p className="text-[18px] ">استفد من زفاف بأقصى قدر ممكن لك!</p>
        </div>
        <div>
            <CardPurchase/>
        </div>


        <div>
            <CardPurchaseAll/>
        </div>
        </div>
  )
}

export default Bouquets