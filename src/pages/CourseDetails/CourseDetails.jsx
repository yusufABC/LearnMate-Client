import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router'
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';

const CourseDetails = () => {
    const course = useLoaderData();
    const { user } = UseAuth();
    const [isEnrolled, setIsEnrolled] = useState(false);
    const { _id, title, description, imageUrl, instructor, duration } = course;


    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/courses-enroll?courseId=${_id}&email=${user.email}`)
                .then(res => {
                    if (res.data?.enrolled) setIsEnrolled(true);
                })
                .catch(err => console.log(err));
        }
    }, [_id, user?.email]);


    const handleEnroll = () => {
        const enrollData = {
            courseId: _id,
            email: user.email,
             title:title,
            description:description
        };

        axios.post('http://localhost:3000/courses-enroll', enrollData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Enrollment Successful!',
                        timer: 2000,
                        showConfirmButton: false
                    });
                    setIsEnrolled(true);
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: err.response?.data?.message || 'Enrollment failed'
                });
            });
    };

    if (!course) {
        return <p className="text-center mt-10">Loading course details...</p>;
    }


    return (
        <div className='flex flex-col md:flex-row gap-3 p-6 bg-gray-100 my-10 rounded-2xl'>
            <div className="max-w-md mx-auto">
                <img src={imageUrl} alt={title} className="rounded-lg w-full h-60 object-cover shadow" />
            </div>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-gray-600">Instructor: {instructor}</p>
                <p className="text-gray-500">Duration: {duration} hours</p>
                <p>{description}</p>
                {!user?.email ? (
                    <>
                        <button
                            disabled
                            className="bg-gray-400 cursor-not-allowed text-white px-4 py-2 rounded"
                        >
                            Enroll Now
                        </button>
                        <p className="text-sm text-red-500 mt-2">Please login to enroll in this course.</p>
                    </>
                ) : isEnrolled ? (
                    <button className="bg-gray-400 text-white px-4 py-2 rounded" disabled>
                        Already Enrolled
                    </button>
                ) : (
                    <button
                        onClick={handleEnroll}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Enroll Now
                    </button>
                )}
            </div>
        </div>
    );
};

export default CourseDetails;
