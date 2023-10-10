
interface Card {
  src:string;
  title: string;
  contant:string;
  button:string;
}
function Cards(props:Card) {
  return (
    <div>
      <img className="w-96 max-sm:ml-[4.5rem] max-sm:w-60 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src={props.src} />
      <p className="text-2xl font-medium max-sm:text-base m-5 mx-10 w-65">{props.title}</p>
      <p className="py-6 font-thin max-sm:w-44 max-sm:ml-24 text-xs w-80 mx-9 mb-2 ">{props.contant}</p>
      <p><button className="border-2 border-white max-sm:w-44 max-sm:text-xs max-sm:mb-10 w-60 p-3 rounded-full shadow-lg shadow-indigo-500/50 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 duration-300">{props.button}</button></p>
 
    </div>
  )
}
export default Cards

