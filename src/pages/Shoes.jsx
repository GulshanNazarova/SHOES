import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import BestsellersCard from "../components/BestsellersCard";
import { useCart } from "react-use-cart";
import Aos from "aos";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Shoes = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const [search, setSearch] = useState("");
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const { myData, setMyData } = useContext(GlobalContext);
  const [newState, setNewState] = useState(myData);
  const [newFiltered,setNewFiltered]=useState(myData);
  const [category, setCategory] = useState([]);



  useEffect(() => {
    setCategory([...new Set(newState.map((item) => item.category))]);
  }, []);
  const filterFunction = (itemData) => {
    const filteredData = newState.filter((item) => item.category == itemData);
    setNewFiltered(filteredData);
  };

  return (
    <>
      <section className="themeMode ">
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <motion.div
                className="scroll-con themeMode"
                style={{
                  scale,
                }}
              >
                <motion.div
                  className="item"
                  style={{
                    scaleY: scrollYProgress,
                  }}
                />
              </motion.div>
            </div>
            <form className="d-flex my-5 search-form" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search product.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
                  <button className="add-btn"  onClick={() => setNewFiltered(myData)}>All</button>              
                {category.map((item) => {
                  return (
                      <button className="add-btn" onClick={() => filterFunction(item)}>
                        {item}
                      </button>
                  );
                })}
            { search === "" &&  newFiltered.map((item) => {
              return <BestsellersCard bestsellers={item}/>;
            })
            }
            {search !== "" && myData
              .filter((item) => {
                return search.toLocaleLowerCase() === ""
                  ? item
                  : item.title.toLocaleLowerCase().includes(search);
              })                          
              .map((item, index) => {
                return <BestsellersCard bestsellers={item} key={index} />;
              })              
            }
            
          </div>
        </div>
        {console.log(newState)}
      </section>
    </>
  );
};

export default Shoes;
