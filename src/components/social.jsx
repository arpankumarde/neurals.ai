import React from 'react';
import { posts } from '../data';
import { InstagramEmbed } from 'react-social-media-embed';

const Social = () => {
    return (
        <div id="socialID" className='overflow-y-auto overflow-x-hidden rounded-lg w-full scrollbar-hide'>
            {posts.map((post, key) => (
                <div key={key} className={`flex justify-center overflow-auto w-full sm:w-fit last:-pb-2`}>
                    <InstagramEmbed url={post} width="100%" height="100%" />
                </div>
            ))}
        </div>
    )
}

export default Social;