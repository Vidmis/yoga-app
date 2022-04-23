import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { CLIENTS } from "constants/constants";
import star from "../images/mdi_star.png";
import useWindowDimensions from "./hooks/useWindowDimensions";
import GetPlanButton from "./GetPlanButton";

interface IClientProps {}

const ClientsCarousel: React.FC<IClientProps> = () => {
  const { width } = useWindowDimensions();

  const ratingsArr: Array<JSX.Element[]> = [];

  const renderStars = (stars: number) => {
    const starsRated: JSX.Element[] = [];
    for (let i = 0; i < stars; i++) {
      starsRated.push(<img src={star} alt='star' key={i} />);
    }
    ratingsArr.push(starsRated);
  };

  if (width < 1280) {
    return (
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-xl text-center xl:text-2xl mt-6 lg:mt-14 mb-6 '>
          Hear success stories from our clients
        </h2>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className='mySwiper flex justify-start w-80 shadow-xl rounded-xl mb-8'
        >
          {CLIENTS.map(({ name, age, city, rating, image, text }, index) => {
            renderStars(rating);
            return (
              <SwiperSlide key={index} className='p-6'>
                <div key={index} className='text-base'>
                  <h3 className='mb-4'>
                    <p className='font-semibold'>
                      {name}, {age}
                    </p>
                    <p className='font-normal text-gray-700/50'>{city}</p>
                  </h3>

                  <div className='flex flex-row mb-4'>
                    {ratingsArr[index].map((star) => star)}
                  </div>
                  <img src={image} alt='profile_photo' className='mb-4' />
                  <p className='font-normal text-base mb-4'>{text}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <GetPlanButton>Get my plan</GetPlanButton>
      </div>
    );
  } else {
    return (
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-lg text-center xl:text-2xl mt-14 mb-6 '>
          Hear success stories from our clients
        </h2>
        <ul className='flex flex-row justify-between mb-8'>
          {CLIENTS.map(({ name, age, city, rating, image, text }, index) => {
            renderStars(rating);
            return (
              <li key={index} className='p-6 mx-2 shadow-xl rounded-xl w-80'>
                <div>
                  <h3 className='mb-4'>
                    <p className='font-semibold text-sm'>
                      {name}, {age}
                    </p>
                    <p className='font-normal text-xs text-gray-700/50'>
                      {city}
                    </p>
                  </h3>
                  <div className='flex flex-row mb-4'>
                    {ratingsArr[index].map((star) => star)}
                  </div>
                  <img src={image} alt='profile_photo' className='mb-4' />
                  <p className='font-normal text-base mb-4'>{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <GetPlanButton>Get my plan</GetPlanButton>
      </div>
    );
  }
};

export default ClientsCarousel;
