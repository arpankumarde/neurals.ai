import React, { useState } from 'react'
import { places } from './data';
import { Header, Mapspace, Social } from './components';
import axios from "axios";
import { FaLocationArrow, FaCity, FaMountain, FaUmbrellaBeach, FaTree, FaMonument, FaHubspot } from 'react-icons/fa';
import { AiOutlineSearch, AiFillStar } from 'react-icons/ai';
import { TbLocationBroken } from 'react-icons/tb';
import { MdTempleHindu } from 'react-icons/md';
import { GiWaterfall } from 'react-icons/gi'
import { CgRedo } from 'react-icons/cg';
import { Tooltip } from 'react-tooltip';


function App() {
  const [mapGrid, setMapGrid] = useState("https://www.google.com/maps?&z=5&q=India&output=embed");
  const [majCity, setMajCity] = useState('');

  function changeMapSrc(code) {
    let url = import.meta.env.VITE_COORD_API + encodeURI(code + ', India');
    let data, mapSrc;
    axios.get(url)
      .then((response) => {
        data = { "lat": response.data[0].lat, "lon": response.data[0].lon };
      }).finally(() => {
        if (data) {
          mapSrc = encodeURI(`https://www.google.com/maps?z=7&q=${data.lat},${data.lon}` + `&output=embed&ll=${data.lat},${data.lon}`);
        } else {
          mapSrc = encodeURI(`https://www.google.com/maps?z=9&q=${code}` + `&output=embed&ll=${code}`);
        }
        setMapGrid(mapSrc);
      }).catch((error) => {
        console.error(error)
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
      txtValue = a.getAttribute('data-search') || a.textContent || a.innerText;
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
    else if (placeType == 'spot') return <FaHubspot className='text-green-700 -scale-x-100' />
    else if (placeType == 'hill') return <FaMountain className='text-amber-900' />
    else if (placeType == 'beach') return <FaUmbrellaBeach className='text-blue-500' />
    else if (placeType == 'jungle') return <FaTree className='text-green-700' />
    else if (placeType == 'pilgrimage') return <MdTempleHindu className='text-zinc-600' />
    else if (placeType == 'monument') return <FaMonument className='text-red-600' />
    else if (placeType == 'falls') return <GiWaterfall className='text-sky-600' />
    else return <FaCity className='text-slate-950' />
  }
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let monthIndex = (new Date().getMonth());
  let monthName = monthNames[monthIndex];

  return (
    <React.Fragment>
      <Header />

      <div className="flex sm:flex-row flex-col w-full select-none overflow-hidden">

        {/** SEARCHBAR */}
        <aside className='sm:h-[89.9vh] sm:w-[45%] m-2 sm:pr-2 pr-0 flex flex-col sm:border-r-[1px] border-zinc-200'>
          <div id="searchbar" className="sticky mb-2 flex items-center border-sky-500 focus-within:border-sky-600 border-2 rounded-full pl-3 pr-2 text-lg">
            <AiOutlineSearch />
            <input id="search" type="text" placeholder="Search for any place" className='w-full bg-transparent sm:w-full outline-none px-2 rounded-full h-11 text-lg' onChange={sortList} />
          </div>
          <div className="placeFrame scrollbar-hide w-full flex flex-col justify-between pb-3 sm:pb-0 overflow-auto">
            <div id='btnList' className='flex gap-1 flex-col'>
              {places.map((item, key) => (
                <>
                  <button key={key} onClick={() => setMajorURL(item.name)} data-search={item.name} type='button' className={`${(item.name == majCity) ? 'bg-zinc-300 hover:bg-zinc-300 shadow-lg' : ''} inline-flex overflow-auto shadow-md listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 min-w-fit max-w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg items-center gap-2`}>
                    {typeToClass([item.type, item.category])}
                    <span>{item.name}</span>
                  </button>
                  {item.child.map((child, key2) => (
                    <>
                      <button key={key2} onClick={() => setMajorURL(child.name)} data-search={`${item.name} ${child.name}`} type='button' className={`justify-between ${(child.best_time.includes(monthName)) ? '' : 'hidden'} ${(child.name == majCity) ? 'bg-zinc-300 hover:bg-zinc-300 shadow-lg' : ''} ml-[7.5%] inline-flex overflow-auto listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 min-w-fit max-w-full lg:text-left py-2 px-4 rounded-lg my-0 text-lg items-center gap-1`}>
                        <p className='flex items-center gap-2'>
                          {typeToClass([child.type, item.child])}
                          <span>{child.name}</span>
                        </p>
                        <span className='text-sm inline-flex text-center gap-3 items-center'>
                          <span data-tooltip-content='Best Season' data-tooltip-variant='light' data-tooltip-id='best' >{(child.best_time.includes(monthName)) ? <AiFillStar className='text-lg hover:animate-pulse' /> : ''}</span>
                          <div className='flex flex-col'>
                            <span className='bg-violet-200 rounded-t-md px-1 py-[0.15rem]'>{child.distance} km</span>
                            <span className='bg-yellow-200 rounded-b-md px-1 py-[0.15rem]'>{child.time} hrs</span>
                          </div>
                        </span>
                      </button>
                    </>
                  ))}
                  {item.child.map((child, key2) => (
                    <button key={key2} onClick={() => setMajorURL(child.name)} data-search={`${item.name} ${child.name}`} type='button' className={`justify-between ${(child.best_time.includes(monthName)) ? 'hidden' : ''} ${(child.name == majCity) ? 'bg-zinc-300 hover:bg-zinc-300 shadow-lg' : ''} ml-[7.5%] inline-flex overflow-auto listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 min-w-fit max-w-full lg:text-left py-2 px-4 rounded-lg my-0 text-lg items-center gap-1`}>
                      <p className='flex items-center gap-2'>
                        {typeToClass([child.type, item.child])}
                        <span>{child.name}</span>
                      </p>
                      <span className='text-sm inline-flex text-center gap-3 items-center'>
                        <div className='flex flex-col'>
                          <span className='bg-violet-200 rounded-t-md px-1 py-[0.15rem]'>{child.distance} km</span>
                          <span className='bg-yellow-200 rounded-b-md px-1 py-[0.15rem]'>{child.time} hrs</span>
                        </div>
                      </span>
                    </button>
                  ))}
                </>
              ))}
              <div className='text-base text-center sm:w-full min-w-max p-2 hidden' id="noFoundText">
                <span className=''>No suitable places found <TbLocationBroken className='text-red-600 inline' /></span><br />
                <span className='hover:bg-zinc-200 rounded-lg px-2 cursor-pointer inline-flex align-middle items-center gap-1 transition ease-in-out' onClick={() => { document.getElementById("search").value = ''; sortList() }} >Reset Search?<CgRedo className='text-red-600 inline text-lg -scale-x-100' /></span>
              </div>
              <hr className="mt-1" />
            </div>
            <div className="text-center mt-1 sm:block hidden ">
              Developed by&nbsp;
              <div className="inline-flex">
                <a href="https://linkedin.com/in/arpan-kumar-de/" target='_blank' referrerPolicy='no-referrer' className="text-sky-700 font-semibold inline-flex">
                  <span className='link-underline link-underline-black transition bg-[#eaff8a95] ease-in-out'>Arpan</span>
                </a>
              </div>
            </div>
          </div>
          <Tooltip id="best" place='bottom' style={{ backgroundColor: "#ffffff95", paddingTop: "0.2rem", paddingBottom: "0.2rem", paddingLeft: "0.7rem", paddingRight: "0.7rem", borderRadius: "99rem" }} />
        </aside>

        {/** MAPSPACE */}
        <Mapspace mapSrc={mapGrid} />

        {/** RIGHT SIDEBAR */}
        <Social />
      </div>
    </React.Fragment>
  )
}

export default App;