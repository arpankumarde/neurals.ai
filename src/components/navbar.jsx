import React from 'react'

const Navbar = () => {
  return (
    <header className='h-12 flex items-center mx-2 mt-2 text-lg gap-3 select-none'>
      <a href='/'>
        <img
          src="https://ik.imagekit.io/fhe9c5aen/png-transparent-google-maps-hd-logo-thumbnail-removebg-preview_Bd44O9MMHy.png"
          alt="maps-logo"
          className='h-10'
        />
      </a>
      <span className='font-semibold'>Indian Maps</span>
    </header>
  )
}

export default Navbar