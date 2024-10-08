import CardPurchase from "../Components/Bouquets/CardPurchase"
import CardPurchaseAll from "../Components/Bouquets/CardPurchaseAll"


const Bouquets = () => {

  return (
    <div className='mt-[150px] w-full'>
        <div className="text-center">

<p className="text-[18px] text-[#5650ce]">قم بترقية ملفك الشخصي</p>
<h3 className="text-[65px] font-medium">خطة العضوية المميزة</h3>
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