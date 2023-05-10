import { Typography, Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import './Footer.css';

const { Link, Title } = Typography;

const CustomFooter = () => {
    return (
        <>
            <Row className="row">
                <Col className="col">
                    <Link href="https://www.facebook.com/tanphat05062001" target="_blank">
                        <FacebookOutlined />
                    </Link>
                </Col>
                <Col className="col">
                    <Link href="https://www.instagram.com/tannnphatttttttt/" target="_blank">
                        <InstagramOutlined />
                    </Link>
                </Col>
                <Col className="col">
                    <Link href="https://www.instagram.com/nguyenvantanphat.it@gmail.com/" target="_blank">
                        <GoogleOutlined />
                    </Link>
                </Col>

                <Col className="col">
                    <Link href="https://github.com/nguyenvantanphatit" target="_blank">
                        <GithubOutlined />
                    </Link>
                </Col>
            </Row>
            <Col>
                <Title className="ant-typography-title">
                    © 2023 Copyright by Tan Phat
                </Title>
            </Col>
        </>
    );
};

export default CustomFooter;
