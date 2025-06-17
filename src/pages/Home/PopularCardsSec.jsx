import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const PopularCardsSec = () => {

    const [courses,setCourses]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/popular-courses')
        .then(res=>setCourses(res.data))
    },[])
    return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {courses.slice(0, 6).map(course => (
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={course.imageUrl}alt={course.title}className="w-full h-48 object-cover"/>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{course.title}</h2>
       

        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>⏱ {course.duration} hr</span>

          <div className="flex items-center gap-1">
          
            <span>4.8</span>
          </div>
        </div>

<NavLink to={`/courseDetails/${course._id}`}>
  <button className="mt-3 w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
    Show Details
  </button>
</NavLink>

      </div>
    </div>
      ))}
    </div>
  );
 
};

export default PopularCardsSec;