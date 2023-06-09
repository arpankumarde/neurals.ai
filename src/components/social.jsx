import React from 'react';
import { posts } from '../data';
import { InstagramEmbed } from 'react-social-media-embed';

const Social = () => {
    return (
        <aside className='sm:h-[89.9vh] max-w-full sm:w-[25%] m-2 sm:mr-0 sm:px-2 sm:pl-2 sm:border-l-[1px] sm:border-zinc-300 flex flex-col gap-2'>
            <div className="overflow-auto sm:flex text-center border-zinc-200 scrollbar-hide">
                <div id="socialID" className='overflow-y-auto overflow-x-hidden rounded-lg w-full scrollbar-hide'>
                    {posts.map((post, key) => (
                        <div key={key} className={`flex justify-center overflow-auto w-full sm:w-fit last:-pb-2`}>
                            <InstagramEmbed url={post} width="100%" height="100%" />
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Social;