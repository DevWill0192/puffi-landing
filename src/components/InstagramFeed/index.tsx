import React, { useEffect, useState } from 'react';
import './styles.scss';

const InstagramFeed: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  // Function to fetch images from Lorem Picsum
  const fetchImages = () => {
    const imageUrls: string[] = [];
    for (let i = 0; i < 6; i++) { // Change 6 to the number of images you want
      imageUrls.push(`https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`);
    }
    setImages(imageUrls);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section className="instagram-feed">
      <p className="title">INSTAGRAM</p>
      <p className="hashtag">#ESPufi</p>
      <div className="instagram-images">
        {images.map((url, index) => (
          <img key={index} src={url} alt="Random from Lorem Picsum" />
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
