
interface Card {
  src:string;
  title: string;
  contant:string;
  button:string;
}
function Cards(props:Card) {
  return (
    <div>
      <div className="">
      <img src={props.src} />
      <p>{props.title}</p>
      <p>{props.contant}</p>
      <p><button className="">{props.button}</button></p>
      </div>
    </div>
  )
}
export default Cards

