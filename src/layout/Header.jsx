import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalThemeContext } from "../context/ThemeContext";
import logo1 from "../assets/images/catwalk-shoes2.png";
import logo2 from "../assets/images/catwalk-shoes3.png";
import AuthBtn from "../components/AuthBtn";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18";
import Flag from 'react-world-flags'
import {useWishlist} from 'react-use-wishlist'
import { useCart } from 'react-use-cart'


const Header = () => {
  const { darkMode, setDarkMode, toggleTheme } = useContext(GlobalThemeContext);
  const { t } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const {totalItems}=useCart()
  const {totalWishlistItems}=useWishlist()
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg themeMode ">
        <div className="container-fluid ">
          <NavLink
            className="navbar-brand"
            style={{ width: "10%", height: "10vh" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={darkMode ? logo2 : logo1}
              alt=""
              srcset=""
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link link " aria-current="page" to="/">
                  {t("header.0")} </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/shoes">
                  {t("header.1")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {t("header.2")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/wishlist">
                  {t("header.3")}
                </NavLink>
              </li>
              <span className="total">{totalWishlistItems}</span>
              <li className="nav-item">
                <NavLink className="nav-link" to="/card">
                  {t("header.4")}
                </NavLink>               
              </li>
              <span className="total">{totalItems}</span>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  {t("header.5")}
                </NavLink>
              </li>
            </ul>
            <ul className="nav-buttons d-flex">
              <li className="mx-3">
                <button className="theme-btn" onClick={toggleTheme}>
                  <i class="fa-regular fa-lightbulb"></i>
                </button>
              </li>
              <div class="dropdown  ">
                <button
                  class="themeMode user-btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-globe"></i>
                </button>
                <ul class="dropdown-menu">
                  <li className="nav-item mx-2">
                    <button onClick={() => handleClick("az")}><Flag code="aze" height="16"/></button>
                  </li>
                  <li className="nav-item mx-2">
                    <button onClick={() => handleClick("en")}><Flag code="usa" height="16"/></button>
                  </li>
                </ul>
              </div>

              <li className="nav-item user-btn mx-2">
                <AuthBtn />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
