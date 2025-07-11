import React, { use } from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { AuthContext } from '../context/AuthContext';
import Banner from '../pages/Home/Banner';

const MainLayout = () => {
    const {theme}=use(AuthContext)
    return (
        <div  id={theme } className=''>
            <Header></Header>
          
            <div className=''>

            <div className="[font-family:'Poppins',sans-serif]">

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;