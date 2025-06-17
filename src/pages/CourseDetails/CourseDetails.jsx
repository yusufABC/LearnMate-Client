import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router'
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';

const CourseDetails = () => {
    const course = useLoaderData();
    const { user } = UseAuth();
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [totalEnrollments, setTotalEnrollments] = useState(0);
    const { _id, title, description, imageUrl, instructor, duration } = course;


    useEffect(() => {
        if (!course || !user?.email) {


            axios.get(`https://assignment-11-server-sigma-one.vercel.app/courses-enroll?courseId=${_id}&email=${user.email}`)
                .then(res => {
                    if (res.data?.enrolled) setIsEnrolled(true);
                })
                .catch(err => console.log(err));
        }


        axios
            .get(`https://assignment-11-server-sigma-one.vercel.app/my-enrollments?email=${user.email}`)
            .then((res) => {
                setTotalEnrollments(res.data.length);
            })
            .catch((err) => {
                console.log('Error fetching enrollments count:', err);
            });



    }, [_id, user?.email]);


    const disableEnroll = !isEnrolled && totalEnrollments >= 3;

    const handleToggleEnroll = () => {
        const enrollData = {
            courseId: _id,
            email: user.email,
            title,
            description
        };

        axios.post('https://assignment-11-server-sigma-one.vercel.app/courses-toggle-enroll', enrollData)
            .then(res => {
                if (res.data.action === 'added') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Enrolled successfully!',
                        timer: 2000,
                        showConfirmButton: false
                    });
                    setIsEnrolled(true);
                    setTotalEnrollments((prev) => prev + 1);

                } else if (res.data.action === 'removed') {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Unenrolled from the course Successfull.',
                        timer: 2000,
                        showConfirmButton: false
                    });
                    setIsEnrolled(false);
                    setTotalEnrollments((prev) => prev - 1);
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: err.response?.data?.message || 'Action failed'
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
                        <button disabled className="bg-gray-400 cursor-not-allowed text-white px-4 py-2 rounded">
                            Enroll Now
                        </button>
                        <p className="text-sm text-red-500 mt-2">Please login to enroll in this course.</p>
                    </>
                ) : (
                    <>
                        <button
                            onClick={handleToggleEnroll}
                            disabled={disableEnroll}
                            className={`px-4 py-2 rounded text-white ${isEnrolled ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} ${disableEnroll ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isEnrolled ? 'Unenroll' : 'Enroll Now'}
                        </button>
                        {disableEnroll && !isEnrolled && (
                            <p className="text-sm text-red-500 mt-2">You have reached the maximum of 3 enrolled courses.</p>
                        )}
                    </>
                )}


            </div>
        </div>
    );
};

export default CourseDetails;