import { useContext } from "react";
import CardBlog from "../Components/blog/CardBlog";
import { AppContext } from "../Store/StateData";

const Blog = () => {
  const {user} =useContext(AppContext)

  return (
    <section    className={`${user != null ? "mr-[240px] max-md:mr-0":""}`}
>
      <div className="pt-10">
        <CardBlog />
      </div>
    </section>
  );
};

export default Blog;
