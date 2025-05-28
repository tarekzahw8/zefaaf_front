import { useContext } from "react";
import CardBlog from "../Components/blog/CardBlog";
import { AppContext } from "../Store/StateData";

const Blog = () => {
  const {user} =useContext(AppContext)

  return (
    <section    className={` `}
>
  <div className="">

  <h4 className="text-center  font-semibold mt-[20px] text-[55px]">المقالات</h4>
  </div>
      <div className="">
        <CardBlog />
      </div>
    </section>
  );
};

export default Blog;
