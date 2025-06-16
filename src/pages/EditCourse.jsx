import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router';

const EditCourse = () => {
    const loadedPost = useLoaderData();
console.log(loadedPost)
    const { _id, title, description, duration, instructor,email,imageUrl } = loadedPost
    const { user } = UseAuth()
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
        const form = e.target
        const formData = new FormData(form)
        const updatePost = Object.fromEntries(formData.entries())

  axios.put(`http://localhost:3000/courses-find/${_id}`, updatePost)

            .then(res => {
                console.log(res)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Post Is Updated Success fully",
                        showConfirmButton: false,
                        timer: 3500
                    });
                    // navigate('')
                }
                else {
                    Swal.fire({
                        title: `No changes were made.`,
                        icon: "info"
                    });
                }
            })
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white px-4">
            <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Add New Course</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className='flex gap-2 '>

                        <div className='flex-1'>
                            <label className=" text-sm font-medium text-gray-700">Course Title</label>
                            <input
                                type="text"
                                name='title'
                                defaultValue={title}
                                placeholder="Enter course title"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="email" className=" text-sm font-medium text-gray-700">Email</label>
                            <input type="email" defaultValue={email} name="email" id="email" placeholder="Email" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                    </div>

                    <div className='flex md:flex-row gap-2 flex-col items-center '>
                        <div className='flex-1'>
                            <label className="block text-sm font-medium text-gray-700">Duration (in hours)</label>
                            <input
                                type="number"
                                name="duration"
                                defaultValue={duration}
                                placeholder="e.g. 20"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>

                        <div className='flex-1'>
                            <label className=" text-sm font-medium text-gray-700">Instructor Name</label>
                            <input
                                type="text"
                                name="instructor"
                                defaultValue={instructor}
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>
                    </div>

                    <div className=''>
                        <label className=" text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="url"
                            name="imageUrl"
                            defaultValue={imageUrl}
                            placeholder="https://example.com/image.jpg"
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>




                    <div>
                        <label className="block text-sm font-medium text-gray-700">Short Description</label>
                        <textarea
                            placeholder="Enter a short description"
                            name="description"
                            defaultValue={description}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            rows={3}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        Add Course
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditCourse;