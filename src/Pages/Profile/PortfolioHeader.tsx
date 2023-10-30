import React from 'react';
import { Row, Col } from 'antd';
import './PortfolioHeader.css'
const PortfolioHeader: React.FC = () => {
    return (
        <Row gutter={24} className='header'>
            <Col xl={16} lg={24} md={8} xs={24} className='header-1'>
                <p>Tan Phat</p>
            </Col>
            <Col xl={8} lg={24} md={8} xs={24} className='header-2'>
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
            </Col>
        </Row>
    );
};

export default PortfolioHeader;