import React from 'react';
import { NavLink } from 'react-router';

const Course = ({course}) => {
    const {_id,title,duration,imageUrl}=course
    return (
 <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={imageUrl}alt={title}className="w-full h-48 object-cover"/>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
       

        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>⏱ {duration} hr</span>

          <div className="flex items-center gap-1">
          
            <span>4.8</span>
          </div>
        </div>

<NavLink to={`/courseDetails/${_id}`}>
  <button className="mt-3 w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
    Show Details
  </button>
</NavLink>

      </div>
    </div>
  );
};



export default Course;