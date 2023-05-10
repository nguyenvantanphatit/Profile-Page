import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
import Contact from './Contact';
import CustomFooter from './CustomFooter';
import Product from './Product';
import HeaderBar from './HeaderBar';
import About from './About';
import './index.css'
const Profile: React.FC = () => {
    return (
        <Layout style={{ backgroundColor: 'white' }}>
            {/* <PortfolioHeader /> */}
            <HeaderBar />
            <About />
            <Product />
            <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>
                <Contact />
            </Footer>
            <CustomFooter />
        </Layout>
    );
};

export default Profile;

