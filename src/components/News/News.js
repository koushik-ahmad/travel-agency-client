import React from 'react';
import './News.css';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className='lg:flex px-5'>
            {/* Right part */}
            <div className='lg:w-2/5 md:w-full sm:w-full'>
                <section className=" text-gray-50">
                    <div className="container justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-serif font-bold sm:text-6xl uppercase">
                                Cox's Bazar
                            </h1>
                            <p className="mt-6 mb-8 text-md sm:mb-12">
                                Cox's Bazar is a city, fishing port, tourism centre and
                                district headquarters in southeastern Bangladesh. It is
                                famous mostly for its long natural sandy beach, and it ...
                            </p>
                            <div className="space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">
                                    Booking
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* left part  */}
            <div className='lg:w-3/5 md:w-full sm:w-full'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 sm:px-20">
                    <div className="grid gap-6 row-gap-5 pt-10 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2 ">
                        <Link href="/" aria-label="View Item">
                            <div className="rounded-2xl border-2 border-yellow-300 relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    className="object-cover w-full h-56 md:h-64 xl:h-96"
                                    src="https://i.ibb.co/YLcwXnH/Rectangle-1.png"
                                    alt=""
                                />
                                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-40">
                                    <p className="text-xl uppercase font-thin tracking-wide text-white">
                                        Cox's Bazar
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/" aria-label="View Item">
                            <div className="rounded-2xl border-2 border-yellow-300 relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    className="object-cover w-full h-56 md:h-64 xl:h-96"
                                    src="https://i.ibb.co/kXt86MK/Sreemongol.png"
                                    alt=""
                                />
                                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-40">
                                    <p className="text-xl uppercase font-thin tracking-wide text-white">
                                        Sreemangal
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/" aria-label="View Item">
                            <div className="rounded-2xl border-2 border-yellow-300 relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    className="object-cover w-full h-56 md:h-64 xl:h-96"
                                    src="https://i.ibb.co/JHRmThK/sundorbon.png"
                                    alt=""
                                />
                                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-40">
                                    <p className="text-xl uppercase font-thin tracking-wide text-white">
                                        Sundarbans
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;