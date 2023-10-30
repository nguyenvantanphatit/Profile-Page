import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
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
import angular from '../../img/angular.png'
import sourcetree from '../../img/sourcetree.jpg'
import mysql from '../../img/mysql.png'
import gitblab from '../../img/gitlab.png'
import reactjs from '../../img/reactjs.png'
import redux from '../../img/redux.png'
import firebase from '../../img/firebase.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css'

const About: React.FC = () => {
    const skills = [
        { src: html5, alt: 'HTML' },
        { src: css3, alt: 'CSS' },
        { src: Js, alt: 'JavaScript' },
        { src: ts, alt: 'TypeScript' },
        { src: reactjs, alt: 'ReactJs' },
        { src: redux, alt: 'Redux' },
        { src: angular, alt: 'Angular' },
        { src: node, alt: 'NodeJs' },
        { src: mysql, alt: 'MYSQL' },
        { src: database, alt: 'MongoDB' },
        { src: firebase, alt: 'Firebase' },
        { src: antd, alt: 'Ant Design' },
        { src: api, alt: 'Api' },
    ];
    const tools = [
        { src: github, alt: 'Github - Git' },
        { src: postman, alt: 'Postman' },
        { src: sourcetree, alt: 'SourceTree' },
        { src: gitblab, alt: 'GitLab' },
    ];
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <Row className='about'>
                <Col span={24} xl={16} lg={24} md={8} xs={24} className='about-2'>
                    <div className='skill'>
                        <h3>My Skills</h3>
                        <h4>I like to take responsibility to craft aesthetic user experience using modern frontend architecture</h4>
                        <h3>FRAMEWORKS AND LANGUAGES</h3>
                    </div>
                </Col>
                <Col span={24} xl={24} lg={24} md={8} xs={24} className='about-2'>
                    <Row data-aos="fade-left">
                        {skills.map((skill) => (
                            <Col xl={3} lg={24} md={12} xs={12} key={skill.src}>
                                <p className="centered-text">
                                    <img src={skill.src} alt={skill.alt} className="centered-img" /><h5>{skill.alt}</h5>
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col span={24} xl={16} lg={24} md={8} xs={24} className='about-2'>
                    <div className='skill'>
                        <h3>TOOLS</h3>
                    </div>
                </Col>
                <Col span={24} xl={24} lg={24} md={8} xs={24} className='about-2'>
                    <Row data-aos="fade-left">
                        {tools.map((skill) => (
                            <Col xl={3} lg={24} md={12} xs={12} key={skill.src}>
                                <p className="centered-text">
                                    <img src={skill.src} alt={skill.alt} className="centered-img" /><h5>{skill.alt}</h5>
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default About;