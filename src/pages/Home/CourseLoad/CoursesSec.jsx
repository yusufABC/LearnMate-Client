import React from 'react';
import Course from './Course';

const CoursesSec = ({courses}) => {
    return (

        <div className='bg-gray-50 '>
        <h2 className='text-5xl text-center my-10'>Our Latest Courses Explore Now !</h2>
        
        <div className='grid grid-cols-3 gap-5 mx-auto '>
            {
                courses.map(course=><Course key={course._id}  course={course}></Course>)
            }
        </div>
        </div>
    );
};

export default CoursesSec;