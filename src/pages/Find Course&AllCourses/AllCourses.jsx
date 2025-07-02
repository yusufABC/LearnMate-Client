import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import AllCoursesLoad from './AllCoursesLoad';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('default'); // 'asc' | 'desc' | 'default'

  const fetchCourses = () => {
    setLoading(true);
    axios
      .get('https://assignment-11-server-sigma-one.vercel.app/courses-all')
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSortChange = (order) => {
    setSortOrder(order);
    if (order === 'asc') {
      setCourses((prev) =>
        [...prev].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      );
    } else if (order === 'desc') {
      setCourses((prev) =>
        [...prev].sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      );
    } else {
      fetchCourses(); // Reset to default from server
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex gap-2">
          <span className="loading loading-ring loading-xl"></span>
          <span className="loading loading-ring loading-xl"></span>
          <span className="loading loading-ring loading-xl"></span>
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto px-4">
      <h2 className="text-4xl font-bold text-blue-500 text-center my-8">
        All Available Courses
      </h2>

      {/* Sorting Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => handleSortChange('asc')}
          className={`px-4 py-2 rounded text-white ${
            sortOrder === 'asc'
              ? 'bg-green-700'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          Price: Low to High
        </button>
        <button
          onClick={() => handleSortChange('desc')}
          className={`px-4 py-2 rounded text-white ${
            sortOrder === 'desc'
              ? 'bg-red-700'
              : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          Price: High to Low
        </button>
        <button
          onClick={() => handleSortChange('default')}
          className={`px-4 py-2 rounded text-white ${
            sortOrder === 'default'
              ? 'bg-gray-700'
              : 'bg-gray-500 hover:bg-gray-600'
          }`}
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Course</th>
              <th className="px-4 py-2 text-center">duration</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<tr><td colSpan="5">Loading...</td></tr>}>
              {courses.map((course, index) => (
                <AllCoursesLoad key={course._id || index} course={course} index={index} />
              ))}
            </Suspense>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCourses;
