import React from 'react';
import { Row, Col, Image } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import Js from '../../img/js.png'
import ts from '../../img/ts.png'
import antd from '../../img/antd.png'
import api from '../../img/api.png'
import css3 from '../../img/css.png'
import html5 from '../../img/html.png'
import github from '../../img/github.png'
import node from '../../img/nodejs.png'
import postman from '../../img/postman.png'
import database from '../../img/database.png'
import Profile from '../../img/skill_1.jpg';
import './About.css'
const About: React.FC = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}><ReadOutlined /> Skills</h1>
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Col span={12}>
                    <Image src={Profile} style={{
                        borderRadius: 100, width: 450, height: 300, marginLeft: 100, backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }} />
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={8}>
                            <p className="centered-text">
                                <img src={html5} alt="" className="centered-img" /> HTML
                            </p>
                            <p className="centered-text">
                                <img src={css3} alt="" className="centered-img" /> CSS
                            </p>
                            <p className="centered-text">
                                <img src={Js} alt="" className="centered-img" /> JavaScript
                            </p>
                            <p className="centered-text">
                                <img src={ts} alt="" className="centered-img" /> TypeScript
                            </p>
                        </Col>
                        <Col span={8}>
                            <p className="centered-text">
                                <img src={antd} alt="" className="centered-img" /> Ant Design
                            </p>
                            <p className="centered-text">
                                <img src={api} alt="" className="centered-img" /> Api
                            </p>
                            <p className="centered-text">
                                <img src={github} alt="" className="centered-img" /> Github - Git
                            </p>
                            <p className="centered-text">
                                <img src={postman} alt="" className="centered-img" /> Postman
                            </p>
                        </Col>
                        <Col span={8}>
                            <p className="centered-text">
                                <img src={node} alt="" className="centered-img" /> NodeJs
                            </p>
                            <p className="centered-text">
                                <img src={database} alt="" className="centered-img" /> MongoDB
                            </p>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    );
};

export default About;
