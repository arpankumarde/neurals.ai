import React from 'react'

const Mapspace = ({ mapSrc }) => {
    return (
        <div className="w-full">
            <iframe
                src={mapSrc}
                title='Map'
                referrerPolicy="no-referrer-when-downgrade"
                className='w-full h-[80.9vh] rounded-xl dark:hue-rotate-180 dark:invert-90'
                aria-hidden="false" tabIndex="0"
            />
        </div>
    )
}

export default Mapspace