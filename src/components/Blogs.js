import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Blog1 from "../images/blog1.png";
import Blog2 from "../images/blog2.png";
import Blog3 from "../images/blog3.png";

const blogs = [
  {
    id: "1",
    img: Blog1,
    urlLive:
      "https://blogs.kryonics.me/posts/mot-so-khai-niem-co-ban-ve-cong-nghe-web/",
  },
  {
    id: "2",
    img: Blog2,
    urlLive: "https://blogs.kryonics.me/posts/flexbox/",
  },
  {
    id: "3",
    img: Blog3,
    urlLive: "https://blogs.kryonics.me/posts/grid-layout/",
  },
];

const Blogs = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="bg-black relative overflow-hidden mt-16">
      <div
        data-aos="zoom-in-up"
        className=" text-gray-100 flex justify-center items-center"
      >
        <h2 className="text-4xl sm:text-6xl uppercase font-bold tracking-wide">
          Blogs
        </h2>
      </div>
      <div
        data-aos="zoom-in-up"
        className="grid  lg:grid-cols-3 grid-flow-row  gap-2 w-full h-full lg:px-16 lg:py-20 sm:px-28 py-6 px-6 "
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="h-72 rounded-md overflow-hidden relative hover:opacity-80 transition ease-in-out duration-300"
          >
            <a href={blog.urlLive} target="_blank" rel="noreferrer">
              <img
                className="h-full w-full object-cover"
                src={blog.img}
                alt=""
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
