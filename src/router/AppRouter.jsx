import React, { useContext, useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shoes from "../pages/Shoes"
import About from "../pages/About"
import Home from '../pages/Home'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import PrivateRoute from '../routes/PrivateRoute'
import DetailPage from '../pages/DetailPage'
import Wishlist from '../pages/Wishlist'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import { ContextProvider } from '../context/GlobalState'
import Card from '../pages/Card'
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GlobalThemeContext} from '../context/ThemeContext'
import Blogs from '../pages/Blogs'
import AddBlog from '../pages/AddBlog'
import { useSelector } from 'react-redux'
import EditPage from '../pages/EditPage'
const AppRouter = () => {

    const myBlogs = useSelector((store) => store.AppReducer);
    useEffect(() => {
      localStorage.setItem("Blogs", JSON.stringify(myBlogs));
    }, [myBlogs]);


    const {darkMode}=useContext(GlobalThemeContext)
    return (
        <>
            <main className={darkMode?'dark':'light'}>
                        <ContextProvider>
                        <BrowserRouter>
                        <ToastContainer
                        position="bottom-center"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="light"
                        transition={Flip}
                    />
                            <Header/>
                                <Routes>
                                    <Route path='/' element={<Home/>}/>
                                    <Route path='/shoes' element={<Shoes/>}/>
                                    <Route path='/about' element={<About/>}/>
                                    <Route path='/wishlist' element={<Wishlist/>}/>
                                    <Route path='/card' element={<Card/>}/>
                                    <Route path='/blogs' element={<Blogs/>}/>
                                    <Route path='/details/:id' element={<DetailPage/>}/>
                                    <Route path='/login' element={<Login/>}/>
                                    <Route path="/editBlog/:id" element={<EditPage />} />
                                    <Route element={<PrivateRoute/>}>
                                        <Route path='/admin' element={<Admin/>}/>
                                        <Route path='/addBlog' element={<AddBlog/>}/>
                                    </Route>
                                </Routes>
                            <Footer/>
                        </BrowserRouter>
                    </ContextProvider>
            </main>
        </>
    )
}

export default AppRouter