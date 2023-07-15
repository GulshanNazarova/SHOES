import React, {useEffect} from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import BestsellersCard from "../components/BestsellersCard";
import { useCart } from "react-use-cart";
import Aos from 'aos'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18";
const Card = () => {
  const { t } = useTranslation();
  const { myData, setMyData } = useContext(GlobalContext);
  const {
    items,
    cartTotal,
    totalItems,
    removeItem,
    updateItemQuantity,
    setItems,
    isEmpty,
  } = useCart();

  useEffect(() => {
    Aos.init({
      duration: 1000, 
    })
  }, [])

  const options = {
    loop: true,
    items: 4,
    margin: 10,
    autoplay: true,
    autoplaTimeout: 1000,
    nav:true,
  };
  return (
    <>
      {items.length === 0 ? (
        <section className="themeMode">
          <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h3>{t("cart.0")}</h3>
              </div>
              <div class="item  themeMode">
              <OwlCarousel className="owl-theme  themeMode" {...options}>
                {myData.slice(6, 11).map((item, index) => {
                  return <BestsellersCard bestsellers={item} key={index} />;
                })}
              </OwlCarousel>
            </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="themeMode">
          <div className="container ">
            <div className="row">
              <table classname="table">
                <thead>
                  <tr className="bg-secondary text-light ">
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => {
                    return (
                      <tr>
                        <td>
                          <img
                            src={item.img}
                            alt=""
                            style={{ width: "300px", margin: "10px" }}
                            srcset=""
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price * item.quantity} $</td>
                        <td>
                          <button
                            className="btn"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <i class="fa-regular fa-square-plus"></i>
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="btn"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <i class="fa-regular fa-square-minus"></i>
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn"
                            onClick={() => {
                              removeItem(item.id);
                            }}
                          >
                            <i class="fa-regular fa-trash-can"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="col-lg-12 bg-secondary text-light text-center">
                Cart Total : {cartTotal} $
              </div>
              <div className="col-lg-12 bg-secondary text-light text-center">
                Total Items : {totalItems}
              </div>
              <button onClick={() => setItems([])}>Buy now</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Card;
