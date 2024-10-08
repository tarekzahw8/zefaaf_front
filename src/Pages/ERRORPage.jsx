import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import errorImage from '../assets/errorImage.png'
const ERRORPage = () => {
  return (
    <div className='mt-[80px] flex items-center gap-10 flex-col mb-[200px] w-full'>
      <img src={ errorImage} alt="" />
<p className='text-center text-[35px] text-white'>أوه .. يبدو أنك ضللت الطريق :(</p>
<Link className='button_bg p-3 rounded-[10px] flex items-center gap-2 ' to='/'>  اذهب للصفحة الرئسيه <BiArrowBack/></Link>
    </div>
  )
}

export default ERRORPage