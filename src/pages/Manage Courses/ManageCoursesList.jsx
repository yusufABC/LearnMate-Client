import React, { use, useState } from 'react';
import { NotebookPen, UserX } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { useNavigate } from 'react-router';

const ManageCoursesList = ({ myCoursePromise }) => {
  const initialCourses = use(myCoursePromise);
  const [courses, setCourses] = useState(initialCourses);
const navigate=useNavigate()
  const handleDelete = (course) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://assignment-11-server-sigma-one.vercel.app/courses-find/${course._id}`)
          .then(res => {
            if (res.data.deletedCount) {
              setCourses(prev => prev.filter(item => item._id !== course._id));
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your course has been deleted.",
                icon: "success"
              });
            }
          })
          .catch(err => {
            console.error(err);
            Swal.fire("Error", "Something went wrong!", "error");
          });
      }
    });
  };

  return (
    <div>
      <h2 className='my-10 text-4xl'>You have added Courses :{courses.length}</h2>
      <table className='my-10 min-w-full table-auto border border-gray-200'>
        <thead>
          <tr>
            <th className="p-4 border border-blue-200">Title</th>
            <th className="p-4 border border-blue-200">Description</th>
            <th className="p-4 border border-blue-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="text-center">
              <td className="p-5 border border-blue-200">{course.title}</td>
              <td className="p-5 border border-blue-200">{course.description}</td>
              <td className="p-5 border border-blue-200 flex justify-center gap-3">
                <button
                  className="text-blue-500 hover:text-gray-600 px-3 py-1 rounded"
                  onClick={() => navigate(`/editCourse/${course._id}`)}
                >
                  <NotebookPen />
                </button>
                <button
                  onClick={() => handleDelete(course)}
                  className="text-red-500 hover:text-gray-600 px-3 py-1 rounded"
                >
                  <UserX />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCoursesList;
