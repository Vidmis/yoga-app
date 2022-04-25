import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { Banner, Carousel, List, Plan, Program, Questions } from "components";
import { logoImg } from "images";

export const Wrapper: React.FC = () => (
  <>
    <header className='bg-blue-300 text-white h-12 flex flex-row items-center justify-center '>
      <FontAwesomeIcon icon={faTag} className='mr-5' />
      <p>50% discount only valid for 00:15:49</p>
    </header>
    <div className='w-full sm:shadow-lg sm:shadow-gray-500/10 border-b sm:border-none flex justify-center items-center py-4'>
      <img src={logoImg} alt='logo' />
    </div>
    <div className='flex flex-col justify-center items-center max-w-sm m-auto sm:max-w-full'>
      <p className='font-normal text-sm mt-10 self-start pl-5 sm:p-0 sm:self-center'>
        Over <span className='font-bold'>52 147</span> plans ordered.
      </p>
      <h1 className='font-extrabold text-3xl lg:text-[40px] mt-8 mb-6 px-4 max-w-sm lg:max-w-none'>
        Get access to your yoga program now!
      </h1>
      <div className='grid grid-cols-2 lg:grid-cols-6 justify-items-center'>
        <div className='flex flex-col lg:flex-row col-start-1 col-span-2 lg:col-start-2 lg:col-span-4'>
          <Plan />
          <Program />
        </div>
        <div className='row-start-2 lg:col-start-2 col-span-4'>
          <Carousel />
        </div>
        <div className=' flex flex-col lg:flex-row row-start-3 col-start-1 col-span-2 lg:col-start-2 lg:col-span-4 mt-14'>
          <Banner />
          <List />
        </div>
        <div className='row-start-4 col-start-1 col-span-2 lg:col-start-2 lg:col-span-4 mb-14'>
          <Questions />
        </div>
        <h1 className='row-start-5 col-start-1 col-span-2 lg:col-start-2 lg:col-span-4 font-bold text-2xl lg:text-3xl mt-4 mb-10 px-4'>
          Start your yoga program today!
        </h1>
        <div className=' flex flex-col lg:flex-row row-start-6 col-start-1 col-span-2 lg:col-start-2 lg:col-span-4'>
          <Plan />
          <Program />
        </div>
      </div>
    </div>
  </>
);
