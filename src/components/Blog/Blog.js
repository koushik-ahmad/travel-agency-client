import React from 'react';

const Blog = () => {
  return (
    <div className='bg-white grid lg:grid-cols-2 md:grid-cols-0 sm:grid-cols-0'>
      {/* 1st page  */}
      <div className='pl-20'>

        <div className="flex flex-col max-w-3xl p-6 sm:p-10 bg-white text-gray-800">
          <p className=''><span>252 stays Apr 13-17 3 gusets</span></p>
          <h2 className="text-xl font-semibold ">Stay in Cox's Bazar</h2>

          <ul className="flex flex-col divide-y divide-gray-300 ">
            <li className="flex flex-col pt-5 sm:flex-row sm:justify-between">

              <div className="flex w-full space-x-2 sm:space-x-4">

                <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />

                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold sm:pr-8">
                        Light bright airy stylish apt & safe peaceful stay
                      </h3>
                      <div className="text-md text-gray-600">
                        <p>4 guests  2 bedrooms  2 beds  2 baths</p>
                        <p>Wif Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                      <img className='w-6 h-5' src="https://i.ibb.co/DkqnNtt/star-1.png" alt="" />
                      <span className='font-semibold text-lg'>4.9 (20) </span>
                    </button>
                    <button type="button" className="flex items-center px-2 py-1 space-x-1">
                      <div className='text-2xl font-bold'>$34/<span className='font-thin text-xl'>night</span></div>
                      <p className='text-2xl font-thin pl-4'> $167 total</p>
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex flex-col sm:flex-row sm:justify-between">

              <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold sm:pr-8">
                        Apartment in Lost Panorama
                      </h3>
                      <div className="text-md text-gray-600">
                        <p>4 guests  2 bedrooms  2 beds  2 baths</p>
                        <p>Wif Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                      <img className='w-6 h-5' src="https://i.ibb.co/DkqnNtt/star-1.png" alt="" />
                      <span className='font-semibold text-lg'>4.9 (10) </span>
                    </button>
                    <button type="button" className="flex items-center px-2 py-1 space-x-1">
                      <div className='text-2xl font-bold'>$54/<span className='font-thin text-xl'>night</span></div>
                      <p className='text-2xl font-thin pl-4'> $225 total</p>
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex flex-col sm:flex-row sm:justify-between">

              <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold sm:pr-8">
                        AR Lounge & Pool (r&r + b&b)
                      </h3>
                      <div className="text-md text-gray-600">
                        <p>4 guests  2 bedrooms  2 beds  2 baths</p>
                        <p>Wif Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                      <img className='w-6 h-5' src="https://i.ibb.co/DkqnNtt/star-1.png" alt="" />
                      <span className='font-semibold text-lg'>4.9 (25) </span>
                    </button>
                    <button type="button" className="flex items-center px-2 py-1 space-x-1">
                      <div className='text-2xl font-bold'>$44/<span className='font-thin text-xl'>night</span></div>
                      <p className='text-2xl font-thin pl-4'> $180 total</p>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>

      {/* second page  */}
      <div className='py-10 pl-12'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14857.354169331029!2d91.9706919468758!3d21.415934335309476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc96118ced5b5%3A0xfeac4d792191e35e!2sCox&#39;s%20Bazar%20Sea%20Beach!5e0!3m2!1sen!2sbd!4v1688752619670!5m2!1sen!2sbd"
          width="650"
          height="600"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">

        </iframe>
      </div>
    </div>
  );
};

export default Blog;