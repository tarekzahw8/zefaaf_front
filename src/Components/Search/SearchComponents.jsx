import { useState } from "react";
import { IoLocation, IoPersonSharp } from "react-icons/io5";
import avatar from "../../assets/Avatar man png2.png";
import avatar2 from "../../assets/Avatar zefaaf F3.png";
import { BiSearch } from "react-icons/bi";
import { CSSTransition } from "react-transition-group"; // لإضافة التأثيرات

const FilterComponent = () => {
  const [filters, setFilters] = useState({
    nationality: "",
    name: "",
    username: "",
    email: "",
    maritalStatus: "",
  });

  const [data] = useState([
    {
      id: 1,
      nationality: "مصرية",
      name: "أحمد علي",
      gender: "male",
      username: "ahmed123",
      email: "ahmed@example.com",
      maritalStatus: "متزوج",
      image: avatar,
    },
    {
        id: 1,
        nationality: "مصرية",
        name: "بسنت علي",
        gender: "female",
        username: "ahmed123",
        email: "ahmed@example.com",
        maritalStatus: "متزوج",
        image: avatar2,
      },
    // بقية البيانات...
  ]);

  const [selectedUser, setSelectedUser] = useState(null); // state لتحديد المستخدم المختار
  const [showPopup, setShowPopup] = useState(false); // التحكم في ظهور الـ popup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters Applied:", filters);
  };

  // فلترة البيانات بناءً على الفلاتر
  const filteredData = data.filter((item) => {
    return (
      (filters.nationality === "" ||
        item.nationality.includes(filters.nationality)) &&
      (filters.name === "" || item.name.includes(filters.name)) &&
      (filters.username === "" || item.username.includes(filters.username)) &&
      (filters.email === "" || item.email.includes(filters.email)) &&
      (filters.maritalStatus === "" ||
        item.maritalStatus === filters.maritalStatus)
    );
  });

  const handleDetailsClick = (user) => {
    setSelectedUser(user); // تعيين المستخدم المختار
    setShowPopup(true); // إظهار الـ popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // إخفاء الـ popup
  };

  return (
    <div className="w-[100%] mx-auto p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">تصفية البيانات</h2>
      <form onSubmit={handleSubmit} className="text-gray-700 w-[90%]">
        <div className="flex items-center mb-4 gap-4">
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-11"
            placeholder="أدخل الاسم"
          />
          <input
            type="text"
            name="nationality"
            value={filters.nationality}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-11"
            placeholder="أدخل الجنسية"
          />
          <button type="submit" className="w-fit px-4 button_bg text-white py-3 rounded">
            <BiSearch />
          </button>
        </div>
      </form>

      {/* عرض البيانات */}
      <h3 className="text-lg font-bold mt-6">البيانات المعروضة:</h3>
      <div className="w-full items-center flex-wrap justify-start flex gap-5 mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="w-[290px] px-4 rounded-[15px] button_bg py-3">
              <div className="flex items-center gap-2">
                <div className={`rounded-full w-20 h-20 overflow-hidden ${item.gender === "male" ? "bg-indigo-600" : "bg-red-600"}`}>
                  <img src={item.image} className="w-full h-full" alt="avatar" />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <p className="flex items-center gap-1">
                    <IoLocation /> {item.nationality}/ مصر
                  </p>
                  <p className="text-gray-300 flex gap-1">
                    <IoPersonSharp /> 27 سنة/ {item.maritalStatus}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDetailsClick(item)} // عند الضغط على "التفاصيل"
                className="w-full mt-3 flex items-center rounded-xl justify-center"
              >
                <p className="w-fit px-3 bg-blue-500 hover:bg-blue-700 text-white py-1 rounded transition duration-300">
                  التفاصيل
                </p>
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">لا توجد بيانات لعرضها.</p>
        )}
      </div>

      <CSSTransition in={showPopup} timeout={300} classNames="popup" unmountOnExit>
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="button_bg p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">تفاصيل المستخدم</h2>
            {selectedUser && (
              <>
              <p className=" flex items-center gap-4">
              <div className="w-[100px] h-[100px] rounded-full  overflow-hidden">
                <img src={selectedUser.image} 
  className={`${selectedUser.gender === "male" ? "bg-indigo-600" : "bg-red-500"}`} 
  />
              </div>
              <div>
                <p><strong>الاسم:</strong> {selectedUser.name}</p>
                <p><strong>الجنسية:</strong> {selectedUser.nationality}</p>
                
              </div>
              </p>

                <p><strong>البريد الإلكتروني:</strong> {selectedUser.email}</p>
                <p><strong>الحالة الاجتماعية:</strong> {selectedUser.maritalStatus}</p>
              </>
            )}
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              إغلاق
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default FilterComponent;
