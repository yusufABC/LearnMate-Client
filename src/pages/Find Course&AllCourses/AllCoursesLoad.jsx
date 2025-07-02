import React from 'react';
import { NavLink } from 'react-router'; // Fixed import

const AllCoursesLoad = ({ course }) => {
  const { _id, title, duration, imageUrl } = course;

    return (
    <div className="grid grid-cols-1 bg-white rounded-xl shadow-md p-4 gap-4 md:flex md:items-center md:justify-between hover:shadow-lg transition">
      {/* Image */}
      <div className="flex-shrink-0">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md md:w-40 md:h-28" />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-1 mt-4 md:mt-0 md:ml-6">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm">⏱ {duration} hr</p>
        <p className="text-gray-600 text-sm">⭐ 4.8 Rating</p>
      </div>

      {/* Action Button */}
      <div className="mt-4 md:mt-0">
        <NavLink to={`/courseDetails/${_id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
            Show Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AllCoursesLoad;
