import React from 'react'

const Mapspace = ({ mapSrc }) => {
    return (
        <div className="max-w-full sm:w-full mx-2 sm:mx-0 sm:my-2 rounded-xl flex"> {/* bg-[#e5e3df] */}
            <div className="w-full">
                <iframe
                    src={mapSrc}
                    title='Map'
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full h-[89.9vh] rounded-xl dark:hue-rotate-180 dark:invert-90'
                    aria-hidden="false" tabIndex="0"
                />
            </div>
        </div>
    )
}

export default Mapspace