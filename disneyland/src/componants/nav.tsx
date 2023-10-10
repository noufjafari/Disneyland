import logo from '../assets/pngimg.com - disneyland_PNG9.png';

function nav() {
  return (
    <div>
      <div className='bg-slate-900 '>
      <div className=" bg-slate-900  max-w-screen-xl mx-20 py-3 max-sm:mx-10 max-sm:gap-3 gap-9 max-sm:flex-col flex justify-center">
      
      <img className='w-32 max-sm:w-3/12 max-sm:h-5 max-sm:mx-24' src={logo} />

            <ul className=" bg-slate-900 text-slate-100 my-2 gap-7 flex flex-row max-sm:text-[0.50rem] max-sm:gap-3 ">
                <li ><a href="https://disneyparks.disney.go.com/"><button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">OUR TWO PARKS</button></a></li>
                <li ><a href="https://disneyworld.disney.go.com/resorts/"><button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">PLACES TO STAY</button></a></li>
                <li ><a href="https://disneyworld.disney.go.com/"><button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">BOOK NOW</button></a></li>
                <li ><a href="https://disneyworld.disney.go.com/destinations/magic-kingdom/"><button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">MAGIC KINGDOM</button></a></li>
                <li ><a href="https://disneyworld.disney.go.com/things-to-do-orlando/"><button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">WHEN YOU ARRIVE</button></a></li>
            </ul>
        </div>
     </div>
    </div>
  )
}
export default nav