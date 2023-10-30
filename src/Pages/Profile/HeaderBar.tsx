import React from "react";
import { Image, Row, Col } from "antd";
import Profile from "../../img/skill-profile.jpg";
import "./HeaderBar.css";
const HeaderBar: React.FC = () => {
    return (
        <>
            <Row className="header-bar">
                <Col span={16} xl={16} lg={24} md={8} xs={24} className="header-bar-1">
                    <h3> Hi, my name is  Tan Phat</h3>
                    <h2 className="typing-text">I'm Front-end Developer</h2>
                </Col>
                <Col span={8} xl={8} lg={24} md={8} xs={24} className="header-bar-2">
                    <Image src={Profile} className="about-img" preview={false} />
                </Col>
            </Row >
        </>
    );
};
export default HeaderBar;
