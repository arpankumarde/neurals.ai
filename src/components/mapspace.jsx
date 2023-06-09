import React from 'react'

const Mapspace = ({ mapSrc }) => {
    return (
        <div className="max-w-full sm:w-full sm:my-2 rounded-xl flex">{/* bg-[#e5e3df] */}
            <div className="w-full">
                <iframe
                    src={mapSrc}
                    title='Map'
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full h-[89.9vh] rounded-xl'
                />
            </div>
        </div>
    )
}

export default Mapspace