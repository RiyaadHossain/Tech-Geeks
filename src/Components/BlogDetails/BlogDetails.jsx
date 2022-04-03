import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
// import { BsChevronLeft } from "react-icons/bs";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  return (
    <>
      <div className="header-gradient" />
      <div>
        <button className="back-button" onClick={() => Navigate(-1)}>
          {/* <BsChevronLeft /> */}Back
          <p>Back</p>
        </button>
        <div className="blog-details">
          <div className="blog-image">
            <img src={blog?.imageURL} alt="" />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
