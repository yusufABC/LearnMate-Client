import React, { Suspense, useEffect, useState } from 'react';
import Banner from './Banner';
import axios from 'axios';
import CoursesSec from './CourseLoad/CoursesSec';
import Students from './StudentReviewsec/Students';
import HowItWorks from './HowItWorks';
import PopularCardsSec from './PopularCardsSec';
import { div } from 'framer-motion/client';



const Home = () => {
    const [loading,setLoading]=useState(true)
    const [loading2,setLoading2]=useState(true)
    const [courses, setCourses] = useState([])
    const [students, setStudents] = useState([])
    useEffect(() => {
        axios.get('https://assignment-11-server-sigma-one.vercel.app/courses')
            .then(res => {setCourses(res.data ) 
                setLoading(false)
                console.log('setLoading')
            }
            )

    }, [])


        useEffect(() => {
        axios.get('https://assignment-11-server-sigma-one.vercel.app/students')
            .then(res =>{ setStudents(res.data)
                setLoading2
            }
            )

    }, [])

    if(loading || loading2 ){
        return <div>loading</div>
    }
    return (
        <>
            
                  <Banner className=' w-full'></Banner>
            <div className='mt-10  max-w-11/12 mx-auto'>
                <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
                    <CoursesSec key={courses._id} courses={courses}></CoursesSec>
                </Suspense>
                
            </div>

               <div>
      <h1 className="text-5xl font-bold text-center my-15">🔥Popular Courses</h1>
     <PopularCardsSec></PopularCardsSec>
    </div>


            <div className='mt-10'>
                <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
                    <Students students={students}></Students>
                </Suspense>

            </div>

            <div>
                <HowItWorks></HowItWorks>
            </div>
        </>
    );
};

export default Home;