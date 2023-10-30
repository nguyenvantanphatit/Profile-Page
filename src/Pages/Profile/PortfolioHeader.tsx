import React from 'react';
import { Row, Col } from 'antd';
import './PortfolioHeader.css'
const PortfolioHeader: React.FC = () => {
    return (
        <Row gutter={24} className='header' id='header'>
            <Col xl={24} lg={24} md={8} xs={24} className='header-2'>
                <a href="#"><h3>Home</h3></a>
                <a href="#contact"><h3>About</h3></a>
                <a href="#product"><h3>Projects</h3></a>
            </Col>
        </Row>
    );
};

export default PortfolioHeader;