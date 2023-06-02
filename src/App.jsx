import React, { useState, useEffect } from 'react'
import { places } from './api/places';

function App() {
  const [map, setMap] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21167573.757009193!2d78.03745447728565!3d23.66765408621442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1685703314199!5m2!1sen!2sus")
  const [majCity, setMajCity] = useState('');

  useEffect(() => {
    // places.Delhi.map(place=>console.log(place));
    // console.log()

    // console.log(molecules)
  }, []);
  function setMinorURL(code) {
    console.log(code);
  }

  const bigPlaces = Object.keys(places); //List of Major Cities
  function setMajorURL(code) {
    let index = bigPlaces.indexOf(code); //Finding index from Major city List using name
    // console.log(bigPlaces);
    setMap(bigCoord[index]); //setting iframe to new coordinates of 
    setMajCity(code);
  }



  //coordinates of Major Cities
  const bigCoord = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896701.9007529835!2d76.48341326109504!3d28.607521774510452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1685613190375!5m2!1sen!2sus",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292461742!2d72.7163707397183!3d19.082502007163477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1685608969567!5m2!1sen!2sus",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492134983!2d77.3012646607384!3d12.954459535201714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1685609092820!5m2!1sen!2sus",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.216896607!2d88.26495028971651!3d22.535564937385992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1685605447241!5m2!1sen!2sus",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.23106923234!2d79.87933693948655!3d13.047985941436249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1685609040193!5m2!1sen!2sus",
  ];

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
    <div className="flex w-full min-h-screen">

      {/** SEARCHBAR */}
      <aside className='w-[25%] m-2 pr-2 flex flex-col justify-between border-r-[1px] border-zinc-200'>
        <div className="placeFrame w-full">
          <div id="searchbar" className="mb-2">
            <input id="search" type="text" placeholder="Search..." className='border p-3 border-black rounded-full h-10 w-full text-lg' onChange={sortList} />
          </div>
          <div id='btnList'>
            {bigPlaces.map(item => (
              <button key={item} onClick={() => setMajorURL(item)} type='button' className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg flex items-center gap-1'>
                <span className="material-icons-outlined text-base">
                  north_east
                </span>
                {item}
              </button>
            ))}
            {/* <div>
              <button onClick={() => setMajorURL(2)} type='button' className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg flex items-center gap-1'>
                <span className="material-icons-outlined text-base">
                  north_east
                </span>
                Delhi
              </button>
              <button onClick={() => setMajorURL(0)} type='button' className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg flex items-center gap-1'>
                <span className="material-icons-outlined text-base">
                  north_east
                </span>
                Kolkata
              </button>
              <button onClick={() => setMajorURL(3)} type='button' className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg flex items-center gap-1'>
                <span className="material-icons-outlined text-base">
                  north_east
                </span>
                Chennai
              </button>
              <button onClick={() => setMajorURL(2)} type='button' className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg flex items-center gap-1'>
                <span className="material-icons-outlined text-base">
                  north_east
                </span>
                Mumbai
              </button>
              <button onClick={() => setMajorURL(4)} type='button' className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg flex items-center gap-1'>
                <span className="material-icons-outlined text-base">
                  north_east
                </span>
                Bengaluru
              </button>
            </div> */}
            <div className='w-full text-center p-2 hidden' id="noFoundText">
              <span className=''>No suitable places found :(</span>
            </div>
            <hr className="mt-2" />
          </div>
        </div>
        <div className="text-center mt-2">
          Maintained by
          <a href="https://linkedin.com/in/arpan-kumar-de/" className="text-blue-700 font-semibold">
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
      <aside className='bg-sky-400 h-[97.5vh] w-[25%] m-2 pl-2 border-l-[1px] border-zinc-300 flex flex-col'>
        <div className="flex bg-cyan-200 h-[60%] flex-col overflow-y-scroll" id="minorBtnList">
          {(majCity != '') && (places[majCity].map(item2 => (
            <button key={item2} onClick={() => setMinorURL(item2)} type='button' className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg flex items-center gap-1'>
              <span className="material-icons-outlined text-base">
                north_east
              </span>
              {item2}
            </button>)
          ))}
        </div>
        <div className="flex bg-pink-300 h-[40%]">
          kwj
        </div>
      </aside>
    </div>

  )
}

export default App
