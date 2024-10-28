'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageSwitcherProps {
  images: string[];
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="absolute right-0 top-0 w-64 h-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gray-200 rounded-l-full overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          layout="fill" // Fills the parent container
          objectFit="cover" // Ensures the image covers the entire container
          className="transition-transform duration-500"
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
        aria-label="Previous Image"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
        aria-label="Next Image"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSwitcher;
