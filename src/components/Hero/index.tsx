import React from 'react';
import Slider from "react-slick";
import './styles.scss';

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

const Hero: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const BG_IMAGES: string[] = [
    'https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671317/soh9ab8ituuhwiroirdo.jpg',
    'https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671315/yzlcc1juqkqofwdqvxgd.jpg',
    'https://res.cloudinary.com/dnvy6oyza/image/upload/v1730671317/soh9ab8ituuhwiroirdo.jpg',
  ];

  return (
    <Slider {...settings}>
      {BG_IMAGES.map((item, index) => (
        <section key={index}>
          <div
            className="container_hero"
            style={{ backgroundImage: `url(${item})` }}
          >
            <h1>ESTAR CÓMODO, NUNCA FUE TAN FÁCIL.</h1>
            <button>SHOP</button>
          </div>
        </section>
      ))}
    </Slider>
  );
};

export default Hero;
