import React, { useState } from 'react'
import { places } from './data';
import { Navbar, Social } from './components';
import axios from "axios";
import { FaLocationArrow } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';
import { TbLocationBroken } from 'react-icons/tb';


function App() {
  const [map, setMap] = useState("https://www.google.com/maps?&z=5&q=India&output=embed");
  const [majCity, setMajCity] = useState('');

  function getCoord(placeName) {
    let url = import.meta.env.VITE_COORD_API + encodeURI(placeName + ', India');
    let data;
    axios.get(url)
      .then((response) => {
        data = { "lat": response.data[0].lat, "lon": response.data[0].lon };
      }).finally((response) => {
        return (data)
      })
  };

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

  const bigPlaces = Object.keys(places); //List of Major Cities

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
    // console.log("its is", c);
    // console.log(li);
    if (c >= li.length) {
      document.getElementById("noFoundText").style.display = "block";
    }
    else {
      document.getElementById("noFoundText").style.display = "none";
    }
  }

  function sortList() {
    // console.log("inside sortList()");
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    // console.log(input);
    filter = input.value.toUpperCase();
    ul = document.getElementById("btnList");
    li = ul.getElementsByTagName("button");
    // console.log(ul);
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      // console.log(txtValue);
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
      countHiddenNodes(li);
    }
    // console.log(document.querySelector(".listBtn"));
  }

  // const { data = dataInfo, loading, error, refetch } = useFetch("https://noembed.com/embed?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  // console.log(data);

  return (
    <React.Fragment>
      <Navbar />

      <div className="flex sm:flex-row flex-col w-full select-none overflow-hidden gap-2 sm:gap-0">

        {/** SEARCHBAR */}
        <aside className='overflow-auto sm:w-[25%] w-full m-2 sm:pr-2 pr-0 flex flex-col justify-between sm:border-r-[1px] border-zinc-200'>
          <div className="placeFrame w-full flex sm:flex-col flex-row pb-3 sm:pb-0">
            <div id="searchbar" className="mr-2 sm:mr-0 sm:mb-2 flex items-center border-sky-500 hover:border-sky-600 border-2 rounded-full px-3 text-lg">
              <AiOutlineSearch />
              <input id="search" type="text" placeholder="Search..." className='w-24 bg-transparent sm:w-full outline-none ml-2 rounded-full h-10 text-lg' onChange={sortList} />
            </div>
            <div id='btnList' className='flex sm:flex-col flex-row sm:gap-0 gap-2'>
              {bigPlaces.map((item, key) => (
                <button key={key} onClick={() => setMajorURL(item)} type='button' className={`${(item == majCity) ? 'bg-zinc-300 hover:bg-zinc-300 shadow-lg' : ''} listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 active:shadow-lg w-full lg:text-left sm:py-3 py-2 px-4 rounded-lg my-1 text-lg flex items-center gap-1`}>
                  <FaLocationArrow className='text-sky-600 text-base' />
                  {item}
                </button>
              ))}
              <div className='sm:w-full min-w-max text-center p-2 hidden' id="noFoundText">
                <span className='text-base text-center'>No suitable places found <TbLocationBroken className='text-red-600 inline' /> </span>
              </div>
              <hr className="mt-2" />
            </div>
          </div>
          <div className="text-center mt-2 sm:block hidden">
            Developed by
            <a href="https://linkedin.com/in/arpan-kumar-de/" className="text-sky-700 font-semibold">
              &nbsp;Arpan
            </a>
          </div>
        </aside>

        {/** MAPSPACE */}
        <div className="bg-[#e5e3df] max-w-full sm:w-full mx-2 sm:my-2 rounded-xl flex items-center">
          <div className="w-full">
            <iframe
              src={map}
              title='Map'
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className='w-full h-[97.2vh] rounded-xl'
            />
          </div>
        </div>

        {/** RIGHT SIDEBAR */}
        <aside className='bg-red-20 sm:h-[97.5vh] max-w-full sm:w-[30%] m-2 sm:px-2 sm:pl-2 sm:border-l-[1px] sm:border-zinc-300 flex flex-col gap-2'>
          <div className="sm:flex sm:h-[40%] sm:flex-col sm:overflow-y-scroll" id="minorBtnList">
            {(majCity != '') && (places[majCity].map((item2, key) => (
              <>
                <button key={key} onClick={() => changeMapSrc(item2)} type='button' className='inline-flex overflow-auto sm:overflow-visible shadow-md sm:shadow-none listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-fit sm:w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg sm:flex items-center gap-1'>
                  <GoLocation className='text-sky-600 text-lg' />
                  {item2}
                </button>
              </>
            )
            ))}
          </div>
          <div className="overflow-auto sm:flex h-[60%] text-center border-zinc-200 scrollbar-hide">
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