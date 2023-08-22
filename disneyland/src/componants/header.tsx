import videobg from '../assets/y2mate.com - Disney 100 Years of Wonder Intro 1080p HD_1080p (online-video-cutter.com).mp4';
import Nav from '../componants/nav';

function header() {

  return (
    <> 
<div className="">
<Nav/>
    <video className='w-screen opacity-75 ' src={videobg} autoPlay loop muted></video>
</div>
    </>
  )
}

export default header
