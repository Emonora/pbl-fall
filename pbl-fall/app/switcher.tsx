import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const ImageCarousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="flex justify-end h-screen">
            <div className="relative w-1/2 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-white rounded-b-full"></div>
                <Slider {...settings}>
                    <div>
                        <Image 
                            src="/posteer1.jpg"  // No /public prefix
                            alt="Image 1" 
                            layout="responsive" 
                            width={800} 
                            height={600} 
                            className="object-cover" 
                        />
                    </div>
                    <div>
                        <Image 
                            src="/posteer2.jpg" 
                            alt="Image 2" 
                            layout="responsive" 
                            width={800} 
                            height={600} 
                            className="object-cover" 
                        />
                    </div>
                    <div>
                        <Image 
                            src="/posteer3.jpg" 
                            alt="Image 3" 
                            layout="responsive" 
                            width={800} 
                            height={600} 
                            className="object-cover" 
                        />
                    </div>
                    <div>
                        <Image 
                            src="/posteer4.jpg" 
                            alt="Image 4" 
                            layout="responsive" 
                            width={800} 
                            height={600} 
                            className="object-cover" 
                        />
                    </div>
                    <div>
                        <Image 
                            src="/posteer5.jpg" 
                            alt="Image 5" 
                            layout="responsive" 
                            width={800} 
                            height={600} 
                            className="object-cover" 
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ImageCarousel;
