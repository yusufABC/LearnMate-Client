import React from 'react';
import { Link } from 'react-router'; // Use 'react-router-dom' for Link or NavLink

const AllCoursesLoad = ({ course, index }) => {
  const { _id, title, duration, imageUrl } = course;

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-4 py-3 text-center">{index + 1}</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={imageUrl} alt={title} className="w-16 h-12 object-cover rounded" />
          <span>{title}</span>
        </div>
      </td>
      <td className="px-4 py-3 text-center">{duration} hr</td>
      <td className="px-4 py-3 text-center">⭐ 4.8</td>
      <td className="px-4 py-3 text-center">
        <Link to={`/courseDetails/${_id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">
            Show Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllCoursesLoad;
