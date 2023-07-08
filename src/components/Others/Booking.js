import React from 'react';
import { DatePicker } from 'antd';
import { Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Link, useLoaderData } from 'react-router-dom';
dayjs.extend(customParseFormat);


const Booking = () => {
    const destinationData = useLoaderData();
    const { name, title, place } = destinationData;
    console.log(destinationData);
    const dateFormat = 'YYYY/MM/DD';

    return (
        <div>
            <div className='lg:flex px-5'>
                {/* Right part */}
                <div className='lg:w-1/2 md:w-full sm:w-full'>
                    <section className=" text-gray-50">
                        <div className="container justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-serif font-bold sm:text-6xl uppercase">
                                    {name}
                                </h1>
                                <p className="mt-6 mb-8 text-md sm:mb-12">
                                    {title}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* left part  */}
                <div className='lg:w-1/2 md:w-full sm:w-full'>
                    <div className="flex items-center justify-center text-center lg:pt-24 lg:pr-20 pb-10  text-gray-800">

                        <form noValidate="" action="" className="flex flex-col w-full max-w-lg p-6 rounded shadow-lg bg-white text-gray-800">
                            <label htmlFor="username" className="self-start text-sm font-semibold">Origin</label>
                            <input id="username" type="text" defaultValue="Dhaka" className="flex items-center font-bold h-12 px-4 mt-2 rounded focus:outline-none focus:ri bg-gray-100 text-gray-900 focus:border-violet-600 focus:ri" />
                            <label htmlFor="password" className="self-start mt-3 text-sm font-semibold">Destination</label>
                            <input id="password" type="text" defaultValue={place} className="flex items-center font-bold h-12 px-4 mt-2 rounded focus:outline-none focus:ri bg-gray-100 text-gray-900 focus:border-violet-600 focus:ri" />

                            <div className='flex mx-auto gap-20 pt-6 pb-10'>
                                <div className='border-2 rounded-lg '>
                                    <Space size={20}>
                                        <DatePicker defaultValue={dayjs('2022/10/12', dateFormat)} format={dateFormat} />
                                    </Space>
                                </div>
                                <div className='border-2 rounded-lg '>
                                    <Space size={20}>
                                        <DatePicker defaultValue={dayjs('2023/06/18', dateFormat)} format={dateFormat} />
                                    </Space>
                                </div>
                            </div>
                            <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">
                                Start Booking
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;