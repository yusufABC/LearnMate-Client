import React, { Suspense, useEffect, useState } from 'react';
import Banner from './Banner';
import axios from 'axios';
import Students from './StudentReviewsec/Students';
import HowItWorks from './HowItWorks';
import PopularCardsSec from './PopularCardsSec';
import CoursesSec from './Latest Course Section/CoursesSec';
import AnimatedHeading from './Reusable animations/AnimatedHeading';
import AnimatedWrapper from './Reusable animations/AnimatedWrapper';



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
                setLoading2(false)
            }
            )

    }, [])

    if(loading || loading2 ){
        return <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-2">
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    </div>
    }
    return (
        <>
            
                  <Banner className=' w-full'></Banner>
            <div className='my-10  max-w-11/12 mx-auto'>
            <AnimatedHeading className="text-5xl font-bold text-center my-15 ">Our Latest Courses Explore Now !</AnimatedHeading>
            <AnimatedWrapper>

                <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
                    <CoursesSec key={courses._id} courses={courses}></CoursesSec>
                </Suspense>
            </AnimatedWrapper>
                
            </div>

               <div>
      <AnimatedHeading className="text-5xl font-bold text-center my-15 ">🔥Popular Courses</AnimatedHeading>
      <AnimatedWrapper>

     <PopularCardsSec></PopularCardsSec>
      </AnimatedWrapper>
    </div>


            <div className='mt-10'>
      <AnimatedHeading className="text-5xl font-bold text-center my-15 ">What Our Students Say</AnimatedHeading>
<AnimatedWrapper>

                <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
                    <Students students={students}></Students>
                </Suspense>
</AnimatedWrapper>

            </div>

            <div>
                  <AnimatedHeading  className="text-5xl font-bold text-center my-15 ">How LearnMate Works</AnimatedHeading>
               
                <HowItWorks></HowItWorks>
            </div>
        </>
    );
};

export default Home;