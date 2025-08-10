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
import ManageCourse from '../pages/Manage Courses/ManageCourse';
import MyEnrolledCourses from '../pages/MyEnrolledCourses';
import NotFound from '../pages/NotFound';
import AllCourses from '../pages/Find Course&AllCourses/AllCourses';
import FindCourse from '../pages/Find Course&AllCourses/FindCourse';
import DashboardLayout from '../Layout/DashboardLayout';
import Statistics from '../pages/Dashboard/Common/Statistics';
import Profile from '../pages/Dashboard/Common/Profile';

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
        path:'allCourses',
        Component:AllCourses

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

            {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
  


    ],

 

 
  },

  {
    path:'dashboard',
    element:<PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children:[
      {
        index:true,
             element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),

        
      },

          {
        path: 'addCourse',
        element: <PrivateRoute>
          <AddCourse></AddCourse>
        </PrivateRoute>
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
          {
        path:'findCourse',
        Component:FindCourse

      },

                  {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

    ]

  }
]);


