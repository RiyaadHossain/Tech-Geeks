import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css'
import Indicator from '../../Images/Indicator.svg'

const Blog = ({ blog }) => {
    const Navigate = useNavigate()
    const {imageURL, title, blog:blogBody, admin, _id} = blog
    
    return (
        <div className='blog-container'>
      <div className='blog-image-container'>
        <img src={imageURL} alt='' />
      </div>
      <div className='blog-content'>
        <div>
          <h1>{title}</h1>
          <div className='author-name'>
            <img src={Indicator} alt='' />
            <p>{admin}</p>
          </div>
        </div>
        <p className='blog-preview'>
          {blogBody.length < 400 ? blogBody.length : blogBody.slice(0, 400)}
          <span className='read-more' onClick={() => Navigate(`/blog/${_id}`)}>
            ...Read More
          </span>
        </p>
      </div>
    </div>
    );
};

export default Blog;