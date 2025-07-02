import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const PopularCardsSec = () => {

    const [courses,setCourses]=useState([])

    useEffect(()=>{
        axios.get('https://assignment-11-server-sigma-one.vercel.app/popular-courses')
        .then(res=>setCourses(res.data))
    },[])
    return (
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-4 gap-6">
      {courses.slice(0, 8).map(course => (
        <div
          key={course._id}
          className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
        >
          <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />

          {/* Card Body with Flex */}
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">{course.title}</h2>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>⏱ {course.duration} hr</span>
                <span>⭐ 4.8</span>
              </div>
            </div>

            {/* Button aligned to bottom */}
            <div className="mt-4">
              <NavLink to={`/courseDetails/${course._id}`}>
                <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
                  Show Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
 
};

export default PopularCardsSec;