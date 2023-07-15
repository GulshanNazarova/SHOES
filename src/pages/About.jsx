import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import data from "../services/SliderImages";
import data2 from "../services/SliderVideos";
import img from "../assets/images/image-removebg-preview_1.png";
import { motion } from "framer-motion";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18";
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="about-coco  themeMode">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <img src={img} alt="" />
            </div>
            <motion.div
              initial={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="col-lg-6 mt-5"
            >
              <h4>
              {t("about.0")}
              </h4>
              <h6>
              {t("about.1")}
              </h6>
              <p className="my-5">
              {t("about.2")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid coco p-5">
          <div className="row">
            <motion.div initial={{ opacity: 0, translateY: 60 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ ease: "easeOut", duration: 2 }} className="col-lg-12 ">{t("about.3")}</motion.div>
          </div>
        </div>
      </section>
      <section className="about-coco-slider">
        <div className="container">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              EffectFade,
            ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {data.map((item, index) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 rel">
                        <img
                          src={item.img}
                          style={{ width: "80%", height: "80vh" }}
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6  col-md-12 col-sm-12">
                        {item.desc}
                      </div>
                      <motion.div initial={{opacity: 0,translateX:-100}} animate={{opacity: 1,translateX:0}} className="col-lg-12 title">{item.title}</motion.div>
                    </div>
                    <div className="col-lg-12 counter my-5">{item.id}/10</div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className="about-coco-album themeMode">
        <div className="container">
          <div className="row coco-album">
            <div className="col-lg-6 lf">
              <img
                src="https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,f_auto/1664444256691-159738657829411keesvandongen1940sdjpgmaxmdmdjpg_1474x974.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className="col-lg-6 lf">
              <img
                src="https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,f_auto/1664444318664-15973866496753marielaurencinhdrmn06511615djpgmaxmdmdjpg_1234x974.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className="img-center">
              <img
                src="https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,f_auto/1664444295495-15973866176852horst1937djpgmaxmdmdjpg_1012x974.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about-history themeMode">
        <div className="container">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              EffectFade,
            ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {data2.map((i, index) => {
              return (
                <>
                  <SwiperSlide>
                    <video width={"100%"} height={"100%"} controls autoPlay>
                      <source src={i.video} type="video/mp4" />
                    </video>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section>
        <div className="conatiner command-row ">
          <div className="row">
            <div className="col-lg-12 command">
              <h3 className="command-text">{t("about.4")}</h3>
            </div>
            <div className="col-lg-6  col-md-6 col-sm-12 right">
              <img
                width={"100%"}
                src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_512/FSH-1637250540831-microsoftteamsimage100.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="col-lg-6  col-md-6 col-sm-12 about-text">
              <h4>{t("about.5")}</h4>
              <p>
              {t("about.6")}
              </p>
              <NavLink className="button-about">Book an appointment</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
