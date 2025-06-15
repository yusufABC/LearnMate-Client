import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router'

const CourseDetails = () => {
    const course = useLoaderData(); 
    // const [course, setCourse] = useState(null);
    
    // useEffect(() => {
     
    //         axios.get(`http://localhost:3000/tutorials/${courseId}`)
    //             .then(res => setCourse(res.data))
    //             .catch(err => console.error("Error fetching course:", err));
     
    // }, []);

    if (!course) {
        return <p className="text-center mt-10">Loading course details...</p>;
    }

    const { _id,title, description, imageUrl, instructor, duration } = course;

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
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Enroll Now</button>
            </div>
        </div>
    );
};

export default CourseDetails;
