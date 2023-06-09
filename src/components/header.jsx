import Typical from 'react-typical';
import { useState, useEffect } from 'react';
import { HiWifi } from 'react-icons/hi';
import { BiWifiOff } from 'react-icons/bi'

const Header = () => {
  // Online state
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  return (
    <header className='h-10 sm:h-[6.5vh] sm:max-h-12 flex justify-center sm:justify-between mx-2 mt-2 text-lg select-none'>
      <a href='/' className='flex gap-3 items-center uppercase'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg"
          alt="maps-logo"
          className='h-9'
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
      <div className='hidden sm:block justify-center font-semibold'>
        {isOnline ? (
          <button className='inline-flex items-center gap-2 bg-green-500 bg-opacity-80 hover:bg-opacity-90 text-green-950 rounded-full px-3 py-2'>
            <HiWifi className='min-h-full text-3xl ' />
            Connected
          </button>
        ) : (
          <button className='inline-flex items-center gap-2 bg-red-500 bg-opacity-80 hover:bg-opacity-90 text-red-950 rounded-full px-3 py-2'>
            <BiWifiOff className='min-h-full text-3xl ' />
            Disconnected
          </button>
        )}
      </div>
    </header>
  )
}

export default Header