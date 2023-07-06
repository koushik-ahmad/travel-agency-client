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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <News></News>
            },
            {
                path: '/news',
                element: <News></News>
            },
            {
                path: '/destination',
                element: <Destination></Destination>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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