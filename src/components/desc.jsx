import React from 'react'
import { IoOpenOutline } from 'react-icons/io5'

const Desc = ({ placeName, placeData }) => {
    let data = placeData[0];
    console.log(data);
    try {
        var thumbnail = data.thumbnail.source;
        var image = data.originalimage.source;
    } catch (error) {
        console.error(error);
    }
    return (
        <div style={{ '--image-url': `url(${thumbnail})` }} className="w-full rounded-xl p-2 h-[80.9vh] bg-cover bg-no-repeat">
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col text-center items-center'>
                    {thumbnail ? <img src={image} alt={placeName} className=' rounded-lg pointer-events-none max-h-[40vh] transition-all ease-linear' draggable='false' loading='lazy' /> : ''}
                    <span>{placeName},<br />{data.description}</span>
                </div>
                {/* <div className='hidden sm:flex flex-col'>
                    <span>Latitude: {data.coordinates.lat}</span>
                    <span>Longitude: {data.coordinates.lon}</span>
                </div> */}
            </div>
            <div className='overflow-y-auto scrollbar-hide text-center items-center gap-1 flex flex-col'>
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

export default Desc