import React, { Suspense, useEffect, useState } from 'react';
import Banner from './Banner';
import axios from 'axios';
import CoursesSec from './CourseLoad/CoursesSec';
import Students from './StudentReviewsec/Students';

const Home = () => {
    const [courses, setCourses] = useState([])
    const [students, setStudents] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/courses')
            .then(res => setCourses(res.data)
            )

    }, [])


        useEffect(() => {
        axios.get('http://localhost:3000/students')
            .then(res => setStudents(res.data)
            )

    }, [])
    return (
        <>
            

            <div className='mt-10'>
                <Suspense fallback={<h2>Loading Hot Course</h2>}>
                    <CoursesSec key={courses._id} courses={courses}></CoursesSec>
                </Suspense>
                
            </div>


            <div className='mt-10'>
                <Suspense fallback={<h2>Loading Students Review</h2>}>
                    <Students students={students}></Students>
                </Suspense>

            </div>
        </>
    );
};

export default Home;