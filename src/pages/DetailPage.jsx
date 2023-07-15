import React from "react";
import { useContext } from "react";
import BestsellersCard from "../components/BestsellersCard";
import { GlobalContext } from "../context/GlobalState";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useCart } from "react-use-cart";
import WishListBtn from "../components/WishListBtn";


const DetailPage = () => {
  const { addItem } = useCart();
  const { id } = useParams();
  const { myData } = useContext(GlobalContext);
  const detailedProduct = myData.find((item) => item.id.toString() === id);
  console.log(detailedProduct);
  return (
    <>
      <section className="themeMode">
        <div className="container">
          <div className="row">
            {!detailedProduct ? (
              "wait"
            ) : (
              <>
                <div className="col-lg-4">
                  <div
                    className="card"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div className="card-img">
                      <img
                        src={detailedProduct.img}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body themeMode">
                      <h5 className="card-title">{detailedProduct.title}</h5>
                      <p className="card-text">
                        {detailedProduct.price.toFixed()}{" "}
                        <i class="fa-solid fa-dollar-sign"></i>
                      </p>
                      <button
                        onClick={() => {
                          addItem(detailedProduct);
                          toast.success("Add to cart..");
                        }}
                        className="add-btn"
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 detail-text">
                  <h2>Details</h2> <br></br> {detailedProduct.desc}
                </div>
                {/* <WishListBtn {detailedProduct.}/> */}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPage;
