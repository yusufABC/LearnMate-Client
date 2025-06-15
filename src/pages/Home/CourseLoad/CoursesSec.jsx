import React from 'react';
import Course from './Course';

const CoursesSec = ({courses}) => {
    return (

        <>
        <h2 className='text-5xl text-center my-10'>Our Latest Courses Explore Now !</h2>
        
        <div className='grid grid-cols-3'>
            {
                courses.map(course=><Course key={course._id}  course={course}></Course>)
            }
        </div>
        </>
    );
};

export default CoursesSec;