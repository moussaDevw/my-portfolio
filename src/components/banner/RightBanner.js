import React from 'react'
import { bannerImg } from "../../assets/index";
import profileBanner from '../../assets/images/myBanner.jpeg';
import ClockApp from '../clock/Clock';
import './styles.css'

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className='relative z-10'>

      <ClockApp className="time" />
      </div>
      
      {/* <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={profileBanner}
        alt="bannerImg"
      /> */}
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner