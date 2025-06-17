import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddCourseForm = () => {
    const { user } = use(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
        const form = e.target
        const formData = new FormData(form)
        const allData = Object.fromEntries(formData.entries())

           axios.post('https://assignment-11-server-sigma-one.vercel.app/courses',allData)
                              
                                    .then(res => {
                                        console.log(res)
                                        if (res.data.insertedId) {
                                            Swal.fire({
                                                position: "top-end",
                                                icon: "success",
                                                title: "Your Post Is Created",
                                                showConfirmButton: false,
                                                timer: 3500
                                            });
                                                // navigate('')
                                        }
                                    })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white px-4">
            <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Add New Course</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className='flex flex-col md:flex-row gap-2 '>

                        <div className='flex-1'>
                            <label className=" text-sm font-medium text-gray-700">Course Title</label>
                            <input
                                type="text"
                                name='title'
                                placeholder="Enter course title"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="email" className=" text-sm font-medium text-gray-700">Email</label>
                            <input type="email" value={user.email} name="email" id="email" placeholder="Email" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-2 '>
                        <div className='flex-1'>
                            <label className="block text-sm font-medium text-gray-700">Duration (in hours)</label>
                            <input
                                type="number"
                                name="duration"
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
                                value={user.displayName}
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

export default AddCourseForm;
