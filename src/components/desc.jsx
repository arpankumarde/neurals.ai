import React from 'react';
import { IoOpenOutline, IoAirplaneSharp, IoLocationSharp } from 'react-icons/io5';
import { FaBus } from 'react-icons/fa';

const Desc = ({ majCity, minCity, placeData }) => {
    let data = placeData[0];
    console.log(data);
    try {
        var image = data.originalimage.source;
    } catch (error) {
        console.error(error);
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function getDate(n = 0) {
        const d = new Date();
        d.setDate(d.getDate() + n);
        return `${monthNames[d.getMonth() + 1]} ${d.getDate()}, ${d.getFullYear()}`;
    }

    return (
        <div className="flex flex-col sm:h-[81.9vh] sm:flex-row gap-2">
            <div className="sm:w-1/2 rounded-lg sm:h-[81.9vh] bg-cover bg-no-repeat overflow-y-auto scrollbar-hide">
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col text-center items-center mb-2'>
                        {image ? <img src={image} alt={majCity} className='rounded-lg pointer-events-none max-h-[40vh] transition-all ease-linear' draggable='false' loading='lazy' /> : ''}
                        <span className='text-sm'>{majCity}, <br className='hidden sm:block' />{data.description}</span>
                    </div>
                    {/* <div className='hidden sm:flex flex-col'>
                    <span>Latitude: {data.coordinates.lat}</span>
                    <span>Longitude: {data.coordinates.lon}</span>
                </div> */}
                </div>
                <div className='text-center items-center flex flex-col'>
                    <article className='text-justify select-text selection:bg-blue-100 selection:text-blue-800' dangerouslySetInnerHTML={{ __html: data.extract_html }}>
                    </article>
                    <a href={data.content_urls.desktop.page} className='text-blue-600 transition-all hover:text-blue-700 font-medium hover:bg-gray-100 pl-3 pr-2 max-w-fit py-1 rounded-lg inline-flex items-center gap-1' target='_blank' referrerPolicy='no-referrer'>
                        Read More
                        <IoOpenOutline aria-hidden="true" />
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-4 sm:w-1/2 rounded-lg p-4 pl-6 overflow-y-auto scrollbar-hide border-t sm:border-none">
                <h2 className='text-lg font-medium text-center'>
                    Itinerary
                    <span className="bg-blue-100 text-blue-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Suggested</span>
                </h2>
                <ol className="relative border-l border-gray-400 dark:border-gray-600">
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <IoAirplaneSharp aria-hidden="true" className="text-blue-800 dark:text-blue-300 -rotate-45" fill="currentColor" />
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Reach {majCity}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Arrive on {getDate()}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sed debitis, optio aspernatur consequatur dolor error quisquam officia architecto ut non autem! Nihil possimus voluptate distinctio dicta?</p>
                        <div className='flex gap-2 flex-col sm:flex-row'>
                            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                <IoAirplaneSharp aria-hidden="true" className="w-4 h-4 mr-2 dark:text-blue-300 -rotate-45" fill="currentColor" />
                                Book Flights
                            </button>
                            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                <FaBus aria-hidden="true" className='w-4 h-4 mr-2 dark:text-blue-300' fill="currentColor" />
                                Book Buses
                            </button>
                        </div>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <IoLocationSharp aria-hidden="true" className="text-blue-800 dark:text-blue-300" fill='currentColor' />
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Day 1</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Plan for {getDate(1)}</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nisi provident quas sit tenetur ducimus, sed illo suscipit. Unde voluptas deleniti eos culpa natus at facilis, totam rerum delectus cumque!</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <IoLocationSharp aria-hidden="true" className="text-blue-800 dark:text-blue-300" fill='currentColor' />
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Day 2</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Plan for {getDate(2)}</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio non modi fugiat perspiciatis deserunt similique sunt? Illum, minus. At iste qui numquam enim quisquam nobis odit voluptatem praesentium beatae.</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <IoLocationSharp aria-hidden="true" className="text-blue-800 dark:text-blue-300" fill='currentColor' />
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Day 3</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Plan for {getDate(3)}</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio non modi fugiat perspiciatis deserunt similique sunt? Illum, minus. At iste qui numquam enim quisquam nobis odit voluptatem praesentium beatae.</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <IoAirplaneSharp aria-hidden="true" className="text-blue-800 dark:text-blue-300 -rotate-45" fill="currentColor" />
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Back to Home</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Depart on {getDate(4)}</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Checkout from hotel and travel towards home, your journey ends.</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Desc