import React from 'react';
import StudentCard from './StudentCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Students = ({students}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,}
    return (
        <div>
                <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Students Say</h2>
        <Slider {...settings}>
          {students.map((student) => (
            <StudentCard key={student._id} student={student}  />
          ))}
        </Slider>
        
      </div>
    </section>
        </div>
    );
};

export default Students;