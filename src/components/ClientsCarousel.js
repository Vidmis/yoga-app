import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import client1 from "../images/clients/client1.png";
import client2 from "../images/clients/client2.png";
import client3 from "../images/clients/client3.png";
import star from "../images/mdi_star.png";
import useWindowDimensions from "./hooks/useWindowDimensions";
import GetPlanButton from "./GetPlanButton";

const clients = [
  {
    name: "Emily",
    age: 28,
    city: "Delaware, NJ",
    rating: 5,
    image: client1,
    text: "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
  },
  {
    name: "Kyle",
    age: 40,
    city: "Los Angeles",
    rating: 5,
    image: client2,
    text: "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.",
  },
  {
    name: "Jesica",
    age: 51,
    city: "San Francisco, CA",
    rating: 5,
    image: client3,
    text: "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.",
  },
];

const ClientsCarousel = () => {
  const { width } = useWindowDimensions();

  const ratingsArr = [];

  const renderStars = (stars) => {
    const starsRated = [];
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
          {clients.map(({ name, age, city, rating, image, text }, index) => {
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
          {clients.map(({ name, age, city, rating, image, text }, index) => {
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
