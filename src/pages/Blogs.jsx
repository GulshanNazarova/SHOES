import React from "react";
import { useSelector } from "react-redux";
import BlogCards from "../components/BlogCards";

const Blogs = () => {
  const myBlogs = useSelector((store) => store.AppReducer);

  console.log(myBlogs);
  return (
    <>
      <section className="themeMode py-5">
        <div className="container">
          <div className="row">
          <div className="news-header">
            <h1 className="sign-news"></h1>
          </div>
            {myBlogs.map((item, index) => {
              return <BlogCards blogCard={item} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
