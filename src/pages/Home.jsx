import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BestsellersCard from "../components/BestsellersCard";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const { myData, setMyData } = useContext(GlobalContext);
  const options = {
    loop: true,
    items: 4,
    margin: 10,
    autoplay: true,
    autoplaTimeout: 1000,
    nav: true,
  };
  return (
    <>
      <section className="sect-1 themeMode">
        <div className="container mt-5">
          <div className="row text-center">
            <p>{t("home.0")}</p>
            <h4>{t("home.1")}</h4>
          </div>
        </div>
      </section>
      <section className="sect-2">
        <h4 className="text-light">{t("home.2")}</h4>
      </section>
      <section className="partons-sec themeMode py-5">
        <div className="container">
          <div className="row">
          <h3>Partnor</h3>
            <OwlCarousel className="owl-theme  " {...options}>
              <div class="item">
                <img  src="https://businessyield.com/wp-content/uploads/2023/05/who-owns-chanel.jpeg" alt="" srcset="" />
              </div>
              <div class="item">
                <img style={{height:'170px'}} src="https://1000logos.net/wp-content/uploads/2020/07/Balenciaga-logo-1917.jpg" alt="" srcset="" />
              </div>
              <div class="item">
                <img style={{height:'170px'}} src="https://thumbs.dreamstime.com/b/vinnytsia-ukraine-february-official-pattern-dior-vector-illustration-eps-official-pattern-dior-241473345.jpg" alt="" srcset="" />
              </div>
              <div class="item">
                <img style={{height:'170px'}} src="https://pbs.twimg.com/profile_images/766968740135243776/zZ5bOt9t_400x400.jpg" alt="" srcset="" />
              </div>
              <div class="item">
                <img style={{height:'170px'}} src="https://logowik.com/content/uploads/images/converse-new1270.jpg" alt="" srcset="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="owl-car themeMode py-5">
        <div className="container">
          <div className="row">
            <h3>{t("home.3")}</h3>
            <div class="item  themeMode">
              <OwlCarousel className="owl-theme  themeMode" {...options}>
                {myData.slice(21, 27).map((item, index) => {
                  return <BestsellersCard bestsellers={item} key={index} />;
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
