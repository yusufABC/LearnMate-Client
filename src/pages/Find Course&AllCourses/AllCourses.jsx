import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import AllCoursesLoad from './AllCoursesLoad';

const AllCourses = () => {
      const [courses, setCourses] = useState([])
      const [loading,setLoading]=useState(true)
    useEffect(() => {
        axios.get('https://assignment-11-server-sigma-one.vercel.app/courses-all')
            .then(res =>{ setCourses(res.data)
                 setLoading(false)
            }
            
            )

    }, [])
 if(loading ){
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
             
                  <h2 className='text-5xl text-blue-400 text-center my-15'>All Available Courses</h2>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 my-15 md:my-10'>
                  <Suspense fallback={<h2>Loading Hot Course</h2>}>
                  
                      {
                          courses.map((course,index) => (
                              <AllCoursesLoad key={index} index={index} course={course} />
                          ))
                      }
                  </Suspense>
      
              </div>
               </>
    );
};

export default AllCourses;