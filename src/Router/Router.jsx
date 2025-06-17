import React from 'react';
import {
  createBrowserRouter,

} from "react-router";
import MainLayout from '../Layout/MainLayout';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import PrivateRoute from './PrivateRoute';
import AddCourse from '../pages/AddCourse';
import EditCourse from '../pages/EditCourse';
import CourseDetails from '../pages/CourseDetails/CourseDetails';
import Home from '../pages/Home/Home';
import FindCourse from '../pages/Find Course/FindCourse';
import ManageCourse from '../pages/Manage Courses/ManageCourse';
import MyEnrolledCourses from '../pages/MyEnrolledCourses';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([

  {
    errorElement:<NotFound></NotFound>,
    path: "/",
    Component: MainLayout,

    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'signup',
        Component: SignUp
      },
      {
        path: 'signIn',
        Component: SignIn
      },
      {
        path:'findCourse',
        Component:FindCourse

      },
 
      {
         path: 'courseDetails/:_id',
  Component: CourseDetails,
  loader: ({ params }) => fetch(`https://assignment-11-server-sigma-one.vercel.app/tutorials/${params._id}`)

      },

      {
        path: 'addCourse',
        element: <PrivateRoute>
          <AddCourse></AddCourse>
        </PrivateRoute>
      },
  
      {
        path: 'editCourse/:id',
        element: <PrivateRoute>
          <EditCourse></EditCourse>
          
        </PrivateRoute>,
          loader:({params})=>fetch(`https://assignment-11-server-sigma-one.vercel.app/courses-find/${params.id}`)
      },
      {
        path: 'manageCourse',
        element: <PrivateRoute>
         <ManageCourse></ManageCourse>
        </PrivateRoute>
      },
      {
        path: 'myEnrollment',
        element: <PrivateRoute>
         <MyEnrolledCourses></MyEnrolledCourses>
        </PrivateRoute>
      },


    ]
  },
]);


