import { useState } from 'react'; // استيراد useState
import { Swiper, SwiperSlide } from 'swiper/react';
import userImage from '../assets/Avatar man with background.jpg';
import user from '../assets/Avatar girl with background .jpg';

const SliderNawJoin = () => {
  const [selectedUser, setSelectedUser] = useState(null); // حالة لتخزين المستخدم المحدد
  const [isOpen, setIsOpen] = useState(false); // حالة لتتبع عرض النافذة المنبثقة

  const users = [
    { id: 1, name: 'محمد أحمد', age: 30, status: 'متزوج', address: 'مصر/القاهرة', image: userImage },
    { id: 2, name: 'سارة أحمد', age: 25, status: 'عازبة', address: 'مصر/القاهرة', image: user },
    { id: 3, name: 'محمد أحمد', age: 35, status: 'مطلق', address: 'مصر/القاهرة', image: userImage },
    { id: 4, name: 'مريم أحمد', age: 28, status: 'عازبة', address: 'مصر/القاهرة', image: user },
    { id: 5, name: 'علي أحمد', age: 40, status: 'متزوج', address: 'مصر/القاهرة', image: userImage },
    { id: 6, name: 'أماني', age: 22, status: 'عازبة', address: 'مصر/القاهرة', image: user },
    { id: 7, name: 'طارق', age: 32, status: 'مطلق', address: 'مصر/القاهرة', image: userImage },
    { id: 8, name: 'ندى', age: 26, status: 'عازبة', address: 'مصر/القاهرة', image: user },
    { id: 9, name: 'حسام', age: 45, status: 'متزوج', address: 'مصر/القاهرة', image: userImage },
    // أضف المزيد من المستخدمين حسب الحاجة
  ];

  const handleDetailsClick = (user) => {
    setSelectedUser(user); // تعيين المستخدم المحدد
    setIsOpen(true); // فتح النافذة المنبثقة
  };

  const closeModal = () => {
    setIsOpen(false); // غلق النافذة المنبثقة
    setSelectedUser(null); // إعادة تعيين المستخدم المحدد
  };

  return (
    <div className="carousel-container h-[300px] flex flex-col items-center justify-around w-full">
      <h2 className="text-center text-2xl font-bold">أحدث المشتركين</h2>
      <Swiper
  spaceBetween={30}
  pagination={{ clickable: true }}
  className="mySwiper w-[80%]"
  breakpoints={{
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
    },
  }}
>
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="user-card flex flex-col items-center text-center p-4 border rounded-lg shadow">
              <div className='flex items-center justify-start gap-4 w-full'>
                <img src={user.image} alt={user.name} className="w-24 h-24 rounded-full mb-2" />
                <div className='flex flex-col items-start'>
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-400"> العنوان: {user.address}</p>
                </div>
              </div>
              <div className='flex items-center justify-between px-4 w-full'>
                <div>
                  <p className="text-sm text-gray-400">السن: {user.age} سنة</p>
                  <p className="text-sm text-gray-400">الحالة: {user.status}</p>
                </div>
                <div>
                  <button className='button_bg p-2 rounded' onClick={() => handleDetailsClick(user)}>
                    التفاصيل
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* نافذة منبثقة لعرض تفاصيل المستخدم */}
      {isOpen && selectedUser && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#20234d] rounded-lg p-6 w-11/12 max-w-md">
          <div className='flex items-center gap-4'>

            <img src={selectedUser.image} alt={selectedUser.name} className="w-32 h-32 rounded-full mb-4" />
            <div>

            <h3 className="text-xl font-bold mb-2">{selectedUser.name}</h3>
            <p><strong>العمر:</strong> {selectedUser.age} سنة</p>
            </div>
          </div>
            <p><strong>الحالة:</strong> {selectedUser.status}</p>
            <p><strong>العنوان:</strong> {selectedUser.address}</p>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded" onClick={closeModal}>
انهاء
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderNawJoin;
