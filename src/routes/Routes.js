import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Signup from '../components/Login/Signup';
import Login from '../components/Login/Login';
import Blog from '../components/Blog/Blog';
import Destination from '../components/Destination/Destination';
import News from '../components/News/News';
import Contact from '../components/Contact/Contact';
import ErrorPage from '../components/Others/ErrorPage';
import PrivateRoute from './PrivateRoute';
import Booking from '../components/Others/Booking';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <News></News>,
                loader: () => fetch(`https://travel-agency-server-ten.vercel.app/place/`)
            },
            {
                path: '/news',
                element: <News></News>,
                loader: () => fetch(`https://travel-agency-server-ten.vercel.app/place/`)
            },
            {
                path: '/destination',
                element: <PrivateRoute><Destination></Destination></PrivateRoute>,
            },
            {
                path: '/booking/:id',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ({ params }) => fetch(`https://travel-agency-server-ten.vercel.app/place/${params.id}`)
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    }
]);

export default router;