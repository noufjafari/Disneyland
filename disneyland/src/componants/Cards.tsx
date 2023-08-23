
interface Card {
  src:string;
  title: string;
  contant:string;
  button:string;
}
function Cards(props:Card) {
  return (
    <div>
      <img className="w-96 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src={props.src} />
      <p className="text-2xl font-medium m-5 mx-10 w-65">{props.title}</p>
      <p className="py-6 font-thin text-xs w-80 mx-9 mb-2 ">{props.contant}</p>
      <p><button className="border-2 border-white w-60 p-3 rounded-full shadow-lg shadow-indigo-500/50 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 duration-300">{props.button}</button></p>
 
    </div>
  )
}
export default Cards

