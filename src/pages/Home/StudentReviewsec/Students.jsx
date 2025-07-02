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
                <section className=" py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
       
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