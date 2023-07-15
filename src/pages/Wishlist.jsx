import React from 'react'
import { useWishlist } from 'react-use-wishlist'
import BestsellersCard from '../components/BestsellersCard'
import {BsTrash3} from 'react-icons/bs'
import { useTranslation } from "react-i18next";
const Wishlist = () => {
    const { t } = useTranslation();
    const {items, setWishlistItems,isWishlistEmpty}=useWishlist() 
    if (isWishlistEmpty)  return <section className='themeMode empty'>{t("wishlist.0")}</section>
    const myArray = [...new Map(items.map((item) => [item.id, item])).values()];
    return (
    <>
        <section className="wish-sec themeMode">
            <div className="container">                
            <button className='add-btn' onClick={() => setWishlistItems([])}><BsTrash3/></button>
                <div className="row wish-row">
                    {
                        myArray.map((item)=>{
                            return <BestsellersCard bestsellers={item} key={item.id}/>
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Wishlist