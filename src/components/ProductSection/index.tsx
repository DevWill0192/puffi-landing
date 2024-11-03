import React from 'react';
import './styles.scss';

interface ProductSectionProps {
  title: string;
  description: string;
  imgSrc: string;
  imgSrcIcon: string;
  idSection: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, description, imgSrc, imgSrcIcon, idSection }) => (
  <section className="product-section" id={idSection}>
    <div className="product-image">
      <img src={imgSrc} alt={title} />
      <a href="#">SHOP</a>
    </div>

    <div className="product-info">
      <img src={imgSrcIcon} alt={`${title} icon`} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="#">VER MÁS</a>
      <div className="triangle"></div>
    </div>
  </section>
);

export default ProductSection;
