import React from 'react';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
const slides = [
    {
        title: "Learn Anywhere, Anytime",
        subtitle: "Discover your passion with our expert-led courses.",
        bg: "https://i.ibb.co/Y404wCGt/slider1.jpg",
    },
    {
        title: "Master In-Demand Skills",
        subtitle: "Join thousands of learners building their future.",
        bg: "https://i.ibb.co/xqrZfw5w/slider2.jpg",
    },
    {
        title: "Upgrade Your Career",
        subtitle: "Flexible online courses for modern learners.",
        bg: "https://i.ibb.co/FbBcMxm0/slider3.jpg",
    },
];
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
    };
    return (
        <div className="relative h-[75vh]   overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <div key={i}>
                        <div className='h-[75vh] '>

                        <div
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide.bg})` }}
                        >
                         {/* animate  */}
                            <div className="absolute inset-0  bg-opacity-60 flex items-center justify-center">
                                <div className="text-center text-white px-4 max-w-3xl mx-auto">
                                    <motion.h2
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-4xl md:text-5xl font-bold mb-4"
                                    >
                                        {slide.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        className="text-lg md:text-xl"
                                    >
                                        {slide.subtitle}
                                    </motion.p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;