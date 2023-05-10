import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, ProjectOutlined, InfoCircleOutlined, ContactsOutlined } from '@ant-design/icons';

const { Header } = Layout;

const PortfolioHeader: React.FC = () => {

    return (
        <Header style={{ background: '#fff', padding: '0 50px' }}>
            <Menu mode="horizontal" style={{ justifyContent: 'center', borderBottom: 'none' }}>
                <Menu.Item style={{ marginRight: 700, fontSize: 24 }}>
                    <a href="#">Tan Phat</a>
                </Menu.Item>
                <Menu.Item key="home" icon={<HomeOutlined />} style={{ margin: '0 10px' }}>
                    Home
                </Menu.Item>
                <Menu.Item key="about" icon={<InfoCircleOutlined />} style={{ margin: '0 10px' }}>
                    About
                </Menu.Item>
                <Menu.Item key="projects" icon={<ProjectOutlined />} style={{ margin: '0 10px' }}>
                    Projects
                </Menu.Item>
                <Menu.Item key="contact" icon={<ContactsOutlined />} style={{ margin: '0 10px' }}>
                    Contact
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default PortfolioHeader;