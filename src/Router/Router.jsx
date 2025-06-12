import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import PrivateRoute from './PrivateRoute';
import AddCourse from '../pages/AddCourse';
import EditCourse from '../pages/EditCourse';
import ManageCourse from '../pages/ManageCourse';

export const router = createBrowserRouter([
  {
    // errorElement:<NotFound></NotFound>,
    path: "/",
    Component:MainLayout,

    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'signup',
            Component:SignUp
        },
        {
          path:'signIn',
          Component:SignIn
        },
        {
          path:'addCourse',
          element:<PrivateRoute>
            <AddCourse></AddCourse>
          </PrivateRoute>
        },
        {
          path:'editCourse',
          element:<PrivateRoute>
            <EditCourse></EditCourse>
          </PrivateRoute>
        },
        {
          path:'manageCourse',
          element:<PrivateRoute>
            <ManageCourse></ManageCourse>
          </PrivateRoute>
        },
    

    ]
  },
]);


