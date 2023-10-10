
interface Card {
    src:string;
    title: string;
    contant:string;
  }
  function Cards2(props:Card) {
    return (
        < >
      <div>
        <img className="w-96 max-sm:ml-[6rem] max-sm:w-44 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src={props.src} />
      </div>
      <div className="flex flex-col justify-center items-center">        
      <p className="max-sm:text-base transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 text-4xl  m-5 mx-10 w-80 ">{props.title}</p>
      <p className="max-sm:w-44 max-sm:text-[0.60rem] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-6 font-thin text-s w-80 mx-5 mb-2 ">{props.contant}</p>
      </div>
      </>
    )
  }
  export default Cards2
  
  