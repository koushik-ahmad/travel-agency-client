import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center mt-40 mb-72'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full 
            animate-spin border-gray-50"></div>
        </div>
    );
};

export default LoadingSpinner;