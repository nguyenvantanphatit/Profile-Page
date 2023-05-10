import React from 'react';
import { Typography, Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import Profile_1 from '../../img/123.svg';
import './HeaderBar.css';

const { Link } = Typography;

const HeaderBar: React.FC = () => {
    return (
        <div
            className="header-container"
            style={{
                backgroundImage: `url(${Profile_1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '30px'
            }}
        >

            <Row
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    marginBottom: '20px',
                    height: '450px'
                }}
            >

                <Col className="footer-social-icons">
                    <Link href="https://www.facebook.com/tanphat05062001" target="_blank">
                        <FacebookOutlined />
                    </Link>
                    <Link href="https://www.instagram.com/tannnphatttttttt/" target="_blank">
                        <InstagramOutlined />
                    </Link>
                    <Link href="https://github.com/nguyenvantanphatit" target="_blank">
                        <GithubOutlined />
                    </Link>
                    <Link href="https://nguyenvantanphat.it@gmail.com" target="_blank">
                        <GoogleOutlined />
                    </Link>

                </Col>

            </Row>
        </div >
    );
};

export default HeaderBar;
