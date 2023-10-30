import React from 'react';
import { Timeline, Card, Modal, Col } from 'antd';
import { CardData } from './type';
import Card_1 from '../../img/vjp-connect-platform.png';
import Card_2 from '../../img/Hotel_management.svg';
import Card_3 from '../../img/dohbo.png';
import Card_4 from '../../img/profile-cv.png';
import './Product.css'
const cardData: CardData[] = [
    {
        id: 1,
        title: 'Dohbo Janpan(8/2023 - 10/2023)',
        imageSrc: Card_3,
        content: 'Angular',
        desc: 'Create Campaign Normal, Lottery, Mileage',
        link: 'https://www.exc-dmk.co.jp/lp_dohbo_wp.html'
    },
    {
        id: 2,
        title: 'Viet Japan Digital Connect Platform(6/2023 - 7/2023)',
        imageSrc: Card_1,
        content: 'ReactJs (JavaScript), Antd, NodeJS, MySQL',
        desc: 'Connecting events for Japanese businesses using English, Vietnamese and Japanese',
        link: 'https://vjp-connect.com'
    },
    {
        id: 3,
        title: 'Booking Hotel Management(4/2023 - 5/2023)',
        imageSrc: Card_2,
        content: 'ReactJs (TypeScript), Firebase, Antd, PayPal',
        desc: 'Booking Hotel Management use payment PayPal',
        link: 'https://tanphat-profile.netlify.app/'
    },
    {
        id: 4,
        title: 'Profile (3/2023)',
        imageSrc: Card_4,
        content: 'ReactJs, Antd',
        desc: '123',
        link: 'https://tanphat-profile.netlify.app/'
    },

];

const Product: React.FC = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState<CardData>();

    const handleOpenModal = (card: CardData) => {
        setModalVisible(true);
        setSelectedCard(card);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <div className='product'>
                <h3>My Proejcts</h3>
                <h4>I've built with love, expertise and a pinch of magical ingredients.</h4>
            </div>
            <Col xl={24} lg={24} md={24} xs={24}>
                <Timeline className="custom-timeline">
                    {cardData.map((card, index) => (
                        <Timeline.Item key={index}>
                            <Card title={card.title}>
                                <img
                                    src={card.imageSrc}
                                    alt={card.title}
                                    className='img-product'
                                    onClick={() => handleOpenModal(card)}
                                />
                                <h5>{card.content}</h5>
                            </Card>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Col>

            <Modal
                title={selectedCard?.title}
                visible={modalVisible}
                onCancel={handleCloseModal}
                footer={null}
            >
                <img src={selectedCard?.imageSrc} alt={selectedCard?.title} style={{ width: '100%' }} />
                <h5>Desc: {selectedCard?.desc}</h5>
                <h5>Link: {selectedCard?.link}</h5>
            </Modal>
        </>
    );
};
export default Product;
