import React from 'react'

const Navbar = () => {
  return (
    <header className='h-10 sm:h-12 flex justify-center sm:justify-normal mx-2 mt-2 text-lg select-none'>
      <a href='/' className='flex gap-3 items-center'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg"
          alt="maps-logo"
          className='h-10'
        />
        <span className='font-semibold'>Indian Maps</span>
      </a>
    </header>
  )
}

export default Navbar