import React, { Suspense,  } from 'react';
import ManageCoursesList from './ManageCoursesList';
import { myCoursePromise } from '../../Api/myCoursesApi';
import UseAuth from '../../Hooks/UseAuth';

const ManageCourse = () => {
    const {user}=UseAuth()
    return (
        <div>
          <Suspense fallback={<p>Loading...</p>}>
    <ManageCoursesList myCoursePromise={myCoursePromise(user.email,user.accessToken)} />
</Suspense>
        </div>
    );
};

export default ManageCourse;