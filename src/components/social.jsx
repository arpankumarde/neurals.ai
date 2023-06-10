import React from 'react';
import { posts } from '../data';
import { InstagramEmbed } from 'react-social-media-embed';

const Social = () => {
    return (
        <aside className='flex flex-col sm:h-[89.9vh] sm:max-w-full sm:w-[25%] m-2 sm:mr-0 sm:px-2 sm:pl-2 sm:border-l-[1px] sm:border-zinc-300'>
            <div className="overflow-auto sm:flex text-center border-zinc-200 scrollbar-hide">
                <div id="socialID" className='overflow-y-auto overflow-x-hidden rounded w-full scrollbar-hide'>
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