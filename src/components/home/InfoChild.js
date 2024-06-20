import React from 'react';
import Image1 from '../../assest/home/image1.png';

const InfoChild = () => {
  return (
    <div className='my-6 px-5 flex flex-col-reverse'>
      <div className='flex flex-col justify-center'>
        <h3 className='my-4 text-center text-2xl font-bold'>Easy to use riding telemetry</h3>
        <p className='text-dim-grey text-center'>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
        <button className="mx-auto m-7 px-5 py-2 rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 hover:bg-transparent hover:text-yellow">Learn More</button>
      </div>
      <div className='mx-auto mb-4 w-11/12'>
        <img src={Image1} alt="info-image"/>
      </div>
    </div>
  )
}

export default InfoChild