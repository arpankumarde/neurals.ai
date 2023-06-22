import React from 'react';
import { posts } from '../data';
import { InstagramEmbed } from 'react-social-media-embed';

const Social = ({ weatherData, majCity }) => {

    let data = weatherData ? weatherData[0] : false;

    if (data) {
        var { description, icon } = data.weather[0];
    }

    return (
        <aside className='flex flex-col sm:h-[89.9vh] sm:max-w-full sm:w-[28%] mx-2 mt-2 sm:mr-0 sm:px-2 sm:pl-2 sm:border-l-[1px] sm:border-zinc-300'>
            <div className="overflow-auto gap-2 sm:flex sm:flex-col text-center border-zinc-200 scrollbar-hide">
                {data ?
                    <div className={`bg-gradient-to-r  from-zinc-300 to-zinc-100 backdrop-blur flex justify-center bg-no-repeat items-center font-semibold md:h-20 border-r-zinc-200 pr-2 border-r rounded-lg`}>
                        {/* style={{ '--weather-url': `url('https://openweathermap.org/img/wn/${icon}@2x.png')` }} 
                        bg-[image:var(--weather-url)] */}
                        <div className='h-full aspect-square pointer-events-none'>
                            <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt={description} className='h-full aspect-square' />
                            {/* <div className='bg-[image:var(--weather-url)] backdrop-blur-md bg-cover h-16 w-16' /> */}
                        </div>
                        <div className='h-full w-full flex justify-center items-center'>
                            <div>
                                <span className='capitalize'>{description},&nbsp;</span>
                                <span>{data.main.temp}<sup>o</sup>C at {majCity}</span>
                            </div>
                        </div>
                    </div>
                    : ''}
                <div id="socialID" className='overflow-y-visible sm:overflow-y-auto overflow-x-hidden rounded w-full scrollbar-hide'>
                    {posts.map((post, key) => (
                        <InstagramEmbed url={post} width="100%" key={key} linkText='Loading Feed' />
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Social;