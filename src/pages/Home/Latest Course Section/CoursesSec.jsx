import React from 'react';
import Course from './Course';

const CoursesSec = ({courses}) => {
    return (

        <div className=' '>
    
        
        <div className='grid md:grid-cols-4 gap-5 justify-center '>
            {
                courses.map(course=><Course key={course._id}  course={course}></Course>)
            }
        </div>
        </div>
    );
};

export default CoursesSec;