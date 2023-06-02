import React from 'react'

const Searchbar = () => {
  const changeURL = (code) => {
    console.log(code);
  }
  const places = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.216896607!2d88.26495028971651!3d22.535564937385992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1685605447241!5m2!1sen!2sus",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896701.9007529835!2d76.48341326109504!3d28.607521774510452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1685613190375!5m2!1sen!2sus",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292461742!2d72.7163707397183!3d19.082502007163477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1685608969567!5m2!1sen!2sus",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.23106923234!2d79.87933693948655!3d13.047985941436249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1685609040193!5m2!1sen!2sus",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492134983!2d77.3012646607384!3d12.954459535201714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1685609092820!5m2!1sen!2sus"
  ];
  const placeName = ['Kolkata', 'Delhi', 'Mumbai', 'Chennai', 'Bengaluru'];

  function sortList() {
    console.log("here");
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
    }
    // console.log(document.querySelector(".listBtn"));
  }
  return (
    <div className='bg-pink-200 w-[25%] m-2'>
      <div className="placeFrame w-full">
        <div id="searchbar" className="mb-1">
          <input id="search" type="text" placeholder="Search..." className='border p-3 border-black rounded-full h-10 w-full text-lg' onKeyUp={sortList()} />
        </div>
        <div id='btnList'>
          <button onClick={changeURL(1)} className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg'>
            <span className="material-icons-outlined text-base">
              north_east
            </span>
            Delhi
          </button>
          <button onClick={changeURL(0)} className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg'>
            <span className="material-icons-outlined text-base">
              north_east
            </span>
            Kolkata
          </button>
          <button onClick={changeURL(3)} className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg'>
            <span className="material-icons-outlined text-base">
              north_east
            </span>
            Chennai
          </button>
          <button onClick={changeURL(2)} className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg'>
            <span className="material-icons-outlined text-base">
              north_east
            </span>
            Mumbai
          </button>
          <button onClick={changeURL(4)} className='listBtn hover:bg-zinc-200 hover:shadow-lg active:bg-zinc-300 w-full lg:text-left py-3 px-4 rounded-lg my-1 text-lg'>
            <span className="material-icons-outlined text-base">
              north_east
            </span>
            Bengaluru
          </button>
          <hr className="mt-2" />
        </div>
      </div>
      <div className="text-center mt-2">
        Maintained by
        <a href="https://linkedin.com/in/arpan-kumar-de/" className="text-blue-700 font-semibold">
          Arpan
        </a>
      </div>
    </div>
  )
}

export default Searchbar