import React, { useEffect } from 'react';
import { Card, Modal, Col, Row } from "antd";
import { CardData } from "./type";
import Card_1 from "../../img/vjp-connect-platform.png";
import Card_2 from "../../img/Hotel_management.svg";
import Card_3 from "../../img/dohbo.png";
import Card_4 from "../../img/profile-cv.png";
import "./Product.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const cardData: CardData[] = [
  {
    id: 1,
    title: "Dohbo Janpan(8/2023 - 10/2023)",
    imageSrc: Card_3,
    content: "Angular",
    desc: "Create Campaign Normal, Lottery, Mileage used to advertise on websites or QR code printed products",
    link: "https://www.exc-dmk.co.jp/lp_dohbo_wp.html",
  },
  {
    id: 2,
    title: "Viet Japan Digital Connect Platform(6/2023 - 7/2023)",
    imageSrc: Card_1,
    content: "ReactJs (JavaScript), Antd, NodeJS, MySQL",
    desc: "An event connection website for Japanese and Vietnamese businesses. Allows businesses that want to post company information to connect with each other to increase development and promote cooperation between the two countries using English, Vietnamese and Japanese languages.",
    link: "https://vjp-connect.com",
  },
  {
    id: 3,
    title: "Booking Hotel Management(4/2023 - 5/2023)",
    imageSrc: Card_2,
    content: "ReactJs (TypeScript), Firebase, Antd, PayPal",
    desc: "Booking Hotel Management use payment PayPal",
    link: "https://booking-hotel-management.netlify.app/",
  },
  {
    id: 4,
    title: "Profile (3/2023)",
    imageSrc: Card_4,
    content: "ReactJs, Antd",
    desc: "Personal website to introduce skills and work experience during work",
    link: "https://tanphat-profile.netlify.app/",
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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="product" data-aos="fade-right" id='product'>
        <h3>My Projects</h3>
        <h4>
          I've built with love, expertise and a pinch of magical ingredients.
        </h4>
      </div>
      <Row gutter={[16, 32]} data-aos="fade-right">
        {cardData.map((card, index) => (
          <Col xl={6} lg={12} md={12} xs={24}>
            <Card title={card.title} key={index}>
              <img
                src={card.imageSrc}
                alt={card.title}
                className="img-product"
                onClick={() => handleOpenModal(card)}
              />
              <h5>{card.content}</h5>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        title={selectedCard?.title}
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        <img
          src={selectedCard?.imageSrc}
          alt={selectedCard?.title}
          style={{ width: "100%" }}
        />
        <h5>Desc: {selectedCard?.desc}</h5>
        <h5>Tech: {selectedCard?.content}</h5>
        <a href={selectedCard?.link}>{selectedCard?.link}</a>
      </Modal>
    </>
  );
};
export default Product;
