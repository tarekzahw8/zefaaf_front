import { useState } from "react";
import icon1 from "../../assets/blog.jpg";
import icon2 from "../../assets/hus.jpg";
import icon3 from "../../assets/5612063800715.jpg";
import icon4 from "../../assets/اسا.jpeg";
import { Link } from "react-router-dom";

const CardBlog = () => {
  const allItems = [
    {
      id: 1,
      category: "مقال",
      icon: icon1,
      text: "عشرة نصائح يقدمها زفاف.نت للسعادة الزوجية 1- الأمن: يعتبر لبنة أساسية في صرح هذه الحياة وبدونه لن يشعر الزوجان بالحياة الهنيئة الهادفة، وهو يطرد التوتر والعدوانية من بينكما. 2- البر: وأجمل ما في الحياة الزوجية أن يشعر كل طرف فيها بأنه نصف الطرف الآخر، فإذا قدم أحدهما معروفاً للآخر",
      title: "كيفية بناء علاقة زوجية ناجحة",
    },
    {
      id: 2,
      category: "إستشارات أسرية",
      icon: icon2,
      text: "عشرة نصائح يقدمها زفاف.نت للسعادة الزوجية 1- الأمن: يعتبر لبنة أساسية في صرح هذه الحياة وبدونه لن يشعر الزوجان بالحياة الهنيئة الهادفة، وهو يطرد التوتر والعدوانية من بينكما. 2- البر: وأجمل ما في الحياة الزوجية أن يشعر كل طرف فيها بأنه نصف الطرف الآخر، فإذا قدم أحدهما معروفاً للآخر",
      title: "نصائح للحياة الزوجية",
    },
    {
      id: 3,
      category: "صفات الزوج الصالح",
      icon: icon3,
      text: "عشرة نصائح يقدمها زفاف.نت للسعادة الزوجية 1- الأمن: يعتبر لبنة أساسية في صرح هذه الحياة وبدونه لن يشعر الزوجان بالحياة الهنيئة الهادفة، وهو يطرد التوتر والعدوانية من بينكما. 2- البر: وأجمل ما في الحياة الزوجية أن يشعر كل طرف فيها بأنه نصف الطرف الآخر، فإذا قدم أحدهما معروفاً للآخر",
      title: "صفات الزوج الصالح",
    },


    {
      id: 4,
      category: "الصحة الزوجية",
      icon: icon4,
      text: "عشرة نصائح يقدمها زفاف.نت للسعادة الزوجية 1- الأمن: يعتبر لبنة أساسية في صرح هذه الحياة وبدونه لن يشعر الزوجان بالحياة الهنيئة الهادفة، وهو يطرد التوتر والعدوانية من بينكما. 2- البر: وأجمل ما في الحياة الزوجية أن يشعر كل طرف فيها بأنه نصف الطرف الآخر، فإذا قدم أحدهما معروفاً للآخر",
      title: "كيفية بناء علاقة زوجية صحية",
    },


  ];

  const [filteredItems, setFilteredItems] = useState(allItems);

  const filterItems = (category) => {
    if (category === "كل المقالات") {
      setFilteredItems(allItems);
    } else {
      setFilteredItems(allItems.filter((item) => item.category === category));
    }
  };

  return (
    <div className="w-full mt-[100px] max-md:mt-[10px]">
      <div className="w-[80%] mb-5 flex-wrap mx-auto flex gap-[60px] max-md:gap-5 items-start justify-start">
        <div className="row flex relative  w-full gap-4">
          <button
            className="rounded-md w-full button_bg py-4 active:buttonCard px-4"
            onClick={() => filterItems("كل المقالات")}
          >
            كل المقالات
          </button>

          <button
            className="rounded-md w-full button_bg py-2 px-4"
            onClick={() => filterItems("إستشارات أسرية")}
          >
            إستشارات أسرية
          </button>

          <button
            className="rounded-md w-full button_bg py-2 px-4"
            onClick={() => filterItems("صفات الزوج الصالح")}
          >
            صفات الزوج الصالح
          </button>

          <button
            className="rounded-md w-full button_bg py-2 px-4"
            onClick={() => filterItems("الصحة الزوجية")}
          >
            الصحة الزوجيــة
          </button>
        </div>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="BoxCard h-fit shadow rounded-[25px] w-[320px] max-md:w-full flex flex-col justify-center items-center"
          >
            <div>
              <img
                src={item.icon}
                alt={item.text}
                className="rounded-[25px] max-h-[200px] w-[320px]"
              />
            </div>
            <div className="w-full px-4 pb-5 flex flex-col items-start justify-center">
              <h3 className="text-start text-[22px] font-bold">{item.title}</h3>
              <p className="pt-4 line-clamp-3">{item.text}</p>
              <Link className="py-3 mt-3 flex items-center justify-center w-full px-4 button_bg rounded-md" to={`/Blog/${item.id}`}> عرض المزيد</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBlog;
