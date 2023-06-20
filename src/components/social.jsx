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
            <div className="overflow-auto sm:flex sm:flex-col text-center border-zinc-200 scrollbar-hide">
                {data ?
                    <div style={{ '--weather-url': `url('https://openweathermap.org/img/wn/${icon}@2x.png')` }} className={`hidden md:flex justify-center bg-no-repeat items-center font-semibold md:h-20 border-zinc-200 border-x border-t rounded-t-lg`}>
                        {/* bg-[image:var(--weather-url)] */}
                        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
                        <div className=''>
                            <span className='capitalize'>{description},&nbsp;</span>
                            <span>{data.main.temp}<sup>o</sup>C</span>
                            <span>&nbsp;at {majCity}</span>
                        </div>
                    </div>
                    : ''}
                <div id="socialID" className='overflow-y-visible sm:overflow-y-auto overflow-x-hidden rounded w-full scrollbar-hide'>
                    {posts.map((post, key) => (
                        <div key={key} className={`flex justify-center items-center overflow-auto w-full sm:w-fit -mb-[1rem]`}>
                            <InstagramEmbed url={post} width="100%" height="100%" />
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Social;