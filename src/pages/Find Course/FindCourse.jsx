import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import FindCourseLoad from './FindCourseLoad';

const FindCourse = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        axios.get('https://assignment-11-server-sigma-one.vercel.app/courses')
            .then(res => setCourses(res.data)
            )

    }, [])

    return (
        <>
       
            <h2 className='text-5xl text-blue-400 text-center my-15'>Find Your Course</h2>
        <div className='grid grid-cols-3 gap-6'>
            <Suspense fallback={<h2>Loading Hot Course</h2>}>
            
                {
                    courses.map(course => (
                        <FindCourseLoad key={course._id} course={course} />
                    ))
                }
            </Suspense>

        </div>
         </>
    );
};

export default FindCourse;