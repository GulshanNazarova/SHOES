import React from 'react'
import { useWishlist } from 'react-use-wishlist'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify";

const WishListBtn = ({bestsellers}) => {
    const {addWishlistItem, removeWishlistItem,inWishlist}=useWishlist()
    const toggleWishlistFunc=(myItem)=>{
        if(inWishlist(myItem.id)){
            removeWishlistItem(myItem.id)
            toast.error("Remove in wishlist..");
        }
        else{
            toast.success("Add to wishlist..");
            addWishlistItem(myItem)
        }
    }
    return (
    <>
        <button className="add-wish themeMode" onClick={()=>{            
            toggleWishlistFunc(bestsellers)}}>
            {
                inWishlist(bestsellers.id)?  <AiFillHeart/>: <AiOutlineHeart/>
            }
        </button>
    </>
  )
}

export default WishListBtn