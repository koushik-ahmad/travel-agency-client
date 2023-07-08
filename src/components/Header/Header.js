import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthContext';
import { Navbar, Typography, Button, IconButton, Collapse, } from "@material-tailwind/react";
import { toast } from 'react-hot-toast';



const Header = () => {
    const { user, logOut } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        logOut()
            .then(() => {
                toast.success('log out');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }


    // toggle nav 
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
            <Typography
                as="li"
                color="blue-gray"
                className="font-normal"
            >
                <Link to='/news' className="flex items-center">
                    News
                </Link>
            </Typography>
            <Typography
                as="li"
                color="blue-gray"
                className=" font-normal"
            >
                <Link to='/destination' className="flex items-center">
                    Destination
                </Link>
            </Typography>
            <Typography
                as="li"
                color="blue-gray"
                className=" font-normal"
            >
                <Link to='/blog' className="flex items-center">
                    Blog
                </Link>
            </Typography>
            <Typography
                as="li"
                color="blue-gray"
                className=" font-normal"
            >
                <Link to='/contact' className="flex items-center">
                    Contact
                </Link>
            </Typography>
        </ul>
    );


    return (
        <>
            <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-gray-50 text-gray-700">
                <div className="flex items-center justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-2xl mx-auto">

                    <div className="flex items-center gap-2 ">
                        <Link>
                            <img className="w-22 h-12" src="https://i.ibb.co/WHBbznX/logo.png" alt="" />
                        </Link>
                        <h2 className="lg:flex hidden font-bold uppercase">A Trusted Agency</h2>
                    </div>

                    <div>
                        <fieldset className="w-full space-y-1 text-gray-800">
                            <label htmlFor="Search" className="hidden">Search</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input type="search" name="Search" placeholder="Search your destination..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-violet-600" />
                            </div>
                        </fieldset>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">{navList}</div>

                        {user && user.uid ?

                            <Link>
                                <Button
                                    onClick={handleSubmit}
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block text-gray-100 bg-indigo-500"
                                >
                                    Log Out
                                </Button>
                            </Link>
                            :
                            <>
                                <Link to='/login'>
                                    <Button
                                        variant="gradient"
                                        size="sm"
                                        className="hidden lg:inline-block text-gray-100 bg-indigo-500"
                                    >
                                        Log in
                                    </Button>
                                </Link>
                                <Link to='/signup'>
                                    <Button
                                        variant="gradient"
                                        size="sm"
                                        className="hidden lg:inline-block text-gray-100 bg-indigo-500"
                                    >
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        }

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}

                    {user && user.uid ?
                        <Button onClick={handleSubmit} variant="gradient" size="sm" fullWidth className="mb-2 text-gray-100 bg-indigo-500">
                            <span>Log out</span>
                        </Button>
                        :
                        <>
                            <Link to='/login'>
                                <Button variant="gradient" size="sm" fullWidth className="mb-2 text-gray-100 bg-indigo-500">
                                    <span>Log In</span>
                                </Button>
                            </Link>
                            <Link to='/signup'>
                                <Button variant="gradient" size="sm" fullWidth className="mb-2 text-gray-100 bg-indigo-500">
                                    <span>Sign up</span>
                                </Button>
                            </Link>
                        </>
                    }

                </Collapse>
            </Navbar>
        </>
    );
};

export default Header;