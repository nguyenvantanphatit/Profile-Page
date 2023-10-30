import React from 'react';
import { Layout } from 'antd';
import Contact from './Contact';
import CustomFooter from './CustomFooter';
import Product from './Product';
import HeaderBar from './HeaderBar';
import About from './About';
import './index.css';
import PortfolioHeader from './PortfolioHeader';
import BackToTop from './BackToTop'
const Profile: React.FC = () => {


    return (
        <>
            <Layout className='layout'>
                <PortfolioHeader />
                <HeaderBar />
                <About />
                <Product />
                <Contact />
                <CustomFooter />
                <BackToTop />
            </Layout >
        </>
    );
};

export default Profile;
