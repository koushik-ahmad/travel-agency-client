import React, { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext';


const Contact = () => {
    const { user } = useContext(UserContext);
    // const { displayName, email, photoURL, emailVerified, } = user;
    console.log(user);

    return (
        <section className="py-28 bg-gray-200 text-gray-900">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <div className="max-w-md p-8  sm:flex sm:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                            {user?.photoURL ?
                                <img src={user?.photoURL} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                                :
                                <img src="https://authentech-7739a.web.app/static/media/avatar.0c1efd82f0e777f5de91.jpeg" alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                            }
                        </div>
                        <div className="flex flex-col space-y-3">
                            <div>
                                {user?.displayName ?
                                    <h2 className="text-xl font-semibold">Name: {user?.displayName}</h2>
                                    :
                                    <h2 className="text-xl font-semibold">Name: Unavailable</h2>
                                }
                                <span className="text-sm text-gray-600">General manager</span>
                            </div>
                            <div className="space-y-1">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                        <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                    </svg>
                                    {user?.email ?
                                        <span className="text-gray-600">{user?.email}</span>
                                        :
                                        <span className="text-gray-600">Email: Unavailable</span>
                                    }
                                </span>
                                <span className="flex items-center space-x-2 gap-2">
                                    Email Status: {' '}

                                    {user?.emailVerified ?
                                        <span className="text-green-500 font-semibold">Verified</span>
                                        :
                                        <span className="text-gray-600">Not Verified</span>
                                    }

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-100" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-100" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" className="block w-full rounded-md focus:ring focus:ri focus:ri bg-gray-100"></textarea>
                    </label>
                    <button type="button" className="px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-violet-600 text-gray-50 focus:ri hover:ri">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;