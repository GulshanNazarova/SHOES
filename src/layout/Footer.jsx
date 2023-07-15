import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalThemeContext } from "../context/ThemeContext";
import logo1 from "../assets/images/catwalk-shoes2.png";
import logo2 from "../assets/images/catwalk-shoes3.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const { darkMode, setDarkMode, toggleTheme } = useContext(GlobalThemeContext);
  return (
    <>
      <section className="themeMode">
        <div className="container-fluid ">
          <footer className="d-flex flex-wrap justify-content-between align-items-center  border-top">
            <div className="col-md-4 d-flex align-items-center my-5">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              >
                <svg className="bi" width={30} height={24}>
                  <use xlinkHref="#bootstrap" />
                </svg>
              </a>
              <NavLink
                className="navbar-brand"
                style={{ width: "15%", height: "15%" }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={darkMode ? logo2 : logo1}
                  alt=""
                  srcset=""
                />
              </NavLink>
            </div>
            <div class="col mb-3">
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                <NavLink className="nav-link link " aria-current="page" to="/">
                  {t("header.0")} </NavLink>
                </li>
                <li class="nav-item mb-2">
                <NavLink className="nav-link link " aria-current="page" to="/about">
                  {t("header.2")} </NavLink>
                </li>
                <li class="nav-item mb-2">
                <NavLink className="nav-link link " aria-current="page" to="/about">
                  {t("header.5")} </NavLink>
                </li>
              </ul>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  target="_blank"
                  href="https://twitter.com/CHANEL"
                >
                  <i class="fa-brands fa-square-twitter"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  target="_blank"
                  href="https://www.instagram.com/chanelofficial/"
                >
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  target="_blank"
                  href="https://www.facebook.com/chanel/?locale=tr_TR"
                >
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Footer;
