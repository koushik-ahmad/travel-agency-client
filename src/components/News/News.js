import React from 'react';
import './News.css';
import { Link, useLoaderData } from 'react-router-dom';
import Places from './Places';

const News = () => {
    const AllPlace = useLoaderData();
    // console.log(AllPlace);

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
                                <Link rel="noopener noreferrer" to='/destination' className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">
                                    Booking
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='lg:w-3/5 md:w-full sm:w-full'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 sm:px-20">
                    <div className="grid gap-6 row-gap-5 pt-10 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2 ">

                        {/* left part  */}
                        {
                            AllPlace.map(place => <Places
                                key={place.id}
                                place={place}
                            ></Places>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;