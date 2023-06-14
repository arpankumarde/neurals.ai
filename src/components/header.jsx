import Typical from 'react-typical';
import { useState, useEffect } from 'react';
import { HiWifi } from 'react-icons/hi';
import { BiWifiOff } from 'react-icons/bi'

const Header = ({ weatherData, majCity }) => {
  let data = weatherData ? weatherData[0] : false;

  if (data) {
    var { description } = data.weather[0];
  }

  return (
    <header className='h-10 sm:h-[6.5vh] sm:max-h-12 flex justify-center sm:justify-between mx-2 mt-2 text-lg select-none'>
      <a href='/' className='flex gap-3 items-center uppercase'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg"
          alt="maps-logo"
          className='h-9 pointer-events-none'
        />
        <span className='font-semibold'>MAPS OF
          <Typical
            steps={[
              ' India',
              2500,
              ' Heaven',
              2500,
            ]}
            wrapper="span"
            loop={Infinity}
          />
        </span>
      </a>
      <div className='hidden md:flex justify-center items-center font-semibold'>
        {data ?
          <div className='flex items-center'>
            <span className='capitalize'>{description},&nbsp;</span>
            <span>{data.main.temp}<sup>o</sup>C</span>
            <span>&nbsp;at {majCity}</span>
          </div>
          : ''}
      </div>
    </header>
  )
}

export default Header