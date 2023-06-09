import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoOpenOutline } from 'react-icons/io5';

const Widget = ({ visible, placeName, placeData }) => {
    const [status, setStatus] = useState(visible);
    let data = placeData[0];
    try {
        var thumbnail = data.thumbnail.source;
    } catch (error) {
        console.error(error);
    }

    return (
        <div className={`${status ? 'fixed visible' : 'hidden'} flex flex-col sm:flex-row gap-2 text-sm z-40 w-fit sm:max-w-full sm:w-[35%] max-h-[60vh] transition-all ease-in-out bg-[#ffffffb4] backdrop-blur-xl shadow-2xl drop-shadow-2xl p-2 bottom-2 right-2 left-2 sm:left-auto rounded-xl select-none`}>
            {/* <button className='w-fit h-fit rounded-full float-right ' onClick={() => setStatus(!status)}>
                <AiFillCloseCircle className='bg-white text-red-600 hover:text-red-700 transition-all ease-in-out text-2xl rounded-full z-50' />
            </button> */}
            <div className='flex flex-col justify-between flex-1'>
                <div className='flex flex-col text-center items-center'>
                    {thumbnail ? <img src={thumbnail} alt={placeName} className='rounded-lg pointer-events-none max-h-[50vh] transition-all ease-linear' draggable='false' loading='lazy' /> : ''}
                    <span>{placeName},<br />{data.description}</span>
                </div>
                {/* <div className='hidden sm:flex flex-col'>
                    <span>Latitude: {data.coordinates.lat}</span>
                    <span>Longitude: {data.coordinates.lon}</span>
                </div> */}
            </div>
            <div className='overflow-y-auto scrollbar-hide text-center items-center gap-1 flex flex-col max-w-sm flex-1'>
                <article className='text-justify select-text'>
                    {data.extract}
                </article>
                <a href={data.content_urls.desktop.page} className='text-sky-800 transition-all hover:text-sky-900 pl-2 pr-1 max-w-fit py-1 rounded-lg inline-flex items-center gap-1' target='_blank' referrerPolicy='no-referrer'>
                    Read More
                    <IoOpenOutline className='' />
                </a>
            </div>
        </div>
    )
}

export default Widget