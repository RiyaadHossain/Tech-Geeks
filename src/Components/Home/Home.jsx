import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Spinner from "../Spinner/Spinner";
import './Home.css'

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch("https://retro-tech-talks.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
        setLoading(false);
      });
  }, []);
  return (
    <>
    {loading ? <Spinner/> : <div className='blogs-container'>
      {blogs.map((blog, index) => (
        <Blog key={index} blog={blog} />
      ))}
    </div>}
    </>
  );
};

export default Home;
