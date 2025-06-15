import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import FindCourseLoad from './FindCourseLoad';

const FindCourse = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/courses-find')
            .then(res => setCourses(res.data)
            )

    }, [])

    return (
        <div className='grid grid-cols-3 gap-6'>
            <Suspense fallback={<h2>Loading Hot Course</h2>}>
            
                {
                    courses.map(course => (
                        <FindCourseLoad key={course._id} course={course} />
                    ))
                }
            </Suspense>

        </div>
    );
};

export default FindCourse;