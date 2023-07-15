import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useCart } from "react-use-cart";
import WishListBtn from "./WishListBtn";

const BestsellersCard = ({ bestsellers }) => {
  const { addItem } = useCart();
  return (
    <>
      <div
        className="col-lg-4 col-md-6 col-sm-6 p-2 card-div"
      >
        <div className="card" style={{ width: "100%", height: "100%" }}>
          <div className="card-img">
            <img src={bestsellers.img} className="card-img-top" alt="..." />
          </div>
          <div className="card-body themeMode">
            <h5 className="card-title">{bestsellers.title}</h5>
            <p className="card-text">
              {bestsellers.price.toFixed()}{" "}
              <i class="fa-solid fa-dollar-sign"></i>
            </p> <button
              onClick={() => {
                addItem(bestsellers);
                toast.success("Add to cart..");
              }}
              className="add-btn"
            >
              Add to cart
            </button>
            <div className="buttons">
             
            <NavLink
             to={`/details/${bestsellers.id}`}
              className="add-btn my-2"
            >
              Details
            </NavLink>
            <WishListBtn bestsellers={bestsellers}/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BestsellersCard;
