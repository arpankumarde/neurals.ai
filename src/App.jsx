import React, { useState } from 'react'
import { places } from './api/places';

function App() {
  const [map, setMap] = useState("https://www.google.com/maps?q=India&output=embed");
  const [majCity, setMajCity] = useState('');

  function changeMapSrc(code) {
    let mapSrc = "https://www.google.com/maps?q=" + code + ",India&output=embed";
    setMap(mapSrc);
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

  return (
    <div className="flex w-full min-h-screen select-none">

      {/** SEARCHBAR */}
      <aside className='w-[25%] m-2 pr-2 flex flex-col justify-between border-r-[1px] border-zinc-200'>
        <div className="placeFrame w-full">
          <div id="searchbar" className="mb-2 flex items-center border-sky-500 hover:border-sky-600 border-2 rounded-full px-3 text-lg">
            <span class="material-icons-outlined text-lg">
              search
            </span>
            <input id="search" type="text" placeholder="Search..." className='outline-none ml-2 rounded-full h-10 w-full text-lg' onChange={sortList} />
          </div>
          <div id='btnList'>
            {bigPlaces.map(item => (
              <button key={item} onClick={() => setMajorURL(item)} type='button' className={`${(item == majCity) ? 'bg-zinc-300 hover:bg-zinc-300 shadow-lg' : ''} listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 active:shadow-lg w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg flex items-center gap-1`}>
                <span className="material-icons-outlined text-base text-sky-600">
                  north_east
                </span>
                {item}
              </button>
            ))}
            <div className='w-full text-center p-2 hidden' id="noFoundText">
              <span className=''>No suitable places found :(</span>
            </div>
            <hr className="mt-2" />
          </div>
        </div>
        <div className="text-center mt-2">
          Developed by
          <a href="https://linkedin.com/in/arpan-kumar-de/" className="text-sky-700 font-semibold">
            &nbsp;Arpan
          </a>
        </div>
      </aside>

      {/** MAPSPACE */}
      <div className="bg-[#e5e3df] w-full my-2 rounded-xl flex items-center">
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

      {/** SIDEBAR */}
      <aside className='h-[97.5vh] w-[25%] m-2 pl-2 border-l-[1px] border-zinc-300 flex flex-col gap-2'>
        <div className="flex h-[60%] flex-col overflow-y-scroll" id="minorBtnList">
          {(majCity != '') && (places[majCity].map(item2 => (
            <button key={item2} onClick={() => changeMapSrc(item2)} type='button' className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg flex items-center gap-1'>
              <span className="material-icons-outlined text-base text-sky-600">
                place
              </span>
              {item2}
            </button>)
          ))}
        </div>
        <div className="flex h-[40%] text-center border-t-[1px] border-zinc-200 w-full">
          <div className="flex justify-center w-full items-center">
            Instagram Section
          </div>
        </div>
      </aside>
    </div>

  )
}

export default App