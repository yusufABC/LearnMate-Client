import React, { Suspense,  } from 'react';
import ManageCoursesList from './ManageCoursesList';
import { myCoursePromise } from '../../Api/myCoursesApi';
import UseAuth from '../../Hooks/UseAuth';

const ManageCourse = () => {
    const {user}=UseAuth()
    return (
        <div className='h-screen '>
          <Suspense fallback={<p className='flex justify-center items-center min-h-screen text-4xl '>Loading...</p>}>
    <ManageCoursesList myCoursePromise={myCoursePromise(user.email,user.accessToken)} />
</Suspense>
        </div>
    );
};

export default ManageCourse;