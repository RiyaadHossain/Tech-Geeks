import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import "./BlogDetails.css";
import Spinner from "../Spinner/Spinner";

const BlogDetails = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="header-gradient" />
          <div>
            <button className="back-button" onClick={() => Navigate("/")}>
              <BsChevronLeft />
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
      )}
    </div>
  );
};

export default BlogDetails;
