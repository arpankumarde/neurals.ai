import React, { useState } from 'react'
import { places } from './data';
import { Navbar, Social } from './components';
import axios from "axios";
import { FaLocationArrow, FaCity, FaMountain, FaUmbrellaBeach, FaTree, FaMonument } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { TbLocationBroken } from 'react-icons/tb';
import { MdTempleHindu } from 'react-icons/md';
import { GiWaterfall } from 'react-icons/gi'


function App() {
  const [map, setMap] = useState("https://www.google.com/maps?&z=5&q=India&output=embed");
  const [majCity, setMajCity] = useState('');

  function changeMapSrc(code) {
    let url = import.meta.env.VITE_COORD_API + encodeURI(code + ', India');
    let data;
    axios.get(url)
      .then((response) => {
        data = { "lat": response.data[0].lat, "lon": response.data[0].lon };
      }).finally((response) => {
        let mapSrc = encodeURI(`https://www.google.com/maps?z=7&q=${data.lat},${data.lon}` + `&output=embed&ll=${data.lat},${data.lon}`);
        setMap(mapSrc);
      })
  }

  function setMajorURL(code) {
    changeMapSrc(code) //setting iframe to new coordinates
    setMajCity(code); //setting Major City to update Minor City List
  }

  function countHiddenNodes(li) {
    let c = 0;
    for (let i = 0; i < li.length; i++) {
      if (li[i].style.display == "none") {
        c++;
      }
    }
    if (c >= li.length) {
      document.getElementById("noFoundText").style.display = "block";
    }
    else {
      document.getElementById("noFoundText").style.display = "none";
    }
  }

  function sortList() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("btnList");
    li = ul.getElementsByTagName("button");
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
      countHiddenNodes(li);
    }
  }

  const typeToClass = ([placeType, category]) => {
    if (placeType == 'city' && category == 'parent') return <FaLocationArrow className='text-red-600' />
    else if (placeType == 'city') return <FaCity />
    else if (placeType == 'hill') return <FaMountain className='text-amber-900' />
    else if (placeType == 'beach') return <FaUmbrellaBeach className='text-blue-500' />
    else if (placeType == 'jungle') return <FaTree className='text-green-700' />
    else if (placeType == 'pilgrimage') return <MdTempleHindu className='text-zinc-600' />
    else if (placeType == 'monument') return <FaMonument className='text-red-600' />
    else if (placeType == 'falls') return <GiWaterfall className='text-sky-600' />
  }

  return (
    <React.Fragment>
      <Navbar />

      <div className="flex sm:flex-row flex-col w-full select-none overflow-hidden gap-2 sm:gap-0">

        {/** SEARCHBAR */}
        <aside className='sm:h-[90vh] sm:w-[45%] w-full m-2 sm:pr-2 pr-0 flex flex-col sm:border-r-[1px] border-zinc-200'>
          <div id="searchbar" className="sticky mr-2 sm:mr-0 sm:mb-2 flex items-center border-sky-500 hover:border-sky-600 border-2 rounded-full px-3 text-lg">
            <AiOutlineSearch />
            <input id="search" type="text" placeholder="Search..." className='w-24 bg-transparent sm:w-full outline-none ml-2 rounded-full h-10 text-lg' onChange={sortList} />
          </div>
          <div className="placeFrame scrollbar-hide w-full flex flex-col justify-between pb-3 sm:pb-0 overflow-auto">
            <div id='btnList' className='flex gap-1 flex-col'>
              {places.map((item, key) => (
                <>
                  <button key={key} onClick={() => setMajorURL(item.name)} type='button' className={`${(item.name == majCity) ? 'bg-zinc-300 hover:bg-zinc-300 shadow-lg' : ''} inline-flex overflow-auto shadow-md listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 min-w-fit max-w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg items-center gap-2`}>
                    {typeToClass([item.type, item.category])}
                    <span>{item.name}</span>
                  </button>
                  {item.child.map((child, key2) => (
                    <button key={key2} onClick={() => setMajorURL(child.name)} type='button' className={`justify-between ${(child.name == majCity) ? 'bg-zinc-300 hover:bg-zinc-300 shadow-lg' : ''} ml-[10%] inline-flex overflow-auto listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 min-w-fit max-w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg items-center gap-2`}>
                      <p className='flex items-center gap-2'>
                        {typeToClass([child.type, item.child])}
                        <span>{child.name}</span>
                      </p>
                      <span className='text-sm inline-flex text-center gap-1'>
                        <span className='bg-violet-200 hover:bg-violet-300 rounded-md px-1 py-[0.15rem]'>{child.distance} km</span>
                        <span className='bg-yellow-200 hover:bg-yellow-300 rounded-md px-1 py-[0.15rem]'>{child.time} hr</span>
                      </span>
                    </button>
                  ))}
                </>
              ))}
              <div className='sm:w-full min-w-max text-center p-2 hidden' id="noFoundText">
                <span className='text-base text-center'>No suitable places found <TbLocationBroken className='text-red-600 inline' /> </span>
              </div>
              <hr className="mt-2" />
            </div>
            <div className="text-center mt-2 sm:block hidden">
              Developed by
              <a href="https://linkedin.com/in/arpan-kumar-de/" className="text-sky-700 font-semibold">
                &nbsp;Arpan
              </a>
            </div>
          </div>

        </aside>

        {/** MAPSPACE */}
        <div className="max-w-full sm:w-full sm:my-2 rounded-xl flex">{/* bg-[#e5e3df] */}
          <div className="w-full">
            <iframe
              src={map}
              title='Map'
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className='w-full h-[90vh] rounded-xl'
            />
          </div>
        </div>

        {/** RIGHT SIDEBAR */}
        <aside className='sm:h-[90vh] max-w-full sm:w-[30%] m-2 sm:mr-0 sm:px-2 sm:pl-2 sm:border-l-[1px] sm:border-zinc-300 flex flex-col gap-2'>
          <div className="overflow-auto sm:flex text-center border-zinc-200 scrollbar-hide">
            <Social />
          </div>
        </aside>
      </div>
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
        defer
      ></script>
    </React.Fragment>
  )
}

export default App