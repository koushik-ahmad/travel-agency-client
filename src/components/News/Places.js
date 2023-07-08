import React from 'react';
import { Link } from 'react-router-dom';

const Places = ({ place }) => {
    const { id, img, name } = place;
    // console.log(place);

    return (
        <div>
            <Link to={`/booking/${id}`} aria-label="View Item">
                <div className="rounded-2xl border-2 border-yellow-300 relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-96"
                        src={img}
                        alt=""
                    />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-40">
                        <p className="text-xl uppercase font-thin tracking-wide text-white">
                            {name}
                        </p>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default Places;