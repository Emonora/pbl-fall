import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Image from 'next/image';

const ImageCarousel: React.FC = () => {
    return (
        <div className="flex justify-end h-screen">
            <div className="relative w-1/2 overflow-hidden">
                <Swiper spaceBetween={50} slidesPerView={1}>
                    <SwiperSlide>
                        <Image src="/posteer1.jpg" alt="Image 1" layout="responsive" width={800} height={600} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/posteer2.jpg" alt="Image 2" layout="responsive" width={800} height={600} />
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageCarousel;