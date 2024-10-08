import { useParams } from "react-router";
import icon1 from "../../assets/blog.jpg";
import icon2 from "../../assets/hus.jpg";
import icon3 from "../../assets/5612063800715.jpg";
import icon4 from "../../assets/اسا.jpeg";
const BlogPosts = () => {
  const { id } = useParams();
  const blogs = [
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
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  return (
    <div className="w-full mt-[100px] max-md:mt-[10px]">
      <div className="w-[80%] mb-5 flex-wrap mx-auto flex gap-[60px] max-md:gap-5 items-start justify-start">
        {blog ? (
          <>
            <div className=" h-fit shadow rounded-[25px] w-full max-md:w-full flex flex-col justify-center items-center">
              <div>
                <img
                  src={blog.icon}
                  alt={blog.text}
                  className="rounded-[25px] max-h-[500px] w-full"
                />
              </div>
              <div className="w-full px-4 pb-5 flex flex-col items-start justify-center">
                <h3 className="text-start text-[22px] font-bold">
                  {blog.title}
                </h3>
                <p className="pt-4">{blog.text}</p>
              </div>
            </div>
          </>
        ) : (
          <>لا يوجد مقالات</>
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
