import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';
import Swal from 'sweetalert2';

const MyEnrolledCourses = () => {
    const { user } = UseAuth();
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios
                .get(`https://assignment-11-server-sigma-one.vercel.app/my-enrollments?email=${user.email}`, {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    }
                })
                .then((res) => setEnrollments(res.data))
                .catch((err) => console.error(err));
        }
    }, [user?.email, user.accessToken]);

    const handleRemove = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`https://assignment-11-server-sigma-one.vercel.app/courses-enroll/${id}`)
                        .then((res) => {
                            if (res.data.deletedCount) {
                                setEnrollments((prev) => prev.filter((item) => item._id !== id));
                                swalWithBootstrapButtons.fire(
                                    'Deleted!',
                                    'Your enrollment has been deleted.',
                                    'success'
                                );
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            Swal.fire('Error', 'Something went wrong!', 'error');
                        });
                }
            });
    };

    return (
        <table
            className="table-auto text-center w-full"
            style={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}
        >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Course Title</th>
                    <th>Course ID</th>
                    <th>Description</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {enrollments.map((item, index) => (
                    <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.title || 'Title Missing'}</td>
                        <td>{item.courseId}</td>
                        <td>{item.description}</td>
                        <td>
                            <button
                                onClick={() => handleRemove(item._id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Remove Enrollment
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MyEnrolledCourses;
