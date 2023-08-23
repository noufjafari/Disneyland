import Card from '../componants/Cards';
import imag1 from '../assets/hd15961_2027jun06jun06_world_30th-anniversary-key-visual-shine-logo_16-9_tcm1861-231624$w~960$p~1$f~jpg.jpg';
import imag2 from '../assets/hd16242_2050dec31_world_avengers-campus-key-visual_16-9_tcm1861-236755$w~960$p~1$f~jpg.jpg';
import imag3 from '../assets/n015567c_2027sep30_world_hotel-new-york-the-art-of-marvel-exterior_16-9_tcm1861-256421$w~960$p~1$f~jpg.jpg';
import img4 from '../assets/imgScROL1.jpg';
import img5 from '../assets/imgScROL2.jpg';
import img6 from '../assets/';
import img7 from '../assets/';
import img8 from '../assets/imgScROL5.png';
import img9 from '../assets/';


function body() {
    return (
      <div>
        <div className=" bg-slate-900 text-slate-100 h-fit py-20 flex flex-col justify-center">
          <div className="  flex flex-col justify-center text-center mb-20 ">
            <p className=" text-3xl font-medium ">Let The Magic Shine at Disneyland Paris</p>
            <p className=" py-6 font-thin  ">Disneyland Paris is an entertainment resort in Chessy,<br></br> France, east of Paris.It encompasses two theme parks,<br></br> resort hotels, Nature Resorts, a shopping, dining, <br></br>and entertainment complex, and a golf course.</p>
            </div>
          <div className="grid grid-cols-3 ml-20  mb-20 ">
        <div className=" py-3 gap-9 flex flex-col justify-center w-96 text-center"><Card src={imag1} title='Disneyland Paris 30th Anniversary' contant='The Disneyland Paris 30th Anniversary celebrations will be more magic and epic than ever as we come to the end of this once-in-a-lifetime celebration... Enjoy until 30 September 2023!' button='Discover the celebration'/></div>
        <div className=" py-3 gap-9 flex flex-col justify-center w-96 text-center"><Card src={imag2} title='Become part of the MARVEL Universe' contant='Attention recruits! Prepare to assemble for Marvel Avengers Campus in Walt Disney Studios Park. Discover epic attractions, experiences and your favourite Marvel Super Heroes!' button='Hero up'/></div>
       <div className=" py-3 gap-6 flex flex-col justify-center w-96 text-center"><Card src={imag3} title='Make the magic last around the clock!​' contant='Discover the benefits of being at Disneyland Paris! With a Disney Hotel+Ticket package, immerse yourself in the magic just a short walk or shuttle ride away, greet Disney Characters.​​' button='Book a hotel + tiket '/></div>
            </div>

            <div className="  flex flex-col justify-center text-center mt-20 mb-20 ">
            <p className=" text-3xl font-medium ">The Disneyland Paris experience</p>
            <p className=" py-6 font-thin  ">Escape to the heart of the Disney, Pixar, MARVEL and Star <br></br>Wars universes that you love so much. Disneyland Paris is<br></br> full of activities for all ages and all tastes!</p>
            </div>

          <div className=" flex flex-row justify-center gap-5">
          <div className="w-96 ">
            <img src={img4} />
          </div>
          <div className="w-96">
            <img src={img5} />
          </div>
          <div className="w-96 h-60">
            <img src={img6} />
          </div>
          </div>

          <div className=" flex flex-row justify-center gap-5">
          <div className="w-96">
            <img src={img7} />
          </div>
          <div className="w-96">
            <img src={img8} />
          </div>
          <div className="w-96">
            <img src={img9} />
          </div>
          </div>
        </div>
      </div>
    )
  }
  export default body