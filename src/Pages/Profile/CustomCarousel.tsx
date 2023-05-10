import React, { useState } from 'react';
import { Carousel, Row, Col } from 'antd';
import Card_1 from '../../img/land-room-type-1.svg';
import Card_2 from '../../img/land-room-type-2.svg';
import Card_3 from '../../img/land-room-type-3.svg';
import Card_4 from '../../img/land-room-type-4.svg';

const carouselData = [
    {
        id: 1,
        image: Card_1,
        altText: 'Card 1',
    },
    {
        id: 2,
        image: Card_2,
        altText: 'Card 2',
    },
    {
        id: 3,
        image: Card_3,
        altText: 'Card 3',
    },
    {
        id: 4,
        image: Card_4,
        altText: 'Card 4',
    },
];

const CustomCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const onChange = (slide: number) => {
        console.log(slide);
        setCurrentSlide(slide);
    };

    return (
        <>
            <Row>
                <Col span={12}>
                    <img src={carouselData[currentSlide].image} style={{ width: 700 }} alt={carouselData[currentSlide].altText} />
                </Col>
                <Col span={12}>
                    <Carousel afterChange={onChange} style={{ width: 500 }} initialSlide={currentSlide}>
                        {carouselData.map((slide) => (
                            <div key={slide.id}>
                                <h3>
                                    <img src={slide.image} alt={slide.altText} style={{ width: 500 }} />
                                </h3>
                            </div>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </>
    );
};

export default CustomCarousel;
