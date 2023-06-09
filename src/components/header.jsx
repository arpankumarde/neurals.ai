import Typical from 'react-typical';

const Header = () => {
  return (
    <header className='h-10 sm:h-[6.5vh] sm:max-h-12 flex justify-center sm:justify-normal mx-2 mt-2 text-lg select-none'>
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
    </header>
  )
}

export default Header