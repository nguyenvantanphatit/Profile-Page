import React from 'react';
import { ClockCircleOutlined, ProjectOutlined } from '@ant-design/icons';
import { Timeline, Card, Button } from 'antd';
import { CardData } from './type';
import Card_1 from '../../img/skill.jpg';
import Card_2 from '../../img/skill.jpg';
import Card_3 from '../../img/skill.jpg';
import Card_4 from '../../img/skill.jpg';
import './Product.css'
const cardData: CardData[] = [
    {
        id: 1,
        title: 'Profile Page (3/2023 - 5/2023)',
        imageSrc: Card_1,
        content: 'Profile Page introduces',
    },
    {
        id: 2,
        title: 'Booking Page (3/2023 - 5/2023)',
        imageSrc: Card_2,
        content: 'Booking Page introduces',
    },
    {
        id: 3,
        title: 'Chat Page (3/2023 - 5/2023)',
        imageSrc: Card_3,
        content: 'Chat Page',
    },
    {
        id: 4,
        title: 'Todo App List (3/2023 - 5/2023)',
        imageSrc: Card_4,
        content: 'Todo App List',
    },
];

const Product: React.FC = () => (
    <div >
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}><ProjectOutlined /> Projects</h1>
        <Timeline mode="alternate" className="custom-timeline">
            {cardData.map((card, index) => (
                <Timeline.Item key={index} dot={<ClockCircleOutlined style={{ fontSize: '16px', color: 'red' }} />}>
                    <Card title={card.title}>
                        <img src={card.imageSrc} alt={card.title} style={{ width: 650, marginBottom: '10px', borderRadius: 25 }} />
                        <h2>{card.content}</h2>
                        <Button className='btn'>Link Demo</Button>
                    </Card>
                </Timeline.Item>
            ))}
        </Timeline>
    </div>
);

export default Product;
