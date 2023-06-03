import React from 'react';
import { posts } from '../data';
import { useFetch } from '../hooks';

const Social = () => {
    function getSocial(url) {
        // console.log(url);
        const { data = dataInfo, loading, error, refetch } = useFetch(url);
        return data;
    }
    let data;
    return (
        <div id="socialID" className='bg-red-300 w-full rounded-lg mr-3'>
            {posts.map(post => {
                data = getSocial(post)
                let elem = decodeURIComponent(data.html)
                document.getElementById("socialID").innerHTML = elem;
            })}
        </div>
    )
}

export default Social;