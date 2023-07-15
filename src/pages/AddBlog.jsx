import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { AddBlogFunction } from "../redux/Actions";
import {  toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const AddBlog = () => {
    const [blog,setBlog]=useState({
        id:uuidv4(),
        title:"",
        image:"",
        description:"",
    });
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setBlog({...blog,[e.target.name]:e.target.value})
    }
    const submitForm=(e)=>{
        e.preventDefault()
        dispatch(AddBlogFunction(blog))
        toast.success("Add to cart..");
        location('/blogs')
    }

    const location = useNavigate()
  return (
    <>
    <section className="add-blog-sec themeMode">
         <div className="container ">
        <div className="row">
        <form onSubmit={submitForm}>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              name="image"
              onChange={handleChange}
            />
          </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Add Your Title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Add Your Description"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="add-btn">
          Add New
        </button>
      </form>
      <img src="" alt="" />
        </div>
     </div>
    </section>
    
    </>
  );
};

export default AddBlog;
