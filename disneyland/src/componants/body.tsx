import Card from '../componants/Cards';
import Card2 from '../componants/Cards2';
import imag1 from '../assets/hd15961_2027jun06jun06_world_30th-anniversary-key-visual-shine-logo_16-9_tcm1861-231624$w~960$p~1$f~jpg.jpg';
import imag2 from '../assets/hd16242_2050dec31_world_avengers-campus-key-visual_16-9_tcm1861-236755$w~960$p~1$f~jpg.jpg';
import imag3 from '../assets/n015567c_2027sep30_world_hotel-new-york-the-art-of-marvel-exterior_16-9_tcm1861-256421$w~960$p~1$f~jpg.jpg';
import img4 from '../assets/imgScROL1.png';
import img5 from '../assets/imgScROL2.png';
import img6 from '../assets/imgScROL3.png';
import img7 from '../assets/imgScROL4.png';
import img8 from '../assets/walt1.png';
import img9 from '../assets/walt2.png';
import img10 from '../assets/walt3.png';

function body() {
    return (
      <div>
            
            <div className=" bg-slate-900 text-slate-100 h-fit py-20 flex flex-col justify-center">
              <div className="  flex flex-col justify-center text-center mb-20 ">
                <p className=" text-3xl max-sm:text-base font-medium ">Let The Magic Shine at Disneyland Paris</p>
                <p className=" py-6 font-thin max-sm:w-96 max-sm:text-xs">Disneyland Paris is an entertainment resort in Chessy,<br></br> France, east of Paris.It encompasses two theme parks,<br></br> resort hotels, Nature Resorts, a shopping, dining, <br></br>and entertainment complex, and a golf course.</p>
                </div>


              <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:ml-0 ml-20  mb-20 ">
            <div className=" py-3 gap-9 flex flex-col justify-center w-96 text-center"><Card src={imag1} title='Disneyland Paris 30th Anniversary' contant='The Disneyland Paris 30th Anniversary celebrations will be more magic and epic than ever as we come to the end of this once-in-a-lifetime celebration... Enjoy until 30 September 2023!' button='Discover the celebration'/></div>
            <div className=" py-3 gap-9 flex flex-col justify-center w-96 text-center"><Card src={imag2} title='Become part of the MARVEL Universe' contant='Attention recruits! Prepare to assemble for Marvel Avengers Campus in Walt Disney Studios Park. Discover epic attractions, experiences and your favourite Marvel Super Heroes!' button='Hero up'/></div>
          <div className=" py-3 gap-6 flex flex-col justify-center w-96 text-center"><Card src={imag3} title='Make the magic last around the clock!​' contant='Discover the benefits of being at Disneyland Paris! With a Disney Hotel+Ticket package, immerse yourself in the magic just a short walk or shuttle ride away, greet Disney Characters.​​' button= 'Book a hotel + tiket '/></div>
                </div>



            <div className="  flex flex-col justify-center text-center mt-10 max-sm:mt-0 mb-10 ">
            <p className=" text-3xl font-medium max-sm:text-base">The Disneyland Paris experience</p>
            <p className=" py-6 font-thin max-sm:w-96 max-sm:text-xs">Escape to the heart of the Disney, Pixar, MARVEL and Star <br></br>Wars universes that you love so much. Disneyland Paris is<br></br> full of activities for all ages and all tastes!</p>
            </div>


          <div className=" flex flex-row max-sm:flex-col justify-center mt-5 max-sm:mb-5 max-sm:ml-24 mb-10 gap-x-8 gap-y-4">
          <div className="max-sm:w-44 w-96 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <img src={img4} />
          </div>
          <div className="max-sm:w-44 w-96 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <img src={img5} />
          </div>
          </div>

          <div className=" flex flex-row max-sm:flex-col justify-center gap-x-8 gap-y-4  max-sm:ml-24 mb-20">
          <div className="max-sm:w-44 w-96 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <img src={img6} />
          </div>
          <div className="max-sm:w-44 w-96 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <img src={img7} />
          </div>
          </div>

          <div className="  flex flex-col justify-center text-center mt-20  max-sm:mt-14 ">
            <p className=" text-3xl font-medium max-sm:text-base">Our Disneyland Parks</p>
            <p className=" py-6 font-thin max-sm:w-72 max-sm:text-xs max-sm:ml-12">Discover our two Parks: Disneyland Park, Walt Disney Studios Park and the shops, bars, restaurants and cinema at Disney Village.</p>
            </div>


          <div className=" mb-2 max-sm:mb-0">
        <div className="  py-3 gap-9 mt-20 max-sm:flex-col flex flex-row justify-evenly  text-center"><Card2 src={img8} title='Walt Disney Studios Park' contant='Walt Disney Studios Park is the second of two theme parks built at Disneyland Paris in Marne-la-Vallée, France.' /></div>
            </div>

            <div className="  mb-2 max-sm:mb-0">
        <div className="  py-3 gap-9 mt-20 max-sm:flex-col flex flex-row justify-evenly  text-center"><Card2  src={img9} title='Disney Village'  contant='Disney Village is a shopping, dining, and entertainment complex in Disneyland Paris, located in the town of Marne-la-Vallée, France.'  /></div>
            </div>

            <div className="  mb-5 max-sm:mb-0">
       <div className="   py-3 gap-9 mt-20 max-sm:flex-col flex flex-row justify-evenly  text-center"><Card2 src={img10} title='Disneyland Park' contant='Disneyland Park, originally Euro Disneyland Park, is a theme park found at Disneyland Paris in Marne-la-Vallée, France. ' /></div>
            </div>

        </div>


      </div>
    )
  }
  export default body