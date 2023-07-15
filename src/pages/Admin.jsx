import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { RemoveBlogFunction } from "../redux/Actions";
import { BiAddToQueue } from "react-icons/bi";

const Admin = () => {
  const myBlogs = useSelector((store) => store.AppReducer);

  const dispatch = useDispatch();
  return (
    <>
      <section className="themeMode py-5">
        <div className="container">
          <div className="row">
            <NavLink className="add-btn navlink-blog" to="/addBlog">
              add
            </NavLink>
            <table class="table themeMode">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {myBlogs.map((item, index) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={item.image}
                          style={{ width: "300px" }}
                          alt=""
                          srcset=""
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>
                        <NavLink className='themeMode'
                        >
                          <CiEdit />
                        </NavLink>
                      </td>
                      <td>
                        <button className='themeMode'
                          onClick={() => dispatch(RemoveBlogFunction(item.id))}
                        >
                          <BsTrash />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
