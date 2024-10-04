// Navbar.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';
import logo from '../../assets/Logo.png'
const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="Navbar text-white p-4 overflow-hidden flex items-center">
      <div className="w-full px-4 mx-auto flex justify-between items-center">

      <div className=''>
            <img src={logo} className='w-[70px] h-full  transform '  alt="" />
        </div>


        <div className="flex items-center w-fit  gap-4 font-medium text-[18px]">
          <Link to="/" className="">{t('Home')}</Link>
          <Link to="/premium" className="">الباقات</Link>
          <Link to="/about" className="">قصص النجاح</Link>
          <Link to="/about" className="">المقالات</Link>
          <Link to="/about" className="">الزواج في ضوء السنه</Link>
          <Link to="/about" className="">{t('About')}</Link>
        </div>











        <div className="flex space-x-4">
        <select className="text-white hidden     outline-none bg-transparent" >
                                <option className='text-gray-300' onClick={() => changeLanguage('ar')} value="">AR</option>
                                <option className='text-gray-300' onClick={() => changeLanguage('em')} value="">EN</option>
                            </select>
          <Link to="/login" className=" button_bg h-[40px] flex items-center text-white font-medium  px-4 rounded-[15px]">
            {t('Login')}
          </Link>

          <Link to="/login" className=" button_bg text-white font-medium flex items-center px-4 rounded-[15px]">
            {t('Register')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
