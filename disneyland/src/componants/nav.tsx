import logo from '../assets/pngimg.com - disneyland_PNG9.png';

function nav() {
  return (
    <div>
      <div className='bg-slate-900 '>
      <div className=" bg-slate-900  max-w-screen-xl mx-20 py-3 gap-9 flex justify-center">
      
      <img className='w-32 ' src={logo} />

            <ul className=" bg-slate-900 text-slate-100 my-2 flex flex-row gap-7 ">
                <li ><button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">OUR TWO PARKS</button></li>
                <li ><button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">PLACES TO STAY</button></li>
                <li ><button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">BOOK NOW</button></li>
                <li ><button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">MAGIC KEY</button></li>
                <li ><button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">BEFOR YOU ARRIVE</button></li>
            </ul>
        </div>
     </div>
    </div>
  )
}
export default nav