import React from 'react';

const Course = ({course}) => {
    const {title,instructor,duration,imageUrl}=course
    return (
 <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={imageUrl}alt={title}className="w-full h-48 object-cover"/>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">Instructor: {instructor}</p>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>⏱ {duration} hr</span>

          <div className="flex items-center gap-1">
            {/* <Star size={16} className="text-yellow-400 fill-yellow-300" /> */}
            <span>4.8</span>
          </div>
        </div>

        <button className="mt-3 w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
         Show Details
        </button>
      </div>
    </div>
  );
};



export default Course;