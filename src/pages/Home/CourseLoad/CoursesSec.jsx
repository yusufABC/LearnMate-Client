import React from 'react';
import Course from './Course';

const CoursesSec = ({courses}) => {
    return (

        <div className='bg-gray-50 '>
        <h2 className='md:text-5xl text-center my-10'>Our Latest Courses Explore Now !</h2>
        
        <div className='grid md:grid-cols-3 gap-5 justify-center '>
            {
                courses.map(course=><Course key={course._id}  course={course}></Course>)
            }
        </div>
        </div>
    );
};

export default CoursesSec;