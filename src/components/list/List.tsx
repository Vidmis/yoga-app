import React from "react";
import { BENEFITS } from "consts";

export const List: React.FC = () => (
  <div className='w-86 lg:ml-8 mb-10 mt-6 lg:mt-0'>
    <h2 className='font-bold text-xl lg:text-2xl self-start mb-8'>
      Is Positive Yoga right for me?
    </h2>
    <ul>
      {BENEFITS.map(({ image, text }, index) => (
        <li key={index} className='flex flex-row mt-5'>
          <img src={image} alt='checkImage' className='w-5 h-5' />
          <p className='ml-3 font-normal text-sm text-gray-900/80'>{text}</p>
        </li>
      ))}
    </ul>
  </div>
);
